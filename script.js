let workTime= 1500;
let restTime= 300;

function formatedTime(time){
    return `${Math.trunc(time/60)}:${time % 60 < 10 ? `0${time % 60} `: time % 60}`
}

const displayWork= document.querySelector(".work-display-time");
const displayPause= document.querySelector(".pause-display-time");

displayWork.textContent= formatedTime(workTime);
displayPause.textContent= formatedTime(restTime);

const togglePlayBtn= document.querySelector(".toggle-btn");
togglePlayBtn.addEventListener("click", togglePomodoro);

let currentInterval= false;
let timerID;

function togglePomodoro(){
    handlePlayPause();
    if(currentInterval){
        return;
    }else{
        currentInterval= true;
        workTime--;
        displayWork.textContent - formatedTime(workTime)
        timerID= setInterval(handleticks, 1000);
    }
}

let pause= true;

function handlePlayPause(){
    if(togglePlayBtn.getAttribute("data-toggle")==="play"){
        pause= false;
        togglePlayBtn.firstElementChild.src= "assets/stop-solid.svg";
        togglePlayBtn.setAttribute("data-toggle", "pause");
    }else{
        pause= true;
        togglePlayBtn.firstElementChild.src= "assets/play-solid.svg";
        togglePlayBtn.setAttribute("data-toggle", "play")
    }
}
const cycles= document.querySelector(".cycles")
let cyclesNumber=0
function handleticks(){
    if(!pause && workTime>0){
        workTime--;
        displayWork.textContent = formatedTime(workTime);
    }else if(!pause && !workTime && restTime>0){
        restTime--;
        displayPause.textContent=formatedTime(restTime);
    }else if(!pause && !workTime && !restTime){
        workTime= 2;
        restTime= 3;
        displayWork.textContent=formatedTime(workTime);
        displayPause.textContent= formatedTime(restTime);
        cyclesNumber++;
        cycles.textContent= `Cycles : ${cyclesNumber}`;

    }
}

const resetBtn= document.querySelector(".reset-btn");
resetBtn.addEventListener("click", reset);
function reset(){
    workTime= 1500;
    restTime= 300;
    displayPause.textContent = formatedTime(restTime);
    displayWork.textContent= formatedTime(workTime);
    cyclesNumber=0;
    cycles.textContent= `Cycles : ${cyclesNumber}`;
    clearInterval(timerID);
    currentInterval= false;
    pause= true;
    togglePlayBtn.setAttribute("data-toggle", "play");
    togglePlayBtn.firstElementChild.src = "assets/play-solid.svg";
}