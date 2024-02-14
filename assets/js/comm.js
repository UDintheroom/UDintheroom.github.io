// // (intro) sequence
// const wrapper = document.querySelector('.animation');
// const canvas = document.createElement('canvas');
// const context = canvas.getContext('2d');
// canvas.width = wrapper.offsetWidth;
// canvas.height = (canvas.width / 16) * 9;

// canvas.style.position = 'sticky';
// canvas.style.top = '50%';
// canvas.style.transform = 'translateY(-50%)';

// wrapper.append(canvas);

// const img = new Image();
// img.onload = () => {
//   context.drawImage(img, 0, 0, canvas.width, canvas.height);
// };
// img.src = `/assets/images/video/opendoor0.png`;

// const main = document.querySelector('main');

// const computeStartScrollY = () => {
//   let prevElementSibling = wrapper.previousElementSibling;
//   let height = 0;
//   while (prevElementSibling) {
//     height += prevElementSibling.offsetHeight;
//     prevElementSibling = prevElementSibling.previousElementSibling;
//   }
//   return height;
// };

// const imageSources = Array(40)
//   .fill('')
//   .map((_, idx) => `/assets/images/video/opendoor${idx}.png`);

// const startScrollY = computeStartScrollY();
// const standardHeight = canvas.height / imageSources.length;

// const currentFrameIndex = () => {
//   const index = Math.floor((main.scrollTop - startScrollY) / standardHeight);
//   if (index < 0) return 0;
//   if (!imageSources[index]) return imageSources.length - 1;
//   return index;
// };

// let isRendering = false;

// const render = () => {
//   if (!isRendering) {
//     isRendering = true;
//     const frameIndex = currentFrameIndex();
//     const image = new Image();
//     image.onload = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       context.drawImage(image, 0, 0, canvas.width, canvas.height);
//       isRendering = false;
//     };
//     image.src = imageSources[frameIndex];
//   }
// };

// const onScrollHandler = () => {
//   requestAnimationFrame(render);
// };

// main.addEventListener('scroll', onScrollHandler, { passive: true });

// const preloadImages = () => {
//   imageSources.forEach((imgSrc) => {
//     const img = new Image();
//     img.src = imgSrc;
//   });
// };

// const initFirstFrame = () => {
//   const image = new Image();
//   image.src = imageSources[0];
//   image.onload = () => context.drawImage(image, 0, 0, canvas.width, canvas.height);
// };

// const resizeCanvas = () => {
//   canvas.width = wrapper.offsetWidth;
//   canvas.height = (canvas.width / 16) * 9;
//   initFirstFrame();
// };

// window.addEventListener('resize', resizeCanvas);

// preloadImages();
// initFirstFrame();

// // (intro) text




// (intro) sequence
const wrapper = document.querySelector('.animation');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = wrapper.offsetWidth;
canvas.height = (canvas.width / 16) * 9;

canvas.style.position = 'sticky';
canvas.style.top = '50%';
canvas.style.transform = 'translateY(-50%)';

wrapper.append(canvas);

const img = new Image();
img.onload = () => {
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = `/assets/images/video/opendoor0.png`;

const main = document.querySelector('main');

const computeStartScrollY = () => {
  let prevElementSibling = wrapper.previousElementSibling;
  let height = 0;
  while (prevElementSibling) {
    height += prevElementSibling.offsetHeight;
    prevElementSibling = prevElementSibling.previousElementSibling;
  }
  return height;
};

const imageSources = Array(46)
  .fill('')
  .map((_, idx) => `/assets/images/video/opendoor${idx}.png`);

const startScrollY = computeStartScrollY();
const standardHeight = canvas.height / imageSources.length;

const currentFrameIndex = () => {
  const index = Math.floor((main.scrollTop - startScrollY) / standardHeight);
  if (index < 0) return 0;
  if (!imageSources[index]) return imageSources.length - 1;
  return index;
};

let isRendering = false;

const render = () => {
  if (!isRendering) {
    isRendering = true;
    const frameIndex = currentFrameIndex();
    const image = new Image();
    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      isRendering = false;
    };
    image.src = imageSources[frameIndex];
  }
};

const onScrollHandler = () => {
  updateElementPositions(); // 위치 업데이트
  requestAnimationFrame(render);
};

main.addEventListener('scroll', onScrollHandler, { passive: true });

const preloadImages = () => {
  imageSources.forEach((imgSrc) => {
    const img = new Image();
    img.src = imgSrc;
  });
};

const initFirstFrame = () => {
  const image = new Image();
  image.src = imageSources[0];
  image.onload = () => context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

const resizeCanvas = () => {
  canvas.width = wrapper.offsetWidth;
  canvas.height = (canvas.width / 16) * 9;
  initFirstFrame();
};

window.addEventListener('resize', resizeCanvas);

preloadImages();
initFirstFrame();

// 위치 업데이트 함수
const intro = document.querySelector('.intro');
const circles = document.querySelectorAll('.circle, .circle2, .circle3, .circle4, .circle5');

const updateElementPositions = () => {
  const introRect = intro.getBoundingClientRect(); // .intro 요소의 위치 및 크기를 가져옵니다.

  circles.forEach(circle => {
    circle.style.top = `${introRect.top}px`; // .intro 요소의 위쪽 위치로 설정하여 동일한 위치에 고정됩니다.
    circle.style.left = `${introRect.left}px`; // .intro 요소의 왼쪽 위치로 설정하여 동일한 위치에 고정됩니다.
  });
};

// 초기화 시 updateElementPositions 함수를 호출하여 초기 위치를 설정합니다.
updateElementPositions();
