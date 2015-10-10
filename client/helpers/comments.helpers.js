
Template.comments.comments = function() {
  var selectedPost = Session.get("selectedPost");

  if(selectedPost) {
    return Comments.find({blogId: selectedPost._id});
  }
}

Template.comments.isPostSelected = function() {
  if(Session.get("selectedPost")) {
    return true;
  }
  return false;
}