window.onload = function () {
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




    var breakDisplay = document.querySelector('#breakTime'),
    breakTimer = new BreakCountDownTimer(5),
    breakTimeObj = BreakCountDownTimer.parse(5);

    formatBreak(breakTimeObj.minutes, breakTimeObj.seconds);
    
    breakTimer.onTick(format);
    
    function formatBreak(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        breakDisplay.textContent = minutes + ':' + seconds;
    }


    document.getElementById('startButton').addEventListener('click', function () {
        timer.start();
    });

    document.getElementById('breakHiddenButton').addEventListener('click', function () {
        breakTimer.start();
    });
};

$(document).ready(function() {
     $('#exerciseCarousel').carousel({
        interval: false
    });
});

function regularStintFinished() {
	$('#exerciseCarousel').carousel('next');
    startExerciseSwitchStint();
	$('#startButton').click();
}

function startExerciseSwitchStint() {
    console.log("CLICKED");
    $('#breakHiddenButton').click();
}