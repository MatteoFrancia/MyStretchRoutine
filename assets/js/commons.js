$(document).ready(function () {
    $('.btn-outline-primary').click(function () {
        if($(this).attr("stretching_type") == 'standard') {
            window.location.replace("index.html");
        } else if ($(this).attr("stretching_type") == 'mtb') {
            window.location.replace("mtb.html");
        }
    });
});