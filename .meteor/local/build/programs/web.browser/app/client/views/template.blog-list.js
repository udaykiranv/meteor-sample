(function(){
Template.__checkName("listBlogs");
Template["listBlogs"] = new Template("Template.listBlogs", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "col-md-2",
    style: "background: #FEFEFE"
  }, "\n\n            ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                ", HTML.DIV({
    "class": "ibox-content mailbox-content"
  }, "\n                    ", HTML.DIV({
    "class": "file-manager"
  }, "\n                        ", HTML.Raw('<a class="btn btn-block btn-primary compose-mail" href="/blog">Make a New Move</a>'), "\n\n                        ", HTML.Raw('<div class="space-25"></div>'), "\n                        ", HTML.Raw("<h5>Folders</h5>"), "\n                        ", HTML.UL({
    "class": "folder-list m-b-md",
    style: "padding: 0"
  }, "\n                            ", HTML.Raw('<li><a href="#" class="all"> <i class="fa fa-inbox "></i> All Moves\n                            </a></li>'), "\n                            ", HTML.LI(HTML.A({
    href: "#",
    "class": "watchlist"
  }, " ", HTML.Raw('<i class="fa fa-inbox "></i>'), " Watch List\n                                ", HTML.SPAN({
    "class": "label label-warning pull-right"
  }, Blaze.View("lookup:watchListCount", function() {
    return Spacebars.mustache(view.lookup("watchListCount"));
  })), " ")), "\n                            ", HTML.LI(HTML.A({
    href: "#",
    "class": "mytrades"
  }, " ", HTML.Raw('<i class="fa fa-file-text-o"></i>'), " My Recomendations\n                                ", HTML.SPAN({
    "class": "label label-danger pull-right"
  }, Blaze.View("lookup:myTradeCount", function() {
    return Spacebars.mustache(view.lookup("myTradeCount"));
  })), "\n                            ")), "\n                            ", HTML.Raw('<li><a href="#" class="mytrades"> <i class="fa fa-file-text-o"></i> Most Liked\n                            </a></li>'), "\n                        "), "\n                        ", HTML.Raw("<h5>Categories</h5>"), "\n                        ", HTML.Raw('<ul class="category-list" style="padding: 0">\n                            <li><a href="#"> <i class="fa fa-circle text-navy"></i> Intra Day </a></li>\n                            <li><a href="#"> <i class="fa fa-circle text-danger"></i>Short Term</a></li>\n                            <li><a href="#"> <i class="fa fa-circle text-primary"></i> Medium Term</a></li>\n                            <li><a href="#"> <i class="fa fa-circle text-info"></i> Long Term</a></li>\n                        </ul>'), "\n\n                        ", HTML.Raw('<h5 class="tag-title">Labels</h5>'), "\n                        ", HTML.Raw('<ul class="tag-list" style="padding: 0">\n                            <li><a href=""><i class="fa fa-tag"></i>Waves</a></li>\n                            <li><a href=""><i class="fa fa-tag"></i> Pitchfork</a></li>\n                            <li><a href=""><i class="fa fa-tag"></i> Moving Average</a></li>\n\n                            <li><a href=""><i class="fa fa-tag"></i> Fibonocci</a></li>\n                            <li><a href=""><i class="fa fa-tag"></i> Market Profile</a></li>\n                        </ul>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "col-md-10 animated fadeInRight",
    style: "background: #FEFEFE;background: #FEFEFE;border: 1px solid #e7eaec"
  }, "\n\n            ", HTML.DIV({
    "class": "mail-box-header"
  }, "\n                ", HTML.DIV({
    "class": "input-group"
  }, "\n                    ", HTML.H2("\n                        ", Blaze.View("lookup:type", function() {
    return Spacebars.mustache(view.lookup("type"));
  }), "\n                    "), "\n                "), "\n                ", HTML.Raw('<div class="mail-tools tooltip-demo m-t-md">\n                    <div class="btn-group pull-right">\n                        <button class="btn btn-white btn-sm"><i class="fa fa-arrow-left"></i></button>\n                        <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button>\n\n                    </div>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i></button>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as important"><i class="fa fa-exclamation"></i></button>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Move to trash"><i class="fa fa-trash-o"></i></button>\n\n                </div>'), "\n            "), "\n\n            ", HTML.DIV({
    "class": "col-md-3",
    style: "height:435px;overflow:scroll"
  }, "\n\n            ", Spacebars.include(view.lookupTemplate("posts")), "\n            "), "\n            ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                ", Spacebars.include(view.lookupTemplate("viewblog")), "\n            "), "\n\n            ", HTML.DIV({
    "class": "col-md-3",
    style: "height:435px;overflow:scroll"
  }, "\n            ", Spacebars.include(view.lookupTemplate("comments")), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
