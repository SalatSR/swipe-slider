import './index.css';
import {
  headerLinkHome,
  sliderLine,
  slideBtnNext,
  slideBtnDetail,
} from '../utils/Constants.js';
import Popup from '../components/Popup';

function cL(x) {
  console.log(x);
}
/** НАЧАЛО Основное движение слайдера */
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
/** КОНЕЦ Основное движение слайдера */

/** НАЧАЛО Попап */

// создаём экземпляр popupDetail класса Popup
const popupDetail = new Popup('.popup_ditails');
popupDetail.setEventListeners();

function openDetail() {
  popupDetail.open();
};

/** КОНЕЦ Попап */

headerLinkHome.addEventListener('click', moveToFirst);
slideBtnNext.addEventListener('click', moveRight);
slideBtnDetail.addEventListener('click', openDetail);
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
