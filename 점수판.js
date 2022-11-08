var count=document.querySelector("#count");
var p1Show=document.querySelector("#p1Show");
var p2Show=document.querySelector("#p2Show");
var p3Show=document.querySelector("#p3Show");
var p4Show=document.querySelector("#p4Show");
 
var restartbtn=document.getElementById("restart");
var p=document.querySelector("p");
var winningScoreShow=document.querySelector("p span");
 
var gihoe=2;
var p1Score=0;
var p2Score=0;
var p3Score=0;
var p4Score=0;
var winningScore=5;
 
restartbtn.addEventListener("click", function(){
    restart();
});
function restart(){

    window.location.reload();
}