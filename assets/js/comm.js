$(document).ready(function() {
  // fullpage
  $('#fullpage').fullpage({
    sectionsColor: ['#D6C1FF', '#4BBFC3', '#7BAABE', 'whitesmoke'],
});

// intro) text fade in
setTimeout(function() {
  $(".intro-animation .intro-text").css('display', 'flex');
}, 3500);

// !!!!!!!never delete!!!!!!!!!!
});