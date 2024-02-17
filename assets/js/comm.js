$(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        menu : '.gnb',
        navigation: true,
        anchors: ['home', 'profile', 'desc1', 'desc2', 'desc3'],
    });

    // intro) text fade in
    setTimeout(function() {
        $(".intro-animation .intro-text").css('display', 'flex');
        $('.intro-text').addClass('animate__animated animate__rubberBand');
    }, 3300);

    // intro) hello switch
    $('.kor').mouseover(function() {
        $(this).css('display', 'none');
        $('.eng').css('display', 'block');
    });
    $('.eng').mouseout(function() {
        $('.kor').css('display', 'block');
        $(this).css('display', 'none');
    });


    var swiper = new Swiper(".info-tags", {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 0,
        direction: "vertical",
    });


// !!!!!!!!!!! never deldete !!!!!!!!!!
});
