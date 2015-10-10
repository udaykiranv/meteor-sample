(function(){Meteor.methods({
  'submitPost': function(blogId, title, instrument, technique, timeframe, price, stoploss, target, tags, username) {
    var now = new Date();
    if (blogId) {
      Blogs.update({_id: blogId}, {$set: {title: title, instrument: instrument, price: price, stoploss: stoploss, target : target, technique: technique , timeframe : timeframe, "last_updated_at": now, "username": username}});
    } else {
      var data = Blogs.insert({title: title, instrument: instrument, technique: technique , timeframe : timeframe, price: price, stoploss: stoploss, target : target, "created_at": now, "last_updated_at": now, "username": username} , function(err, result) {
        var blogId = result;
        for(i = 0 ; i < tags.length ; i++) {
          Blogs.addTag(tags[i] , { _id: blogId });
        }
      });
    }
  }
});


Meteor.methods({
  'watchListUnReadCount' : function(userId) {
    var pipeline = [
      { $match : {userId : userId}} , {$group: {_id : null, total: {$sum: "$unreadcount"}}}
    ];
    var result = WatchList.aggregate(pipeline);
    return result[0].total;

  } ,
  'importantUnReadCount' : function(userId) {

    var pipeline = [
      { $match : {userId : userId}} , {$group: {_id : null, total: {$sum: "$unreadcount"}}}
    ];
    var result = Important.aggregate(pipeline);

    if(result){
      return result[0].total;
    }
    return 0;

  },
  'mytradeUnReadCount' : function(userId) {
    var pipeline = [
      { $match : {userId : userId}} , {$group: {_id : null, total: {$sum: "$unreadcount"}}}
    ];
    var result = MyTrades.aggregate(pipeline);
    if(result)
    return result[0].total;
    else
    return 0;

  }
});

Meteor.methods({
  'getBlogs': function() {
    return Blogs.find();
  }
});



Meteor.methods({
  'addToWatchList': function(blogId, userId) {
    WatchList.insert({blogId: blogId, userId: userId});
  },
  'addToImportantList': function(blogId, userId) {
    Important.insert({blogId: blogId, userId: userId});
  },
  'addToMyTradesList': function(blogId, userId) {
    MyTrades.insert({blogId: blogId, userId: userId});
  }});

Meteor.methods({
  'addComment': function(blogId, comment, username) {
  var now = new Date();
    console.log("Blog Id " + blogId);
    Comments.insert({blogId: blogId, comment: comment,  "created_at": now, "username": username});
    WatchList.update({blogId: blogId}, {$inc: {unreadcount : 1}}, { multi: true });
    Important.update({blogId: blogId}, {$inc: {unreadcount : 1}}, { multi: true });
    MyTrades.update({blogId: blogId}, {$inc: {unreadcount : 1}}, { multi: true });
  }
});

Meteor.startup(function() {

  Tags.mixin(Blogs);

});
}).call(this);

//# sourceMappingURL=blogs.js.map
