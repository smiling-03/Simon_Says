let gameSeq= [];
let userSeq= [];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2= document.querySelector("h2");
let h1= document.querySelector("h1");
document.addEventListener("keypress", function(){
    if(started==false)
        {
            console.log("GAME STARTED");
            started=true;
        levelUp();
        }
        
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
    }

function levelUp(){
    userSeq=[];
    if(level<5){
    level++;}
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
function checkAns(idx){

if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length && gameSeq.length<5 ){
        setTimeout(levelUp, 1000);
    }
    if(userSeq.length==5)
        {
            h1.innerHTML=`Congratulations!You Won &#128512;`;
            h2.innerText=`Press any key to start again...`;
        }
}
else{
    h1.innerHTML=`You Lost &#128577;`;
    h2.innerHTML=`Game Over! Your Score is <b> ${level-1} </b> <br>Press any key to start again... `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="black";
    },150);
    reset();
}

}
function btnPress(){
    let btn= this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}