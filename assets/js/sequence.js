const img = new Image();
const canvas = document.getElementById('screen1');
const ctx = canvas.getContext('2d');
let imgNum = 0;

img.onload = function () {
  setInterval(function() {
    if (imgNum > 13) {
      imgNum = 0;
    }
    player(imgNum);
    imgNum++;
  }, 500);
};

function player(num) {
  img.src = `/assets/images/video/opendoor${num}.png`;
}

img.addEventListener('load', function(e) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});

player(imgNum);

// const imgNum = 0;
// const img = new Image();
// const canvas = document.getElementById('screen1');
// const ctx = canvas.getContext('2d');

// img.src = '../images/video/opendoor0.png'

// playSequence();

// function playSequence() {
//   const timer = setInterval(function() {
//     if (imgNum > 13) {
//       imgNum = 0;
//     }
//     player(imgNum);
//     imgNum++;
//   }, 30);
// }

// function player(num) {
//   img.src = '../images/video/opendoor' + num + '.png';
// }

// img.addEventListener('load', function(e) {
//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   ctx.drawImage(img, 0, 0);
// });