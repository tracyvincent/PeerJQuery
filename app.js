$('document').ready(function(){
  $('body').append('<div class="red 1 color"></div>');
  $('body').append('<div class="blue 2 color"></div>');
  $('body').append('<div class="orange 3 color"></div>');
  $('body').append('<div class="yellow 4 color"></div>');
  $('body').append('<div class="green 5 color "></div>');
  $('body').append('<div class="purple 6 color"></div>');


//attemped to start Hard Mode
// var ourColors = [];
//
//   function NewColor(colorName){
//   	this.colorName = colorName;
//   	this.number = ourColors.length + 1;
//   	this.baseClass = 'color';


var winner = true;
var winNum = Math.floor((Math.random() * 6) + 1);
$('body').on('click', function(){

var selectedColor = event.target.className.split(' ')[0];
var selectedNum  = event.target.className.split(' ')[1];
console.log(selectedColor);
console.log(winner);
//
if (winNum == selectedNum){
  alert('You have chosen ' + selectedColor + '. You Have Chosen Wisely! Play again!');
  winner = true;
  winNum = Math.floor((Math.random() * 6) + 1);
} else {
  alert('You have chosen ' + selectedColor + '. You Have Chosen Poorly! Try again!')
  winner = false;
}
console.log(winNum);

})

});
