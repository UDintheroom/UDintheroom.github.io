$(document).ready(function() {
    // fullpage
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

// gnb (side menu bar(circle))
const nav = document.querySelector('nav'),
toggleBtn = nav.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('open')
})

function onDrag ({movementY}) {
    const navStyle = window.getComputedStyle(nav)
    const navTop = parseInt(navStyle.top)
    const navHeight = parseInt(navStyle.height)
    const windHeight = window.innerHeight
    
    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '1px'
    if(navTop > windHeight - navHeight) {
        nav.style.top = `${windHeight - navHeight}px`
    }
}

nav.addEventListener('mousedown', () => {
    nav.addEventListener('mousemove', onDrag)
})
nav.addEventListener('mouseup', () => {
    nav.removeEventListener('mousemove', onDrag)
})
nav.addEventListener('mouselaeve', () => {
    nav.removeEventListener('mousemove', onDrag)
})