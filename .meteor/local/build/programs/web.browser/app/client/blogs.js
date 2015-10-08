(function(){Template.createBlog.events({
  'submit #blogForm' : function(event) {
    event.preventDefault();

    var target = $('#target').val();
    var price = $('#price').val();
    var stoploss = $('#stoploss').val();
    var instrument = $('#instrument').val();
    var technique = $('#technique').val();
    var timeframe = $('#timeframe').val();



    var title = price > target ? "BUY " : "SELL  " + instrument + " AT " + price + " TARGET " + target + "  SL " + stoploss;


    Meteor.call('submitPost','', title, instrument, technique, timeframe,price, stoploss, target, Meteor.userId());
  }});

Template.editBlog.events({
  'submit #blogForm' : function(event) {
    event.preventDefault();
    var title = $('#blogTitle').val();
    var body = $('#blogBody').val();
    var blogId = FlowRouter.current().params.blogId;
   // var firstName = Meteor.user().profile["first-name"];
    Meteor.call('submitPost', blogId, title, body, firstName);
  }});

/*
Template.listBlogs.events({
  'click .delete' : function(e) {
    event.preventDefault();
    var _id = e.target.getAttribute("data");
    Blogs.remove({_id :_id });
  }
});

Template.listBlogs.blogs = function() {
  return Blogs.find();
}

*/
Template.editBlog.helpers({
  blog: function() {
    var blogId = FlowRouter.current().params.blogId;
    var blog = Blogs.findOne({_id : blogId})
    return blog;
  },

});

Template.listBlogs.helpers({

  blogs : function() {
   /* console.log(Blogs.find({}).count());


    var blogs = [];
    var blog = { };
    blog.title = "Hello Uday";
    blog.price = 100;

    var blog1 = { };
    blog1.title = "Hello Uday";
    blog1.price = 100;

    blogs.push(blog1)
    blogs.push(blog)
    return Blogs.find({}).fetch();*/

    //Meteor.subscribe("myCollection");
    return Blogs.find();
  }
});







}).call(this);
