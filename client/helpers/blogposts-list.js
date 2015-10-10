Template.posts.helpers({

 timeSince: function() {
    var date = this.created_at;
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  },

  blogs: function() {
    userBlogIds = [];

    if (Session.get("type") == "watchlist") {
      userBlogs = WatchList.find({"userId": Meteor.userId()});
    } else if (Session.get("type") == "important") {
      userBlogs = Important.find({"userId": Meteor.userId()});
    } else if (Session.get("type") == "mytrades") {
      userBlogs = MyTrades.find({"userId": Meteor.userId()});
    } else {
      return Blogs.find();
    }

    var userBlogs = userBlogs.fetch();
    for (var i = 0; i < userBlogs.length; i++) {
      userBlog = userBlogs[i];
      userBlogIds.push(userBlog.blogId);
    }
    userBlogs = Blogs.find({_id: {$in: userBlogIds}}, {sort: {created_at: -1}});

     Session.set("selectedPost", userBlogs.fetch()[0])
    return userBlogs;
  }



});


