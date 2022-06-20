const display = document.getElementsByClassName("display")[0]
const start = document.getElementsByClassName("start")[0]
const reset = document.getElementsByClassName("reset")[0]
const lap = document.getElementsByClassName("lap")[0]
const lapTime = document.getElementsByClassName('lap-time')

let tempDiv = document.createElement('div');
tempDiv.id = "box"

let hour = 0
let minute = 0
let secend = 0
let paused = false

let label = ""

function stopwatch() {
    secend++;

    if (secend / 100 === 1) {
        secend = 0;
        minute++;

        if (minute / 60 === 1) {
            minute = 0;
            hour++;
        }
    }

    label = ('0' + hour).slice(-2) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + secend).slice(-2);

    display.innerHTML = label;
}

function Start() {
    if (paused) {
        window.clearInterval(myInterval);
        start.innerHTML = "Start";
        paused = false;
    }
    else {
        start.innerHTML = "Pause";
        paused = true;
        myInterval = window.setInterval(stopwatch, 10);
    }
}

function Lap() {
    lapTime[0].innerHTML += "<p>" + label + "</p>";
}

function Reset() {
    hour = 0
    minute = 0
    secend = 0
    paused = false
    lapCount = 0

    window.clearInterval(myInterval);
    display.innerHTML = "00:00:00"
    start.innerHTML = "Start";
    lapTime[0].innerHTML = ""
}

start.addEventListener("click", Start);
reset.addEventListener("click", Reset);
lap.addEventListener("click", Lap);



// {
//     const subject = document.querySelector('#subject');

//     const positionSelect = document.querySelector('#position');

    // subject.insertAdjacentHTML('afterbegin', '<strong>inserted text</strong>');






// document.getElementsByClassName("lap-time")[0].innerHTML += "<p>"+('0' + hour).slice(-2) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + secend).slice(-2)+"</p>";

// document.getElementById('lap-time').insertAdjacentHTML('beforeend', '<div id="idChild"> $("0" + hour).slice(-2) + ":" + ('0' + minute).slice(-2) + ":" + ( + secend).slice(-2)) </div>');


// const lapTime = document.getElementsByClassName('lap-time')[1]
// var tempDiv = document.createElement('div');
// tempDiv.innerHTML = "<p>"+('0' + hour).slice(-2) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + secend).slice(-2)+"</p>"