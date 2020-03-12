function loadMenu() {
    var titles = ["Standard - Every Day Stretch", "Cyclocross/MTB", "[5 min] Cyclocross/MTB", "Shoulder Stretch"];
    var links = ["index.html", "mtb.html", "mtb_short.html", "shoulder.html"];
    $('#stretchingMenu').empty();
    $.each(titles, function (i, t) {
            $('#stretchingMenu').append($(`
            <a class="dropdown-item" href="index.html"></a>
            `).html(t).attr('href', links[i]));
            $('#stretchingMenu').append($('<div class="dropdown-divider"></div>'));
    });
}