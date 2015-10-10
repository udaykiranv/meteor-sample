Template.comments.events({
  'submit': function(event) {

    event.preventDefault();

    var selectedPost = Session.get("selectedPost");
    var blogId = selectedPost._id;
    var comment = $('#newcomment').val();
    var username = Meteor.user().username;

    Meteor.call('addComment', blogId, comment, username);

  },
  'keydown #newcomment': function(event) {

    if(event.keyCode == 13) {
      event.preventDefault();
      $("#commentform").submit();
      $('#newcomment').val("");
    }
  }
});
