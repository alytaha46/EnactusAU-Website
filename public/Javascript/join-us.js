$(document).ready(function () {
    $(function () {
        // previous detection logic
        $("#to-top").on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 200);
        });
    });
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() - 200 > 0) {
                $('#to-top').stop().slideDown('fast'); // show the button
            } else {
                $('#to-top').stop().slideUp('fast'); // hide the button
            }
        });
    });
    $("#frame").on( "load", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});


