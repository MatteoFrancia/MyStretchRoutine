var timer = null;

window.onload = function () {
    var display = document.querySelector('#time'),
    timer = new CountDownTimer(5),
    timeObj = CountDownTimer.parse(5);

    format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(format);
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }

    document.querySelector('button').addEventListener('click', function () {
        timer.start();
    });
};

$(document).ready(function() {
  	$('#exerciseCarousel').carousel({
  		interval: false
	});
});

function stintFinished() {
	lastExercise = false;
	$('#exerciseCarousel').carousel('next');

	if(!lastExercise){
		startExerciseSwitchStint();
		startNewStint();
	} else {

	}
}

function startNewStint() {
	$('#startButton').click();
}

function startExerciseSwitchStint() {

}