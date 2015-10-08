(function(){
Template.__checkName("editBlog");
Template["editBlog"] = new Template("Template.editBlog", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.call(view.lookup("blog"));
  }, function() {
    return [ "\n    ", HTML.FORM({
      name: "blogForm",
      id: "blogForm"
    }, "\n    ", HTML.DIV({
      "class": "wrapper wrapper-content"
    }, "\n        ", HTML.DIV({
      "class": "container"
    }, "\n            ", HTML.DIV({
      "class": "row animated fadeIn"
    }, "\n                ", HTML.DIV({
      "class": "col-md-8"
    }, "\n                    ", HTML.DIV({
      "class": "ibox float-e-margins"
    }, "\n                        ", HTML.DIV({
      "class": "ibox-title"
    }, "\n                            ", HTML.H5("Upload Chart"), "\n\n                            ", HTML.DIV({
      "class": "ibox-tools"
    }, "\n                                ", HTML.A({
      "class": "collapse-link"
    }, "\n                                    ", HTML.I({
      "class": "fa fa-chevron-up"
    }), "\n                                "), "\n                                ", HTML.A({
      "class": "dropdown-toggle",
      "data-toggle": "dropdown",
      href: "#"
    }, "\n                                    ", HTML.I({
      "class": "fa fa-wrench"
    }), "\n                                "), "\n                                ", HTML.UL({
      "class": "dropdown-menu dropdown-user"
    }, "\n                                    ", HTML.LI(HTML.A({
      href: "#"
    }, "Config option 1"), "\n                                    "), "\n                                    ", HTML.LI(HTML.A({
      href: "#"
    }, "Config option 2"), "\n                                    "), "\n                                "), "\n                                ", HTML.A({
      "class": "close-link"
    }, "\n                                    ", HTML.I({
      "class": "fa fa-times"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "ibox-content"
    }, "\n                           ", HTML.DIV(" \n                            ", HTML.IMG({
      src: "https://www.google.com/finance/getchart?q=NIFTY&p=1D&i=60"
    }), "\n                           "), "\n\n                        "), "\n                    "), "\n\n                "), "\n                ", HTML.DIV({
      "class": "col-md-4"
    }, "\n                    ", HTML.DIV({
      "class": "ibox float-e-margins"
    }, "\n                        ", HTML.DIV({
      "class": "ibox-title"
    }, "\n                            ", HTML.H5("Chart Details"), "\n\n                            ", HTML.DIV({
      "class": "ibox-tools"
    }, "\n                                ", HTML.A({
      "class": "collapse-link"
    }, "\n                                    ", HTML.I({
      "class": "fa fa-chevron-up"
    }), "\n                                "), "\n                                ", HTML.A({
      "class": "dropdown-toggle",
      "data-toggle": "dropdown",
      href: "#"
    }, "\n                                    ", HTML.I({
      "class": "fa fa-wrench"
    }), "\n                                "), "\n                                ", HTML.UL({
      "class": "dropdown-menu dropdown-user"
    }, "\n                                    ", HTML.LI(HTML.A({
      href: "#"
    }, "Config option 1"), "\n                                    "), "\n                                    ", HTML.LI(HTML.A({
      href: "#"
    }, "Config option 2"), "\n                                    "), "\n                                "), "\n                                ", HTML.A({
      "class": "close-link"
    }, "\n                                    ", HTML.I({
      "class": "fa fa-times"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "ibox-content"
    }, "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "checkbox-inline"
    }, HTML.INPUT({
      type: "radio",
      value: "option1",
      id: "inlineCheckbox1"
    }), " Equity "), "\n                                ", HTML.LABEL({
      "class": "checkbox-inline"
    }, HTML.INPUT({
      type: "radio",
      value: "option2",
      id: "inlineCheckbox2"
    }), " Currency "), "\n                                ", HTML.LABEL({
      "class": "checkbox-inline"
    }, HTML.INPUT({
      type: "radio",
      value: "option3",
      id: "inlineCheckbox3"
    }), " Commodity "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "for": "timeframe"
    }, "Select Timeframe "), "\n                                ", HTML.SELECT({
      "class": "form-control",
      name: "timeframe",
      id: "timeframe"
    }, "\n                                    ", HTML.OPTION(), "\n                                    ", HTML.OPTION({
      value: "1 minute"
    }, "1 minute"), "\n                                    ", HTML.OPTION({
      value: "5 minute"
    }, "5 minute"), "\n                                    ", HTML.OPTION({
      value: "15 minute"
    }, "15 minute"), "\n                                    ", HTML.OPTION({
      value: "30 minute"
    }, "30 minute"), "\n                                    ", HTML.OPTION({
      value: "1 hour"
    }, "1 hour"), "\n                                    ", HTML.OPTION({
      value: "Daily"
    }, "Daily"), "\n                                    ", HTML.OPTION({
      value: "Weekly"
    }, "Weekly"), "\n                                    ", HTML.OPTION({
      value: "Monthly"
    }, "Monthly"), "\n                                    ", HTML.OPTION({
      value: "Quarterly"
    }, "Quarterly"), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "for": "technique"
    }, "Select Technique "), "\n                                ", HTML.SELECT({
      "class": "form-control",
      id: "technique",
      name: "technique"
    }, "\n                                    ", HTML.OPTION(), "\n                                    ", HTML.OPTION({
      value: "Orderflow"
    }, "Orderflow"), "\n                                    ", HTML.OPTION({
      value: "Patterns"
    }, "Candlestick Patterns"), "\n                                    ", HTML.OPTION({
      value: "Fibonocci Ratios"
    }, "Fibonocci Ratios"), "\n                                    ", HTML.OPTION({
      value: "Moving Averages"
    }, "Moving Averages"), "\n                                    ", HTML.OPTION({
      value: "Elliot Wave"
    }, "Elliot Wave"), "\n                                    ", HTML.OPTION({
      value: "Wolfe Wave"
    }, "Wolfe Wave"), "\n                                    ", HTML.OPTION({
      value: "Market Profile"
    }, "Market Profile"), "\n                                    ", HTML.OPTION({
      value: "Others"
    }, "Others"), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "for": "instrument"
    }, "Select Instrument "), "\n\n                                ", HTML.SELECT({
      "class": "form-control",
      name: "instrument",
      id: "instrument"
    }, "\n                                    ", HTML.OPTION(), "\n                                    ", HTML.OPTION({
      value: "Nifty Future"
    }, "Nifty"), "\n                                    ", HTML.OPTION({
      value: "Mexico"
    }, "Bank Nifty"), "\n                                    ", HTML.OPTION({
      value: "Micronesia, Federated States of"
    }, "Infosys"), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hr-line-dashed"
    }), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.INPUT({
      "class": "col-md-4",
      type: "text",
      placeholder: "Entry Price",
      id: "price",
      value: function() {
        return Spacebars.mustache(view.lookup("price"));
      }
    }), "\n                                    ", HTML.INPUT({
      "class": "col-md-4",
      type: "text",
      placeholder: "Stop Loss",
      id: "stoploss",
      value: function() {
        return Spacebars.mustache(view.lookup("stoploss"));
      }
    }), "\n                                    ", HTML.INPUT({
      "class": "col-md-4",
      type: "text",
      placeholder: "Target",
      id: "target",
      value: function() {
        return Spacebars.mustache(view.lookup("target"));
      }
    }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "hr-line-dashed"
    }), "\n                            ", HTML.BR(), "\n                            ", HTML.BUTTON({
      "class": "btn btn-primary",
      type: "submit"
    }, "Make a Move\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n    "), "\n" ];
  });
}));

}).call(this);
