Template.listBlogs.events({
    'click .selected': function(event) {
      Session.set("selectedPost", this);
    },
    'click .watchlist': function() {
      Session.set("type", "watchlist");
      delete Session.keys['selectedPost']
    },
    'click .mytrades': function() {
      Session.set("type", "mytrades");
      delete Session.keys['selectedPost']
    },
    'click .important': function() {
      Session.set("type", "important");
      delete Session.keys['selectedPost']
    },
    'click .all': function() {
      Session.set("type", "all");
      delete Session.keys['selectedPost']
    }

  }


);
