import './index.css';

function cL(x) {
  console.log(x);
}
/** НАЧАЛО Основное движение слайдера */
const headerLinkHome = document.querySelector('.header__btn_home');
const sliderLine = document.querySelector('.slider__line');
const sliderBtn = document.querySelector('.slide-1__btn');
let offset = 0;
let clientTouchFirstX = null;
let clientTouchFirstY = null;

function moveToFirst() {
  sliderLine.style.left = 0 + 'px';
  offset = 0;
}

function checkExtremePoints() {
  if (offset > 0 || Math.abs(offset) >= 3072) {
    moveToFirst();
  } else {
    sliderLine.style.left = offset + 'px';
  }
}

function moveRight() {
  offset -= 1024;
  checkExtremePoints();
}

function moveLeft() {
  offset += 1024;
  checkExtremePoints();
}

function handleTouchStart(event) {
  clientTouchFirstX = event.touches[0].clientX;
  clientTouchFirstY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!clientTouchFirstX || !clientTouchFirstY) {
    return false;
  }

  let clientTouchMoveX = event.touches.item(0).clientX;
  let clientTouchMoveY = event.touches.item(0).clientY;

  let xDiff = clientTouchMoveX - clientTouchFirstX;
  let yDiff = clientTouchMoveY - clientTouchFirstY;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      moveLeft();
    } else {
      moveRight();
    }
  } else {
    return false;
  }
  clientTouchFirstX = null;
  clientTouchMoveX = null;
}

headerLinkHome.addEventListener('click', moveToFirst);
sliderBtn.addEventListener('click', moveRight);
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
/** КОНЕЦ Основное движение слайдера */