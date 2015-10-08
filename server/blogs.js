Meteor.methods({
  'submitPost': function(blogId, title, instrument, technique, timeframe, price, stoploss, target, userId) {
    var now = new Date();
    if (blogId) {
      Blogs.update({_id: blogId}, {$set: {title: title, instrument: instrument, price: price, stoploss: stoploss, target : target, technique: technique , timeframe : timeframe, "last_updated_at": now, "user": userId}});

    } else {
      Blogs.insert({title: title, instrument: instrument, technique: technique , timeframe : timeframe, price: price, stoploss: stoploss, target : target, "created_at": now, "last_updated_at": now, "user": userId});
    }
  }
});



Meteor.methods({
  'getBlogs': function() {
    console.log("Blogs are + " + Blogs.find().count());
    return Blogs.find();
  }
});

Meteor.publish("myCollection", function () {
  return Blogs.find();
});
