var exerciseEndAudio

window.onload = function () {
    exerciseEndAudio = document.getElementById("exerciseEndAudio"); 

    initializeExerciseTimer(10);

    enableNoScreenSleep();
};

$(document).ready(function() {
 $('#exerciseCarousel').carousel({
    interval: false
});
});

function initializeExerciseTimer(duration){
    var display = document.querySelector('#time'),
    timer = new CountDownTimer(duration),
    timeObj = CountDownTimer.parse(duration);

    format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(format);
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }

    document.getElementById('startButton').addEventListener('click', function () {
        //exerciseEndAudio.play(); 
        timer.start();
    });
}

function enableNoScreenSleep(){
    var noSleep = new NoSleep();
    var enableNoScreenSleepButton = document.getElementById('startButton');
    enableNoScreenSleepButton.addEventListener('click', function() {
        noSleep.enable();
    }, false);
}

function regularStintFinished() {
    //exerciseEndAudio.play(); 
    $('#exerciseCarousel').carousel('next');
    changeTimerAlertColor('alert-success', 'alert-warning');
    setTimeout(function(){ 
        changeTimerAlertColor('alert-warning', 'alert-success');
        $('#startButton').click();
    }, 5000);
}

function changeTimerAlertColor(actualClass, newClass) {
    document.getElementById('timerAlert').classList.replace(actualClass, newClass);
}