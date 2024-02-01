// aos
AOS.init();

// swiper
var swiper = new Swiper(".main-slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop : true,
  loopAdditionalSlides : 1,
});

var swiper = new Swiper(".upcoming-slide", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".news-slide", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".studios-slide", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 왜,, 안 되는데^-^...? inner로 하면 되긴 되는데,,,
// scroll에 따른 header의 색상 변화
$(window).on('scroll', function() {
  if($(window).scrollTop()){
    $('#header').addClass('active');
  }else{
    $('#header').removeClass('active');
  }
});

// 무한 롤링 배너
let roller = document.querySelector('.rolling-list');
roller.id = 'roller1';

let clone = roller.cloneNode(true)
clone.id = 'roller2';
document.querySelector('.bt-slide').appendChild(clone);

document.querySelector('#roller1').computedStyleMap.left = '0px';
document.querySelector('#roller2').computedStyleMap.left = document.querySelector('rolling-list ul').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');
