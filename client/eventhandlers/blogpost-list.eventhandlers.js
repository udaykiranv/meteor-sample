Template.listBlogs.events({
    'click .selected': function(event) {
      Session.set("selectedPost", this);
    },
    'click .watchlist': function() {
      Session.set("type", "watchlist");
      delete Session.keys['selectedPost']
    },
    'click .myrecomendations': function() {
      Session.set("type", "myrecomendations");
      delete Session.keys['selectedPost']
    },
    'click .important': function() {
      Session.set("type", "important");
      delete Session.keys['selectedPost']
    },
    'click .all': function() {
      Session.set("type", "all");
      delete Session.keys['selectedPost']
    },
    'click .intraday': function() {
      alert("Intra day");
      Session.set("type", "intraday");
      delete Session.keys['selectedPost']
    },
    'click .shortterm': function() {
      alert("shortterm");
      Session.set("type", "shortterm");
      delete Session.keys['selectedPost']
    },
    'click .mediumterm': function() {
      alert("mediumterm");
      Session.set("type", "mediumterm");
      delete Session.keys['selectedPost']
    },
    'click .longterm': function() {
      alert("longterm");
      Session.set("type", "longterm");
      delete Session.keys['selectedPost']
    }

  }


);
