var exerciseEndAudio

window.onload = function () {
    exerciseEndAudio = document.getElementById("exerciseEndAudio"); 


    var display = document.querySelector('#time'),
    timer = new CountDownTimer(10),
    timeObj = CountDownTimer.parse(10);

    format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(format);
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }

    document.getElementById('startButton').addEventListener('click', function () {
        timer.start();
    });

    enableNoScreenSleep();
};

$(document).ready(function() {
 $('#exerciseCarousel').carousel({
    interval: false
});
});

function enableNoScreenSleep(){
    var noSleep = new NoSleep();
    var enableNoScreenSleepButton = document.getElementById('enableNoScreenSleep');
    enableNoScreenSleepButton.addEventListener('click', function() {
        noSleep.enable();
        enableNoScreenSleepButton.classList.add("btn-warning");
    }, false);

    enableNoScreenSleepButton.click();
    enableNoScreenSleepButton.classList.add("btn-success");
}

function regularStintFinished() {
    exerciseEndAudio.play(); 
    $('#exerciseCarousel').carousel('next');
    startExerciseSwitchStint();
    $('#startButton').click();
}

function startExerciseSwitchStint() {
        // ?
    }