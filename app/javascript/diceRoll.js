var $ = require('jquery');
var _ = require('lodash');

var numbers = [1,2,3,4,5,6];

module.exports = $("#rollDiceButton").on('click', function(){
	var outcome = _.shuffle(numbers).pop();
  $("#score").html("<h1> "+ outcome +"</h1>");
  $(this).text('Roll Again?');  
});