Template.viewblog.events({
    'click .watchlist_add': function() {
      var selectedPost = Session.get("selectedPost");
      Meteor.call('addToWatchList', selectedPost._id, Meteor.userId());
      sAlert.error('Added to watch list ', {
        effect: 'genie',
        position: 'bottom-right',
        timeout: '5',
        onRouteClose: false,
        stack: false,
        offset: '80px'
      });
    },
    'click .mytrade_add': function() {
      var selectedPost = Session.get("selectedPost");
      Meteor.call('addToMyTradesList', selectedPost._id, Meteor.userId());

      sAlert.warning('Added to My trade ', {
        effect: 'genie',
        position: 'bottom-right',
        timeout: '5',
        onRouteClose: false,
        stack: false,
        offset: '80px'
      });
    },
    'click .important_add': function() {
      var selectedPost = Session.get("selectedPost");

      Meteor.call('addToImportantList', selectedPost._id, Meteor.userId());

      sAlert.info('Added to Important list ', {
        effect: 'jelly',
        position: 'bottom-right',
        timeout: '5',
        onRouteClose: false,
        stack: false,
        offset: '80px'
      });
    }
  }
);