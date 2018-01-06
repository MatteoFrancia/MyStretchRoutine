$(document).ready(function () {
    $('.btn').click(function () {
        if($(this).attr("stretching_type") == 'standard') {
            window.location.replace("index.html");
        } else if ($(this).attr("stretching_type") == 'mtb') {
            window.location.replace("mtb.html");
        }
    });
});