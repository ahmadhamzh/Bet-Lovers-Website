
var x = "if you don't like pets don't enter"
var c = "you'll finde all you need about cats welcom to our site"
var d = "you'll finde all you need about dogs welcom to ou site"
var b = "you'll finde all you need about birds welcom to our site"

alert(x)
var name = prompt ("what's your name")
var welcom = "welcom " + name
var y = prompt ("what's your favorite pets")
 

 if(y ==="cats")
 {alert(c)}
 else if (y ==="dogs")
 {alert(d)}
else if (y ==="birds")
{alert (b)}
else {alert ("welcom to our site")}
document .write ('<h2 style="color:blue">'+welcom+'</h2>')