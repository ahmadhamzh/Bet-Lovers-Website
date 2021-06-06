


alert("if you don't like bets don't enter")

var name = prompt ("what's your name")

var welcom = "welcom " + name
document .write ('<h2 style="color:blue">'+welcom+'</h2>')

function favoritebets(){

var c = "you'll finde all you need about cats welcom to our site"
var d = "you'll finde all you need about dogs welcom to ou site"
var b = "you'll finde all you need about birds welcom to our site"

var y = prompt ("what's your favorite pets")
 
 if(y ==="cats")
 {alert(c)}
 else if (y ==="dogs")
 {alert(d)}
else if (y ==="birds")
{alert (b)}
else {alert ("welcom to our site")}

}

favoritebets()

function keynum(){
var GuessAnswer = prompt("guss the key num between 1 to 9")

 while(GuessAnswer !=6 ){

 

  GuessAnswer = prompt ("not Right try Again")

  }

if (GuessAnswer = 6){

alert("great guess")
}

}

keynum()

function rateoursite(){

 Rate = prompt("pleas rate our site")

 

for (var a= 0; a < Rate;){

 document .write(' <img src="https://media.istockphoto.com/photos/golden-star-award-for-game-isolated-on-white-background-star-star-3d-picture-id1173610414"width="30"height="30"/>' )
++a
}

}

rateoursite()



