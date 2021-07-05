$(document).ready(function () {
    $('#exerciseCarousel').carousel({
        interval: false
    });
});

function nextExercise(){
    $('#exerciseCarousel').carousel('next');
}

function prevExercise(){
    $('#exerciseCarousel').carousel('prev');
}