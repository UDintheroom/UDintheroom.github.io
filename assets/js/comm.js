$(document).ready(function() {
    fullpage
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        menu : '.gnb',
        navigation: true,
        anchors: ['home', 'profile', 'portfolio1', 'portfolio2', 'portfolio3', 'contact'],
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


    // profile) #hashtag slide
    var swiper = new Swiper(".info-tags", {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 0,
        direction: "vertical",
    });


    // gnb (side menu bar(circle)) + display
    const nav = $('nav');
    const toggleBtn = nav.find('.toggle-btn');
    toggleBtn.on('click', function() {
        nav.toggleClass('open');
    });
    const delayTime = 3450;
    setTimeout(function() {
        nav.css('display', 'flex');
    }, delayTime);

// !!!!!!!!!!! never deldete !!!!!!!!!!
});
