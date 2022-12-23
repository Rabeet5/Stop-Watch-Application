

var min = 0;
var sec = 0;
var msec = 0;


var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliseconds = document.getElementById("milisec");

function timer(){
    msec++;
    miliseconds.innerHTML = msec;

    if(msec >=100){
        sec++;
        msec = 0;
        seconds.innerHTML = sec;
    } else if(sec >= 60){
        min++;
        sec = 0;
        minutes.innerHTML = min;
    }

}


function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = msec;

}
