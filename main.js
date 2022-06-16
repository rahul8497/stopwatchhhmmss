var ten=0;
var second=0;
var hour=0;
var tenappend=document.getElementById('tens');
var secondappend=document.getElementById('seconds');
var hourappend=document.getElementById('hrs');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var interval;
function starttimer(){
    ten++;
    if(ten<9){
        tenappend.innerHTML="0"+ten; 
    }
    if(ten>9){
        tenappend.innerHTML=ten;  
    }
    if(ten>59){
        second++;
        secondappend.innerHTML="0"+second;
        ten=0;
        tenappend.innerHTML="0"+ten; 
    }
    if(second>9){
        secondappend.innerHTML=second;  
    }

    if(second>59){
        hour++;
        hourappend.innerHTML="0"+hour;
        ten=0;
        second=0;
        tenappend.innerHTML="0"+ten; 
        secondappend.innerHTML="0"+second; 
    }
    if(hour>9){
        hourappend.innerHTML=hour;  
    }
}
start.onclick=function(){
    interval=setInterval(starttimer,1000);
}
stop.onclick=function(){
    clearInterval(interval);
}
reset.onclick=function(){
    clearInterval(interval);
    ten=0;
    second=0;
    hour=0;
    secondappend.innerHTML="0"+second;
    tenappend.innerHTML="0"+ten;
    hourappend.innerHTML="0"+hour;
}