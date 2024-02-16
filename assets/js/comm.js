$(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({
        sectionsColor: ['#D6C1FF', '#4BBFC3', '#7BAABE', 'whitesmoke'],
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


// !!!!!!!!!!! never deldete !!!!!!!!!!
});
