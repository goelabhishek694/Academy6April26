const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const hrInput = document.getElementById("hr");
const minInput = document.getElementById("min");
const secInput = document.getElementById("sec");
let timerId;

startBtn.addEventListener("click",function(){
    console.log("start clicked");
    let hrs = hrInput.value || 0;
    let mins = minInput.value || 0;
    let secs = secInput.value || 0;

    //convert to sec -> so that we can decrease one sec after each sec
    let totalSeconds = parseInt(hrs)*3600 + parseInt(mins)*60 + parseInt(secs);
    console.log(totalSeconds);

    //start the interval to decrease sec
    timer(totalSeconds);
  
});

function timer(totalSeconds){
    if(totalSeconds == 0){
        alert("Time's up!");
        return;
    }
    timerId = setTimeout(function(){
        totalSeconds--;
        updateUI(totalSeconds);
        timer(totalSeconds);
    },1000);
}

function updateUI(totalSeconds){
    //convert seconds back to hrs minutes and seconds
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;
    console.log(hrs, mins, secs);
    hrInput.value = hrs;
    minInput.value = mins;
    secInput.value = secs;
}

pauseBtn.addEventListener("click",function(){
    clearTimeout(timerId);
});

resetBtn.addEventListener("click",function(){
    clearTimeout(timerId);
    hrInput.value = 0;
    minInput.value = 0;
    secInput.value = 0;
    updateUI(0);
})

