//GO TO UP BUTTON
$(document).ready(function () {

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });  
  });
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
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#navigation-bar").addClass("fixed");
        }
        else {
            $("#navigation-bar").removeClass("fixed");
        }
    });
});
