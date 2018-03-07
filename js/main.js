alert('but im not a gambler')

//what can the user do?//
//the user can click two buttons
//what does the user expect?//
//the maximum bet will subtract 5 from the running total
//the minimum will subtract 1
//both of these buttons will fire the function to play the game
//if all of the images match the running total is increased by 25
//what does the user see?//
//three reels a holding atleast 5 values
//two buttons one for max one for minimum
//and a running total which will start at 25
var reel1 = ['css/assets/bar.png', 'css/assets/cherry.png', 'css/assets/lucky7.jpg']
var reel2 = ['css/assets/bar.png','css/assets/cherry.png', 'css/assets/lucky7.jpg']
var reel3 = ['css/assets/bar.png', 'css/assets/cherry.png', 'css/assets/lucky7.jpg']

var clickcount = 0;
var total = 25

$('.min').on('click', function(){
  clickcount ++;
  if (clickcount === 1){
    clickcount=0;
var reel1random = Math.round(Math.random()* reel2.length - 1)
$('.reel1 img').attr("src", reel1[reel1random]);

var reel2random = Math.round(Math.random()* reel2.length - 1)
$('.reel2 img').attr("src", reel2[reel2random]);

var reel3random = Math.round(Math.random()* reel2.length - 1)
$('.reel3 img').attr("src", reel3[reel3random]);
total-=1
$('h2').text('You have$ '+total )
}
if((reel1random === reel2random) && (reel2random === reel3random) && (reel1random === reel3random)){
  total += 10;
  alert('You loyal go buy yourself a yacht');
}
if(total<0){
  total = 25;
  alert('you lost fam but I gotchu with this 25')
}
})
$('.max').on('click', function(){
clickcount ++;
if (clickcount === 1){
  clickcount=0;
var reel1random = Math.round(Math.random()* reel2.length - 1)
$('.reel1 img').attr("src", reel1[reel1random]);

var reel2random = Math.round(Math.random()* reel2.length - 1)
$('.reel2 img').attr("src", reel2[reel2random]);

var reel3random = Math.round(Math.random()* reel2.length - 1)
$('.reel3 img').attr("src", reel3[reel3random]);
total -= 10;
$('h2').text('You have $'+total )
}
if((reel1random === reel2random) && (reel2random === reel3random) && (reel1random === reel3random)){
  total += 50;
  alert('You loyal go buy yourself a yacht');
}
if(total<=0){
  total = 25;
  alert('you lost fam but I gotchu with this 25')
}
})
