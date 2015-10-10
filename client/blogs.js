Template.viewblog.selectedPost = function() {
  return Session.get("selectedPost");
};

Template.listBlogs.helpers({

/*  watchListCount: function() {

    Meteor.setInterval(function() {
      var count = Meteor.call('watchListUnReadCount', Meteor.userId(), function(err, result) {
        Session.set("watchlist_count", result);
      });
    }, 60000);
    return Session.get("watchlist_count");
  },
  importantCount: function() {
    Meteor.setInterval(function() {
      var count = Meteor.call('importantUnReadCount', Meteor.userId(), function(err, result) {
        Session.set("important_count", result);
      });
    }, 60000);

    return Session.get("important_count");
  },
  myTradeCount: function() {
    Meteor.setInterval(function() {
      var count = Meteor.call('mytradeUnReadCount', Meteor.userId(), function(err, result) {
        Session.set("mytrade_count", result);
      });
    }, 60000);

    return Session.get("mytrade_count");
  },*/

  type : function() {
    return Session.get("type") ? Session.get("type") : "All Moves";
  }
});


