var dicenum1=Math.random();
// dicenum1=Math.floor(dicenum1);
// dicenum1=Math.floor(dicenum1*10)+
dicenum1=Math.floor(dicenum1 * 6) + 1;
// console.log(dicenum1)
var imag="dice"+dicenum1+".png";
var randomimg="images/"+imag;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg);

var dicenum2=Math.floor(Math.random()*6)+1;
var imag1="dice"+dicenum2+".png";
var randomimg1="images/"+imag1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg1);

if(dicenum1>dicenum2){
    // var txt=
    document.querySelector("h1").innerHTML="player 1 won the game";
}
else if(dicenum1 < dicenum2)
document.querySelector("h1").innerHTML="player 2 won the game";
// var txt="player 2 won the game";
else 
document.querySelector("h1").innerHTML="Draw!!";