(function(){
Template.body.addContent((function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("sAlert"));
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);
