Template.viewblog.isPostSelected = function() {
  if(Session.get("selectedPost")) {
    return true;
  }
  return false;
}


Template.viewblog.selectedPost = function() {
  console.log(":::::: Called selected post ::::");
  return Session.get("selectedPost");
}


Template.viewblog.isInWatchList = function() {
  var selectedPost = Session.get("selectedPost");
  return WatchList.find({"blogId" : selectedPost._id , "userId" : Meteor.userId()}).count() >= 1 ? true : false;
}

Template.viewblog.isInImportantList = function() {
  var selectedPost = Session.get("selectedPost");
  return Important.find({"blogId" : selectedPost._id , "userId" : Meteor.userId()}).count() >= 1 ? true : false;
}

Template.viewblog.isInMyTradesList = function() {
  var selectedPost = Session.get("selectedPost");
  return MyTrades.find({"blogId" : selectedPost._id , "userId" : Meteor.userId()}).count() >= 1? true : false;

}
