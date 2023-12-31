
var start2=document.getElementById("welcome");
var maincloth = document.querySelectorAll(".mainimg")[0];

var windowXMaxWidth=window.innerWidth;



function getstart(){
    document.getElementById("video").pause();
    start2.style.transition="1s"
    start2.style.opacity="0";
    start2.style.zIndex='-1';
    maincloth.style.transitionDelay="0.8s";
    if(windowXMaxWidth<600){
        maincloth.style.top="28vh";
    document.getElementById("mainoliv").style.top="28vh";
    document.getElementById("mainmaroon").style.top="28vh";
    }
    else{
        maincloth.style.top="35%";
    document.getElementById("mainoliv").style.top="35%";
    document.getElementById("mainmaroon").style.top="35%";
    }
    document.getElementById("backcloth").style.transitionDelay="1s"
    document.getElementById("backcloth2").style.transitionDelay="1s"
    document.getElementById("backcloth").style.top="0px";
    document.getElementById("backcloth2").style.top="0px";
    document.getElementById("light2").style.transitionDelay="1s";
    document.getElementById("light2").style.opacity="100";
    
    document.getElementById("parent").style.filter="brightness(0.8)"
    document.getElementById("light1").style.transitionDelay="1.5s";
    document.getElementById("light1").style.opacity="100";
    document.getElementById("parent").style.transitionDelay="1.5s";
    document.getElementById("parent").style.transition="2s";
    document.getElementById("parent").style.filter="brightness(1.3)";
    maincloth.style.transitionDelay="0.8s";
    maincloth.style.filter="brightness(1)";
    document.getElementById("parent").style.transitionDelay="2s";
    document.getElementById("frontcontent").style.transitionDelay="5s";
    document.getElementById("frontcontent").style.opacity="100";
    document.getElementById("buybox").style.transitionDelay="6s";
    document.getElementById("buybox").style.opacity="1";
    setTimeout(function(){document.getElementById("colorbox").style.opacity="1"},6500);
    document.getElementById("colorbox").style.transition="2s";
    
}

var currentXPosition=0;

var windowYMaxHeight=window.innerHeight;
var currentYPosition=0;
const mouseMove = (event) => { 
//console.log(`x value = ${event.clientX} & y value = ${event.clientY}`);
currentXPosition = (event.clientX / windowXMaxWidth)+0.8;
currentYPosition = (event.clientY / windowYMaxHeight)+0.8;
if(event.clientX>598){
    currentXPosition =2.5-currentXPosition;
}
if(currentXPosition<=0.6){
    currentXPosition=0.6;
}

maincloth.style.transition="0.5s";
maincloth.style.transitionDelay="0s";
maincloth.style.filter = "brightness(" + currentXPosition + ") drop-shadow(" + (currentXPosition*20) + "px " + (-currentYPosition*5) + "px " +"10px rgb(0, 0, 0,0.3))";

//document.getElementById("brightball").style.left=event.clientX + "px";
//document.getElementById("brightball").style.top=event.clientY + "px";
}

window.addEventListener('mousemove', mouseMove);
function clear(){
    document.getElementById("backcloth").style.animation="";
    document.getElementById("backcloth2").style.animation="";
}
function light(){
    document.getElementById("parent").style.filter="brightness(1.3)";
    
    document.getElementById("light2").style.opacity="100";
    document.getElementById("light1").style.opacity="100";
}
function backcloths(element){
    document.getElementById("backcloth").src=element;
    document.getElementById("backcloth2").src=element;
}

function animations(){
    maincloth.style.transition="3s";
    document.getElementById("mainoliv").style.transition="2s";
    document.getElementById("backcloth").style.animation="backcloth 4s ease-in-out";
    document.getElementById("backcloth").style.animationIterationCount="1";
    document.getElementById("backcloth2").style.animation="backcloth 4s ease-in-out";
    document.getElementById("backcloth2").style.animationIterationCount="1";
    document.getElementById("light1").style.transition="0.5s"
    document.getElementById("light2").style.transitionDelay="0.5s"
    document.getElementById("light2").style.transition="0.5s"
    document.getElementById("light2").style.transitionDelay="1s"
    document.getElementById("light2").style.opacity="0";
    document.getElementById("light1").style.opacity="0";
    document.getElementById("parent").style.transition="0.2s"
    document.getElementById("parent").style.filter="brightness(0.3)";
    
   
}
var check=0;
function maroon(){
   if(check!=2){
    animations();
    maincloth.style.left="-100%";
    document.getElementById("mainoliv").style.left="-100%"; 
    maincloth = document.querySelectorAll(".mainimg")[2];
    document.getElementById("mainmaroon").style.left="50%";
    setTimeout( function(){backcloths("mainmaroon.png")},3000);
    setTimeout(clear, 5000);
    setTimeout(light , 3000);
    check=2;
   }
}

function oliv(){
    if(check!=1){
    animations();    
    maincloth.style.left="-100%";
    maincloth = document.querySelectorAll(".mainimg")[1];
    document.getElementById("mainoliv").style.left="50%";
    setTimeout( function(){backcloths("mainoliv.png")},3000);
    setTimeout(clear, 5000);
    setTimeout(light , 3000);
    check=1;
    }
}
function black(){
    if(check!=0){
        animations();
    maincloth = document.querySelectorAll(".mainimg")[0];
    maincloth.style.left="50%";
    document.getElementById("mainoliv").style.left="-100%"; 
    document.getElementById("mainmaroon").style.left="-100%"; 
    setTimeout( function(){backcloths("blured.png")},3000);
    setTimeout(clear, 5000);
    setTimeout(light , 3000);
    check=0;
    }
}