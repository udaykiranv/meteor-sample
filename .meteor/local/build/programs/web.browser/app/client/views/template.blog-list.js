(function(){
Template.__checkName("listBlogs");
Template["listBlogs"] = new Template("Template.listBlogs", (function() {
  var view = this;
  return HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.Raw('<div class="col-lg-2">\n                <div class="ibox float-e-margins">\n                    <div class="ibox-content mailbox-content">\n                        <div class="file-manager">\n                            <a class="btn btn-block btn-primary compose-mail" href="create_move.html">Make a New Move</a>\n\n                            <div class="space-25"></div>\n                            <h5>Folders</h5>\n                            <ul class="folder-list m-b-md" style="padding: 0">\n                                <li><a href="mailbox.html"> <i class="fa fa-inbox "></i> Watch List\n                                    <span class="label label-warning pull-right">16</span> </a></li>\n                                <li><a href="mailbox.html"> <i class="fa fa-envelope-o"></i> Most Liked </a></li>\n                                <li><a href="mailbox.html"> <i class="fa fa-certificate"></i> Important</a></li>\n                                <li><a href="mailbox.html"> <i class="fa fa-file-text-o"></i> My Trades\n                                    <span class="label label-danger pull-right">2</span></a></li>\n                                <li><a href="mailbox.html"> <i class="fa fa-trash-o"></i> Custom</a></li>\n                            </ul>\n                            <h5>Categories</h5>\n                            <ul class="category-list" style="padding: 0">\n                                <li><a href="#"> <i class="fa fa-circle text-navy"></i> Intra Day </a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-danger"></i>Short Term</a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-primary"></i> Medium Term</a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-info"></i> Long Term</a></li>\n                            </ul>\n\n                            <h5 class="tag-title">Labels</h5>\n                            <ul class="tag-list" style="padding: 0">\n                                <li><a href=""><i class="fa fa-tag"></i>Waves</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Pitchfork</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Moving Average</a></li>\n\n                                <li><a href=""><i class="fa fa-tag"></i> Fibonocci</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Market Profile</a></li>\n                            </ul>\n                            <div class="clearfix"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-lg-10 animated fadeInRight"
  }, "\n                ", HTML.Raw('<div class="mail-box-header">\n\n                    <form method="get" action="index.html" class="pull-right mail-search">\n                        <div class="input-group">\n                            <input type="text" class="form-control input-sm" name="search" placeholder="Search Moves">\n\n                            <div class="input-group-btn">\n                                <button type="submit" class="btn btn-sm btn-primary">\n                                    Search\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                    <h2>\n                        Watchlist (16)\n                    </h2>\n\n                    <div class="mail-tools tooltip-demo m-t-md">\n                        <div class="btn-group pull-right">\n                            <button class="btn btn-white btn-sm"><i class="fa fa-arrow-left"></i></button>\n                            <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button>\n\n                        </div>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i></button>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as important"><i class="fa fa-exclamation"></i></button>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Move to trash"><i class="fa fa-trash-o"></i></button>\n\n                    </div>\n                </div>'), "\n                ", HTML.DIV({
    "class": "fh-column"
  }, "\n                    ", HTML.DIV({
    "class": "full-height-scroll"
  }, "\n                        ", HTML.UL({
    "class": "list-group elements-list"
  }, "\n                            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("blogs"));
  }, function() {
    return [ "\n                                ", HTML.LI({
      "class": "list-group-item"
    }, "\n                                    ", HTML.A({
      "data-toggle": "tab",
      href: "#tab-1"
    }, "\n                                        ", HTML.SMALL({
      "class": "pull-right text-muted"
    }, " 15 minutes ago"), "\n                                        ", HTML.STRONG("Uday"), "\n\n                                        ", HTML.DIV({
      "class": "small m-t-xs"
    }, "\n                                            ", HTML.P("\n                                                ", Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }), "\n                                            "), "\n\n                                            ", HTML.P({
      "class": "m-b-xs"
    }, "\n                                                ", HTML.SPAN({
      "class": "label pull-right label-primary"
    }, "Market Profile"), "\n                                                ", HTML.I({
      "class": "fa fa-map-marker"
    }), " Intraday\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            " ];
  }), "\n                        "), "\n\n                    "), "\n                "), "\n\n                ", HTML.DIV({
    "class": "full-height"
  }, "\n                    ", HTML.DIV({
    "class": "full-height-scroll white-bg border-left"
  }, "\n\n                        ", HTML.DIV({
    "class": "element-detail-box"
  }, "\n\n                            ", HTML.DIV({
    "class": "tab-content"
  }, "\n                                ", HTML.DIV({
    id: "tab-1",
    "class": "tab-pane active"
  }, "\n\n                                    ", HTML.Raw('<div class="pull-right">\n                                        <div class="tooltip-demo">\n                                            <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i class="fa fa-plug"></i> Plug it\n                                            </button>\n                                            <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i></button>\n                                            <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important">\n                                                <i class="fa fa-exclamation"></i></button>\n                                            <button class="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to tras"><i class="fa fa-twitter"></i>\n                                            </button>\n\n                                        </div>\n                                    </div>'), "\n                                    ", HTML.Raw('<div class="small text-muted">\n                                        <i class="fa fa-clock-o"></i> Friday, 12 April 2014, 12:32 am\n                                    </div>'), "\n\n                                    ", HTML.Raw("<h1>\n                                        Buy Infosys at 1090. SL 1070. Target 1150\n                                    </h1>"), "\n\n                                    ", HTML.DIV({
    "class": "row"
  }, "\n                                        ", HTML.Raw('<div class="col-md-6">\n                                            <img src="/img/chart.jpg" width="90%">\n\n                                            <p>\n                                                Remarks: Value Area has been breached. We are looking at 80% trade\n                                            </p>\n                                        </div>'), "\n                                        ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                                            ", HTML.Raw('<div class="chat-message left">\n                                                <img class="message-avatar" src="/img/a1.jpg" alt="">\n\n                                                <div class="message">\n                                                    <a class="message-author" href="#"> Michael Smith </a>\n                                                    <span class="message-date"> Mon Jan 26 2015 - 18:39:23 </span>\n                                            <span class="message-content">\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n                                            </span>\n                                                </div>\n                                            </div>'), "\n                                            ", HTML.Raw('<div class="chat-message right">\n                                                <img class="message-avatar" src="/img/a2.jpg" alt="">\n\n                                                <div class="message">\n                                                    <a class="message-author" href="#"> Karl Jordan </a>\n                                                    <span class="message-date">  Fri Jan 25 2015 - 11:12:36 </span>\n                                            <span class="message-content">\n                      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover.\n                                            </span>\n                                                </div>\n                                            </div>'), "\n                                            ", HTML.DIV({
    "class": "chat-message-form"
  }, "\n\n                                                ", HTML.DIV({
    "class": "form-group"
  }, "\n\n                                                    ", HTML.TEXTAREA({
    "class": "form-control message-input",
    name: "message",
    placeholder: "Discuss Move"
  }), "\n                                                "), "\n\n                                            "), "\n\n                                        "), "\n                                    "), "\n\n\n                                "), "\n\n                            "), "\n\n                        "), "\n\n                    "), "\n                "), "\n\n            "), "\n        "), "\n    ");
}));

}).call(this);