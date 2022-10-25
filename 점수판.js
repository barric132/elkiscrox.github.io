var p1Btn=document.querySelector("#p1");
var p2Btn=document.querySelector("#p2");
var p3Btn=document.querySelector("#p3");
var p4Btn=document.querySelector("#p4");
var count=document.querySelector("#count");
var p1Show=document.querySelector("#p1Show");
var p2Show=document.querySelector("#p2Show");
var p3Show=document.querySelector("#p3Show");
var p4Show=document.querySelector("#p4Show");
 
var resetBtn=document.getElementById("reset");
var restartbtn=document.getElementById("restart")
var p=document.querySelector("p");
var winningScoreShow=document.querySelector("p span");
 
var gihoe=2;
var p1Score=0;
var p2Score=0;
var p3Score=0;
var p4Score=0;
var gameOver=false;
var winningScore=7;
 
p1Btn.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    console.log(p1Score, winningScore);
    
        if(p1Score === winningScore){
            p1Show.classList.add("winner");
            gameOver=true;
            alert("1팀 우승!!");    
        }
 
    p1Show.textContent=p1Score;
    }
});
p2Btn.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
        if(p2Score === winningScore){ 
            p2Show.classList.add("winner");
            gameOver=true;
            alert("2팀 우승!!");    
            
        }
    p2Show.textContent=p2Score;
    
    }
});
p3Btn.addEventListener("click", function(){
    if(!gameOver){
    p3Score++;
    console.log(p3Score, winningScore);
    
        if(p3Score === winningScore){
            p3Show.classList.add("winner");
            gameOver=true;
            alert("3팀 우승!!");    
        }
 
    p3Show.textContent=p3Score;
    }
});
p4Btn.addEventListener("click", function(){
    if(!gameOver){
    p4Score++;
    console.log(p4Score, winningScore);
    
        if(p4Score === winningScore){
            p4Show.classList.add("winner");
            gameOver=true;
            alert("4팀 우승!!");    
        }
 
    p4Show.textContent=p4Score;
    }
});
 
resetBtn.addEventListener("click", function(){
    reset();
});
 
function reset(){
    p1Score=0;
    p2Score=0;
    p3Score=0;
    p4Score=0;
    
    p1Show.textContent=0;
    p2Show.textContent=0;
    p3Show.textContent=0;
    p4Show.textContent=0;

    p1Show.classList.remove("winner");
    p2Show.classList.remove("winner");
    p3Show.classList.remove("winner");
    p4Show.classList.remove("winner");

    winningScore=7;
    
    
    gameOver=false;
}


restartbtn.addEventListener("click", function(){
    restart();
});
function restart(){

    window.location.reload();
}
