// (intro) sequence
const wrapper = document.querySelector('.animation');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = wrapper.offsetWidth;
canvas.height = (canvas.width / 16) * 9;

canvas.style.position = 'sticky';
canvas.style.top = '0';
canvas.style.left = '0';
// canvas.style.top = '50%';
// canvas.style.transform = 'translateY(-50%)';

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

// fullpage
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: true,
	});

	//methods
	// $.fn.fullpage.setAllowScrolling(false);
});