$(document).ready(function() {
    $('html, body').scrollTop(0);
    $('.fixed').css('position', 'fixed');
    $("a#menu").mouseover(function() {
        $(this).css('opacity', '0');
        $("nav").addClass('shown');
    });
    $("nav").mouseleave(function() {
        $(this).removeClass('shown');
        $("a#menu").css('opacity', '1');
    });
    $("*:not('.shown')").click(function() {
        $('nav').removeClass('shown');
        $("a#menu").css('opacity', '1');
    });
    // for (var i = 0; i < $('section img').size(); i++) {

    //         $('section img').eq(i).attr('src', $('section img').eq(i).attr('data-background'));
    // };

    for (var i = 0; i <= $('section img').size(); i++) {
        $('section img').eq(i).attr('src', $('section img').eq(i).attr('data-background'));
    };

    //plugin function, place inside DOM ready function
    outdatedBrowser({
        bgColor: '#3f3f3f',
        color: '#e3e3e3',
        lowerThan: 'IE10'
    });

});

function ScrollTo(amount) {
    $('html, body').animate({
        scrollTop: $(window).height() * amount
    }, 1000);
}

function next() {
    $('html, body').animate({
        scrollTop: $(window).height() * 1.4 + window.pageYOffset
    }, 350);
}

function prev() {
    $('html, body').animate({
        scrollTop: $(window).height() * -1.4 + window.pageYOffset
    }, 350);
}