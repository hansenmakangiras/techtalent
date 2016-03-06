/**
 * Created by hanse on 3/7/2016.
 */
'use strict';
// WOW
new WOW().init();

// Page Loader
$(window).load(function(){
    $(".page-loader").fadeOut();
});

// Background Home
function bgHome(status) {
    var el = $('body');

    if (status === "home") {
        el.removeClass("bg");
        el.addClass("bg-home");
    } else {
        el.removeClass("bg-home");
        el.addClass("bg");
    }
}


function showProfile(el) {
    $(el).click(function(){
        $("div.wrapper__sidebar").removeClass("hide-sidebar");
        $("div.body-overlay").fadeIn();
    });
    $("div.wrapper-icon-close, .body-overlay").click(function(){
        $("div.wrapper__sidebar").addClass("hide-sidebar");
        $("div.body-overlay").fadeOut();
    })
}