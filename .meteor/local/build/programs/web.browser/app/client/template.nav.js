(function(){
Template.__checkName("nav");
Template["nav"] = new Template("Template.nav", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default navbar-static-top",
    role: "navigation"
  }, "\n    ", HTML.DIV({
    "class": "container"
  }, "\n      ", HTML.DIV({
    "class": "container-fluid"
  }, "\n        ", HTML.Raw('<div class="navbar-header">\n          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-8">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n          <span class="navbar-brand">\n            Sample Project\n          </span>\n        </div>'), "\n\n        ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-8"
  }, "\n          ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n            ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "home"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Home")), "\n            ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "createBlog"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "createBlog");
    }
  }, "Create Move")), "\n              ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "listBlogs"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "list");
    }
  }, "List Moves")), "\n          "), "\n          ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n            ", Spacebars.include(view.lookupTemplate("atNavButton")), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
