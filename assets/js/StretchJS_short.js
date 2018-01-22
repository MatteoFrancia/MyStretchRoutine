const exerciseDuration = 15;
const pauseBetweenExercises = 6000;

var exerciseEndAudio

window.onload = function () {
    exerciseEndAudio = document.getElementById("exerciseEndAudio"); 

    initializeExerciseTimer(exerciseDuration);

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
        setStartButtonToRunningState();
        exerciseEndAudio.play(); 
        changeElementClass('carouselCard', 'bg-warning', 'bg-success');
        timer.start();
    });
}

function setStartButtonToRunningState(){
    document.getElementById('startButton').innerHTML = 'RUNNING...';
    changeElementClass('startButton', 'btn-info', 'btn-secondary');
    document.getElementById('startButton').classList.add('disabled');
}

function enableNoScreenSleep(){
    var noSleep = new NoSleep();
    var enableNoScreenSleepButton = document.getElementById('startButton');
    enableNoScreenSleepButton.addEventListener('click', function() {
        noSleep.enable();
    }, false);
}

function regularStintFinished() {
    exerciseEndAudio.play(); 
    $('#exerciseCarousel').carousel('next');
    changeElementClass('timerAlert', 'alert-success', 'alert-warning');
    changeElementClass('carouselCard', 'bg-success', 'bg-warning');

    setTimeout(function(){ 
        changeElementClass('timerAlert', 'alert-warning', 'alert-success');
        $('#startButton').click();
    }, pauseBetweenExercises);
}

function changeElementClass(elementId, actualClass, newClass) {
    document.getElementById(elementId).classList.replace(actualClass, newClass);
}