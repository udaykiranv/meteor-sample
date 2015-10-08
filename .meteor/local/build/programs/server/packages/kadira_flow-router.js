(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var Router, Group, Route, FlowRouter, FastRender;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_flow-router/packages/kadira_flow-router.js                              //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
(function () {                                                                             // 1
                                                                                           // 2
//////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                  //     // 4
// packages/kadira:flow-router/server/router.js                                     //     // 5
//                                                                                  //     // 6
//////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                    //     // 8
var Qs = Npm.require('qs');                                                         // 1   // 9
                                                                                    // 2   // 10
Router = function () {                                                              // 3   // 11
  this._routes = [];                                                                // 4   // 12
  this._routesMap = {};                                                             // 5   // 13
  this.subscriptions = Function.prototype;                                          // 6   // 14
};                                                                                  // 7   // 15
                                                                                    // 8   // 16
Router.prototype.route = function(path, options) {                                  // 9   // 17
  if (!/^\/.*/.test(path)) {                                                        // 10  // 18
    var message = "route's path must start with '/'";                               // 11  // 19
    throw new Error(message);                                                       // 12  // 20
  }                                                                                 // 13  // 21
                                                                                    // 14  // 22
  options = options || {};                                                          // 15  // 23
  var route = new Route(this, path, options);                                       // 16  // 24
  this._routes.push(route);                                                         // 17  // 25
                                                                                    // 18  // 26
  if (options.name) {                                                               // 19  // 27
    this._routesMap[options.name] = route;                                          // 20  // 28
  }                                                                                 // 21  // 29
                                                                                    // 22  // 30
  return route;                                                                     // 23  // 31
};                                                                                  // 24  // 32
                                                                                    // 25  // 33
Router.prototype.group = function(options) {                                        // 26  // 34
  return new Group(this, options);                                                  // 27  // 35
};                                                                                  // 28  // 36
                                                                                    // 29  // 37
Router.prototype.path = function(pathDef, fields, queryParams) {                    // 30  // 38
  if (this._routesMap[pathDef]) {                                                   // 31  // 39
    pathDef = this._routesMap[pathDef].path;                                        // 32  // 40
  }                                                                                 // 33  // 41
                                                                                    // 34  // 42
  fields = fields || {};                                                            // 35  // 43
  var regExp = /(:[\w\(\)\\\+\*\.\?]+)+/g;                                          // 36  // 44
  var path = pathDef.replace(regExp, function(key) {                                // 37  // 45
    var firstRegexpChar = key.indexOf("(");                                         // 38  // 46
    // get the content behind : and (\\d+/)                                         // 39  // 47
    key = key.substring(1, (firstRegexpChar > 0)? firstRegexpChar: undefined);      // 40  // 48
    // remove +?*                                                                   // 41  // 49
    key = key.replace(/[\+\*\?]+/g, "");                                            // 42  // 50
                                                                                    // 43  // 51
    return fields[key] || "";                                                       // 44  // 52
  });                                                                               // 45  // 53
                                                                                    // 46  // 54
  path = path.replace(/\/\/+/g, "/"); // Replace multiple slashes with single slash // 47  // 55
                                                                                    // 48  // 56
  // remove trailing slash                                                          // 49  // 57
  // but keep the root slash if it's the only one                                   // 50  // 58
  path = path.match(/^\/{1}$/) ? path: path.replace(/\/$/, "");                     // 51  // 59
                                                                                    // 52  // 60
  var strQueryParams = Qs.stringify(queryParams || {});                             // 53  // 61
  if(strQueryParams) {                                                              // 54  // 62
    path += "?" + strQueryParams;                                                   // 55  // 63
  }                                                                                 // 56  // 64
                                                                                    // 57  // 65
  return path;                                                                      // 58  // 66
};                                                                                  // 59  // 67
                                                                                    // 60  // 68
                                                                                    // 61  // 69
Router.prototype.go = function() {                                                  // 62  // 70
  // client only                                                                    // 63  // 71
};                                                                                  // 64  // 72
                                                                                    // 65  // 73
                                                                                    // 66  // 74
Router.prototype.current = function() {                                             // 67  // 75
  // client only                                                                    // 68  // 76
};                                                                                  // 69  // 77
                                                                                    // 70  // 78
                                                                                    // 71  // 79
Router.prototype.triggers = {                                                       // 72  // 80
  enter: function() {                                                               // 73  // 81
    // client only                                                                  // 74  // 82
  },                                                                                // 75  // 83
  exit: function() {                                                                // 76  // 84
    // client only                                                                  // 77  // 85
  }                                                                                 // 78  // 86
};                                                                                  // 79  // 87
                                                                                    // 80  // 88
Router.prototype.middleware = function() {                                          // 81  // 89
  // client only                                                                    // 82  // 90
};                                                                                  // 83  // 91
                                                                                    // 84  // 92
                                                                                    // 85  // 93
Router.prototype.getState = function() {                                            // 86  // 94
  // client only                                                                    // 87  // 95
};                                                                                  // 88  // 96
                                                                                    // 89  // 97
                                                                                    // 90  // 98
Router.prototype.getAllStates = function() {                                        // 91  // 99
  // client only                                                                    // 92  // 100
};                                                                                  // 93  // 101
                                                                                    // 94  // 102
                                                                                    // 95  // 103
Router.prototype.setState = function() {                                            // 96  // 104
  // client only                                                                    // 97  // 105
};                                                                                  // 98  // 106
                                                                                    // 99  // 107
                                                                                    // 100
Router.prototype.removeState = function() {                                         // 101
  // client only                                                                    // 102
};                                                                                  // 103
                                                                                    // 104
                                                                                    // 105
Router.prototype.clearStates = function() {                                         // 106
  // client only                                                                    // 107
};                                                                                  // 108
                                                                                    // 109
                                                                                    // 110
Router.prototype.ready = function() {                                               // 111
  // client only                                                                    // 112
};                                                                                  // 113
                                                                                    // 114
                                                                                    // 115
Router.prototype.initialize = function() {                                          // 116
  // client only                                                                    // 117
};                                                                                  // 118
                                                                                    // 119
Router.prototype.wait = function() {                                                // 120
  // client only                                                                    // 121
};                                                                                  // 122
                                                                                    // 123
//////////////////////////////////////////////////////////////////////////////////////     // 132
                                                                                           // 133
}).call(this);                                                                             // 134
                                                                                           // 135
                                                                                           // 136
                                                                                           // 137
                                                                                           // 138
                                                                                           // 139
                                                                                           // 140
(function () {                                                                             // 141
                                                                                           // 142
//////////////////////////////////////////////////////////////////////////////////////     // 143
//                                                                                  //     // 144
// packages/kadira:flow-router/server/group.js                                      //     // 145
//                                                                                  //     // 146
//////////////////////////////////////////////////////////////////////////////////////     // 147
                                                                                    //     // 148
Group = function(router, options) {                                                 // 1   // 149
  options = options || {};                                                          // 2   // 150
  this.prefix = options.prefix || '';                                               // 3   // 151
                                                                                    // 4   // 152
  this._router = router;                                                            // 5   // 153
};                                                                                  // 6   // 154
                                                                                    // 7   // 155
Group.prototype.route = function(path, options) {                                   // 8   // 156
  path = this.prefix + path;                                                        // 9   // 157
  return this._router.route(path, options);                                         // 10  // 158
};                                                                                  // 11  // 159
                                                                                    // 12  // 160
Group.prototype.group = function(options) {                                         // 13  // 161
  var group = new Group(this._router, options);                                     // 14  // 162
  group.parent = this;                                                              // 15  // 163
                                                                                    // 16  // 164
  return group;                                                                     // 17  // 165
};                                                                                  // 18  // 166
                                                                                    // 19  // 167
//////////////////////////////////////////////////////////////////////////////////////     // 168
                                                                                           // 169
}).call(this);                                                                             // 170
                                                                                           // 171
                                                                                           // 172
                                                                                           // 173
                                                                                           // 174
                                                                                           // 175
                                                                                           // 176
(function () {                                                                             // 177
                                                                                           // 178
//////////////////////////////////////////////////////////////////////////////////////     // 179
//                                                                                  //     // 180
// packages/kadira:flow-router/server/route.js                                      //     // 181
//                                                                                  //     // 182
//////////////////////////////////////////////////////////////////////////////////////     // 183
                                                                                    //     // 184
Route = function(router, path, options) {                                           // 1   // 185
  options = options || {};                                                          // 2   // 186
  this.options = options;                                                           // 3   // 187
                                                                                    // 4   // 188
  this.path = path;                                                                 // 5   // 189
  this.action = options.action || Function.prototype;                               // 6   // 190
  this.subscriptions = options.subscriptions || Function.prototype;                 // 7   // 191
  this._subsMap = {};                                                               // 8   // 192
};                                                                                  // 9   // 193
                                                                                    // 10  // 194
                                                                                    // 11  // 195
Route.prototype.register = function(name, sub, options) {                           // 12  // 196
  this._subsMap[name] = sub;                                                        // 13  // 197
};                                                                                  // 14  // 198
                                                                                    // 15  // 199
                                                                                    // 16  // 200
Route.prototype.subscription = function(name) {                                     // 17  // 201
  return this._subsMap[name];                                                       // 18  // 202
};                                                                                  // 19  // 203
                                                                                    // 20  // 204
                                                                                    // 21  // 205
Route.prototype.middleware = function(middleware) {                                 // 22  // 206
                                                                                    // 23  // 207
};                                                                                  // 24  // 208
                                                                                    // 25  // 209
//////////////////////////////////////////////////////////////////////////////////////     // 210
                                                                                           // 211
}).call(this);                                                                             // 212
                                                                                           // 213
                                                                                           // 214
                                                                                           // 215
                                                                                           // 216
                                                                                           // 217
                                                                                           // 218
(function () {                                                                             // 219
                                                                                           // 220
//////////////////////////////////////////////////////////////////////////////////////     // 221
//                                                                                  //     // 222
// packages/kadira:flow-router/server/_init.js                                      //     // 223
//                                                                                  //     // 224
//////////////////////////////////////////////////////////////////////////////////////     // 225
                                                                                    //     // 226
// Export Router Instance                                                           // 1   // 227
FlowRouter = new Router();                                                          // 2   // 228
FlowRouter.Router = Router;                                                         // 3   // 229
FlowRouter.Route = Route;                                                           // 4   // 230
                                                                                    // 5   // 231
//////////////////////////////////////////////////////////////////////////////////////     // 232
                                                                                           // 233
}).call(this);                                                                             // 234
                                                                                           // 235
                                                                                           // 236
                                                                                           // 237
                                                                                           // 238
                                                                                           // 239
                                                                                           // 240
(function () {                                                                             // 241
                                                                                           // 242
//////////////////////////////////////////////////////////////////////////////////////     // 243
//                                                                                  //     // 244
// packages/kadira:flow-router/server/plugins/fast_render.js                        //     // 245
//                                                                                  //     // 246
//////////////////////////////////////////////////////////////////////////////////////     // 247
                                                                                    //     // 248
if(!Package['meteorhacks:fast-render']) {                                           // 1   // 249
  return;                                                                           // 2   // 250
}                                                                                   // 3   // 251
                                                                                    // 4   // 252
FastRender = Package['meteorhacks:fast-render'].FastRender;                         // 5   // 253
                                                                                    // 6   // 254
// hack to run after eveything else on startup                                      // 7   // 255
Meteor.startup(function () {                                                        // 8   // 256
  Meteor.startup(function () {                                                      // 9   // 257
    setupFastRender();                                                              // 10  // 258
  });                                                                               // 11  // 259
});                                                                                 // 12  // 260
                                                                                    // 13  // 261
function setupFastRender () {                                                       // 14  // 262
  _.each(FlowRouter._routes, function (route) {                                     // 15  // 263
    FastRender.route(route.path, function (routeParams, path) {                     // 16  // 264
      var self = this;                                                              // 17  // 265
                                                                                    // 18  // 266
      // anyone using Meteor.subscribe for something else?                          // 19  // 267
      var original = Meteor.subscribe;                                              // 20  // 268
      Meteor.subscribe = function () {                                              // 21  // 269
        return _.toArray(arguments);                                                // 22  // 270
      };                                                                            // 23  // 271
                                                                                    // 24  // 272
      route._subsMap = {};                                                          // 25  // 273
      FlowRouter.subscriptions.call(route, path);                                   // 26  // 274
      if(route.subscriptions) {                                                     // 27  // 275
        var queryParams = routeParams.query;                                        // 28  // 276
        var params = _.omit(routeParams, 'query');                                  // 29  // 277
        route.subscriptions(params, queryParams);                                   // 30  // 278
      }                                                                             // 31  // 279
      _.each(route._subsMap, function (args) {                                      // 32  // 280
        self.subscribe.apply(self, args);                                           // 33  // 281
      });                                                                           // 34  // 282
                                                                                    // 35  // 283
      // restore Meteor.subscribe, ... on server side                               // 36  // 284
      Meteor.subscribe = original;                                                  // 37  // 285
    });                                                                             // 38  // 286
  });                                                                               // 39  // 287
}                                                                                   // 40  // 288
                                                                                    // 41  // 289
//////////////////////////////////////////////////////////////////////////////////////     // 290
                                                                                           // 291
}).call(this);                                                                             // 292
                                                                                           // 293
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:flow-router'] = {
  FlowRouter: FlowRouter
};

})();

//# sourceMappingURL=kadira_flow-router.js.map
