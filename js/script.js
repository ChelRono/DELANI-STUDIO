$(document).ready(function () {
    var $content = $(".content").hide();
    $(".toggle").on("click", function (e) {
        $(Image).toggleClass("expanded");
        $(content).next().slideToggle();

    });
});