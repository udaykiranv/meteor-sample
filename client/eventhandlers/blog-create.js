Template.createBlog.rendered= function() {
  $('.tags').tagsinput();

  var $input = $('.typeahead');
  $input.typeahead({source:[{id: "someId1", name: "Display name 1"},
    {id: "someId2", name: "Display name 2"} , {id : "INFY OCT PE 1100 " ,name : "INFY OCT PE 1100"},
    {id : "INFY OCT PE 1000 " ,name : "INFY OCT PE 1000"},
    {id : "INFY NOV PE 1100 " ,name : "INFY NOV PE 1100"},
    {id : "INFY OCT FUT " ,name : "INFY OCT FUT"}
  ],
    autoSelect: true});



};


Template.createBlog.events({
  'submit #blogForm': function(event) {
    event.preventDefault();

    var target = $('#target').val();
    var price = $('#price').val();
    var stoploss = $('#stoploss').val();
    var instrument = $('#instrument').val();
    var technique = $('#technique').val();
    var timeframe = $('#timeframe').val();
    var username = Meteor.user().username;
    var userId = Meteor.userId();
    var tags = $('#tags').val();
    tags = tags.split(",");

    //blogId = "6t5F8zNENmp5Ni6v7";




    var title = (parseInt(price) < parseInt(target) ? "BUY " : "SELL  ") + instrument + " AT " + price + " TARGET " + target + "  SL " + stoploss;

    Meteor.call('submitPost', '', title, instrument, technique, timeframe, price, stoploss, target, tags, userId, username);
  },

  'change #timeframe': function(event) {

    var timeframe = $("#timeframe").val();
    $('.tags').tagsinput('removeAll');
    $('.tags').tagsinput('add', timeframe);
    $('.tags').tagsinput('add', $("#technique").val());

  },
  'change #technique': function(event) {

    var timeframe = $("#technique").val();

    $('.tags').tagsinput('removeAll');
    $('.tags').tagsinput('add', $("#timeframe").val());
    $('.tags').tagsinput('add', $("#technique").val());


  }



});


