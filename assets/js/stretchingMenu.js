$(document).ready(function () {
    var titles = ["[9'] Standard", "[9'] Bike", "[5'] Bike Short", "[9'] Shoulder and Hips"];
    var links = ["index.html", "bike.html", "bike_short.html", "shoulder_and_hips.html"];
    $('#stretchingMenu').empty();
    $.each(titles, function (i, t) {
            $('#stretchingMenu').append($(`
            <a class="dropdown-item" href="index.html"></a>
            `).html(t).attr('href', links[i]));
            $('#stretchingMenu').append($('<div class="dropdown-divider"></div>'));
    });
});