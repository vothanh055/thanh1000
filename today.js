$(document).ready(function () {
    $('.totop').click(function (e) { 
        e.preventDefault();
        // $('html').scrollTop(500) 
        $('html').animate({
            scrollTop: 0
        },1000)
    });
});
