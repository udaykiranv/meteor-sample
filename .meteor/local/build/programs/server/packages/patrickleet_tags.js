(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var Tags;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/patrickleet_tags/packages/patrickleet_tags.js                                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
(function () {                                                                                             // 1
                                                                                                           // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                  //     // 4
// packages/patrickleet:tags/patrickleet-tags.js                                                    //     // 5
//                                                                                                  //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                    //     // 8
/*                                                                                                  // 1   // 9
  @Inspired by original version by @apendua / apendua@gmail.com                                     // 2   // 10
  @git: https://github.com/apendua/meteor-tags                                                      // 3   // 11
                                                                                                    // 4   // 12
  @Current version - @patrickleet                                                                   // 5   // 13
  @git: https://github.com/patrickleet/meteor-tags                                                  // 6   // 14
*/                                                                                                  // 7   // 15
                                                                                                    // 8   // 16
Tags = {};                                                                                          // 9   // 17
                                                                                                    // 10  // 18
Meteor.tags = new Meteor.Collection("tags");                                                        // 11  // 19
                                                                                                    // 12  // 20
var _ = Package.underscore._;                                                                       // 13  // 21
var tagsInterface = {};                                                                             // 14  // 22
var collections = {};                                                                               // 15  // 23
var validators = {};                                                                                // 16  // 24
var defaultCollection = null;                                                                       // 17  // 25
var hasCollection2 = !!Package['aldeed:collection2'];                                               // 18  // 26
var hasSimpleSchema = !!Package['aldeed:simple-schema'];                                            // 19  // 27
                                                                                                    // 20  // 28
var safe = function (userId, collection, selector, action) {                                        // 21  // 29
  var count = 0;                                                                                    // 22  // 30
  if (!_.isFunction(action))                                                                        // 23  // 31
    return;                                                                                         // 24  // 32
                                                                                                    // 25  // 33
  collection.find(selector).forEach(function (doc) {                                                // 26  // 34
    var allow = Meteor.isClient || _.some(validators[collection._name].allow, function (callback) { // 27  // 35
      return callback.call(undefined, userId, doc);                                                 // 28  // 36
    });                                                                                             // 29  // 37
    var deny = !Meteor.isClient && _.some(validators[collection._name].deny, function (callback) {  // 30  // 38
      return callback.call(undefined, userId, doc);                                                 // 31  // 39
    });                                                                                             // 32  // 40
    if (!allow || deny)                                                                             // 33  // 41
      throw new Meteor.Error(403, 'Action not allowed');                                            // 34  // 42
    if (action.call(undefined, doc))                                                                // 35  // 43
      count++;                                                                                      // 36  // 44
  });                                                                                               // 37  // 45
  return count;                                                                                     // 38  // 46
};                                                                                                  // 39  // 47
                                                                                                    // 40  // 48
_.extend(Tags, {                                                                                    // 41  // 49
                                                                                                    // 42  // 50
  TagsMixin: function (collection) {                                                                // 43  // 51
                                                                                                    // 44  // 52
    if (!collection._name)                                                                          // 45  // 53
      throw new Error('tags mixin may only be used with named collections');                        // 46  // 54
                                                                                                    // 47  // 55
    // for further reference                                                                        // 48  // 56
    collections[collection._name] = collection;                                                     // 49  // 57
    validators[collection._name] = { allow: [], deny: [] };                                         // 50  // 58
                                                                                                    // 51  // 59
    if (!defaultCollection)                                                                         // 52  // 60
      defaultCollection = collection;                                                               // 53  // 61
                                                                                                    // 54  // 62
    // prepare methods object                                                                       // 55  // 63
    var methods = {}, prefix = '/' + collection._name + '/';                                        // 56  // 64
                                                                                                    // 57  // 65
    // server methods                                                                               // 58  // 66
                                                                                                    // 59  // 67
    methods[prefix + 'addTag'] = function (selector, tagName, tagGroup) {                           // 60  // 68
      if (!tagName)                                                                                 // 61  // 69
        throw new Meteor.Error(400, 'tagName must be non-empty');                                   // 62  // 70
                                                                                                    // 63  // 71
      var tagGroupKey = (!!tagGroup) ? tagGroup + "Tags" : 'tags';                                  // 64  // 72
                                                                                                    // 65  // 73
      var userId = this.userId;                                                                     // 66  // 74
                                                                                                    // 67  // 75
      //TODO: optimize this                                                                         // 68  // 76
      var nRefs = safe(userId, collection, selector, function (doc) {                               // 69  // 77
        // first add tagName to tag's list of selected documents                                    // 70  // 78
        if (doc[tagGroupKey] && doc[tagGroupKey].indexOf(tagName) >= 0)                             // 71  // 79
          // this tag is already there so don't update                                              // 72  // 80
          return false;                                                                             // 73  // 81
                                                                                                    // 74  // 82
        // create an object to add tag to group                                                     // 75  // 83
        // and also add group to tagGroups                                                          // 76  // 84
        var updateOptions = {};                                                                     // 77  // 85
        updateOptions.$addToSet = {};                                                               // 78  // 86
        updateOptions.$addToSet[tagGroupKey] = tagName;                                             // 79  // 87
        if (!!tagGroup) {                                                                           // 80  // 88
          updateOptions.$addToSet.tagGroups = tagGroup;                                             // 81  // 89
        }                                                                                           // 82  // 90
                                                                                                    // 83  // 91
        // if collection2 and attached schema use validate:false and create temp schema             // 84  // 92
        // so it isn't cleaned                                                                      // 85  // 93
        if (hasCollection2 && hasSimpleSchema && !!collection.simpleSchema()) {                     // 86  // 94
          var tempSchema = {};                                                                      // 87  // 95
          tempSchema[tagGroupKey] = {                                                               // 88  // 96
            type: [String],                                                                         // 89  // 97
            optional: true                                                                          // 90  // 98
          };                                                                                        // 91  // 99
          tempSchema.tagGroups = {                                                                  // 92  // 100
            type: [String],                                                                         // 93  // 101
            optional: true                                                                          // 94  // 102
          };                                                                                        // 95  // 103
          var tempSimpleSchema = new SimpleSchema(tempSchema);                                      // 96  // 104
          collection.attachSchema(tempSimpleSchema);                                                // 97  // 105
          collection.update({_id:doc._id}, updateOptions, {validate: false});                       // 98  // 106
        } else {                                                                                    // 99  // 107
          collection.update({_id:doc._id}, updateOptions);                                          // 100
        }                                                                                           // 101
                                                                                                    // 102
        return true;                                                                                // 103
      });//safe                                                                                     // 104
                                                                                                    // 105
      if (nRefs) {                                                                                  // 106
        // if at least one tag was added, update tags collection                                    // 107
        var tag = Meteor.tags.findOne({                                                             // 108
          name: tagName,                                                                            // 109
          collection: collection._name,                                                             // 110
          group: tagGroup                                                                           // 111
        });                                                                                         // 112
                                                                                                    // 113
        if (tag) {                                                                                  // 114
          Meteor.tags.update({_id:tag._id}, {                                                       // 115
            $inc : { nRefs     : nRefs },                                                           // 116
            $set : { changedAt : new Date() },                                                      // 117
          });                                                                                       // 118
          return tag._id;                                                                           // 119
        }                                                                                           // 120
                                                                                                    // 121
        return Meteor.tags.insert({                                                                 // 122
          collection : collection._name,                                                            // 123
          createdBy  : userId,                                                                      // 124
          createdAt  : new Date(),                                                                  // 125
          nRefs      : nRefs,                                                                       // 126
          name       : tagName,                                                                     // 127
          group      : tagGroup                                                                     // 128
        });                                                                                         // 129
      }// if (nRefs)                                                                                // 130
    };//addTag                                                                                      // 131
                                                                                                    // 132
    methods[prefix + 'removeTag'] = function (selector, tagName, tagGroup) {                        // 133
      var tagGroupKey = (!!tagGroup) ? tagGroup + "Tags" : 'tags';                                  // 134
      var nRefs = safe(this.userId, collection, selector, function (doc) {                          // 135
        if (!doc[tagGroupKey] || doc[tagGroupKey].indexOf(tagName) < 0)                             // 136
          return false;                                                                             // 137
                                                                                                    // 138
        var updateOptions = {};                                                                     // 139
        updateOptions.$pull = {};                                                                   // 140
        updateOptions.$pull[tagGroupKey] = tagName;                                                 // 141
        // if there will be no tags in the group, remove the group from tagGroups                   // 142
        if ( (doc[tagGroupKey].length - 1) === 0) {                                                 // 143
          updateOptions.$pull.tagGroups = tagGroup;                                                 // 144
        }                                                                                           // 145
                                                                                                    // 146
        // if collection2 use validate:false                                                        // 147
        if (hasCollection2 && !!collection.simpleSchema()) {                                        // 148
          collection.update({_id:doc._id}, updateOptions, {validate: false});                       // 149
        } else {                                                                                    // 150
          collection.update({_id:doc._id}, updateOptions);                                          // 151
        }                                                                                           // 152
                                                                                                    // 153
        return true;                                                                                // 154
      });                                                                                           // 155
      //                                                                                            // 156
      if (nRefs) {                                                                                  // 157
        Meteor.tags.update({                                                                        // 158
          name: tagName,                                                                            // 159
          collection: collection._name,                                                             // 160
          group: tagGroup                                                                           // 161
        }, {                                                                                        // 162
          $inc : { nRefs : -1 },                                                                    // 163
          $set : { changedAt : new Date() },                                                        // 164
        });                                                                                         // 165
        // Remove any unused tags                                                                   // 166
        Meteor.tags.remove({nRefs: 0});                                                             // 167
      }                                                                                             // 168
    };                                                                                              // 169
                                                                                                    // 170
    // client methods                                                                               // 171
                                                                                                    // 172
    collection.addTag = function (tagName, tagGroup, selector) {                                    // 173
      // if tagGroup is an object, then it's probably a selector object                             // 174
      if (typeof tagGroup === 'object') {                                                           // 175
        selector = tagGroup;                                                                        // 176
        tagGroup = undefined;                                                                       // 177
      }                                                                                             // 178
      Meteor.call(prefix + 'addTag', selector, tagName, tagGroup, function (err) {                  // 179
        if (err) throw new Meteor.Error(500, 'Unable to add tag ' + tagName, err);                  // 180
      });                                                                                           // 181
    };                                                                                              // 182
                                                                                                    // 183
    collection.removeTag = function (tagName, tagGroup, selector) {                                 // 184
      if (typeof tagGroup === 'object') {                                                           // 185
        selector = tagGroup;                                                                        // 186
        tagGroup = undefined;                                                                       // 187
      }                                                                                             // 188
      Meteor.call(prefix + 'removeTag', selector, tagName, tagGroup, function (err) {               // 189
        if (err) throw new Meteor.Error(500, 'Unable to remove tag ' + tagName, err);               // 190
      });                                                                                           // 191
    };                                                                                              // 192
                                                                                                    // 193
    //TODO: use allow/deny pattern                                                                  // 194
                                                                                                    // 195
    collection.allowTags = function (callback) {                                                    // 196
      if (!_.isFunction(callback))                                                                  // 197
        throw new Error('allow callback must be a function');                                       // 198
      validators[collection._name].allow.push(callback);                                            // 199
    };                                                                                              // 200
                                                                                                    // 201
    collection.denyTags = function (callback) {                                                     // 202
      if (!_.isFunction(callback))                                                                  // 203
        throw new Error('dany callback must be a function');                                        // 204
      validators[collection._name].deny.push(callback);                                             // 205
    };                                                                                              // 206
                                                                                                    // 207
    // define meteor methods                                                                        // 208
                                                                                                    // 209
    Meteor.methods(methods);                                                                        // 210
  },                                                                                                // 211
                                                                                                    // 212
  _getCollection: function (name) {                                                                 // 213
    if (!name)                                                                                      // 214
      return defaultCollection;                                                                     // 215
    return collections[name];                                                                       // 216
  },                                                                                                // 217
                                                                                                    // 218
});                                                                                                 // 219
                                                                                                    // 220
//////////////////////////////////////////////////////////////////////////////////////////////////////     // 229
                                                                                                           // 230
}).call(this);                                                                                             // 231
                                                                                                           // 232
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['patrickleet:tags'] = {
  Tags: Tags
};

})();

//# sourceMappingURL=patrickleet_tags.js.map
