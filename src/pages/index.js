import './index.css';
import {
  headerLinkHome,
  sliderLine,
  slideBtnNext,
  slideBtnDetail,
  arrowNext,
  arrowPrev,
  carouselContainer,
  sectionsList,
  indicatorParants,
  dots,
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
  event.stopPropagation()
  clientTouchFirstX = event.touches[0].clientX;
  clientTouchFirstY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  event.stopPropagation()
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

/** НАЧАЛО Слайдер на 3-м слайде */
let sectionIndex = 0;

/** "Сбрасываем стили предыдущего слайда" */
function reset() {
  for (let i = 0; i < carouselContainer.children.length; i++) {
    carouselContainer.children[i].style.opacity = 0;
    carouselContainer.children[i].style.zIndex = 0;
  };
};

/** "Устанавливаем стили активному слайду" */
function setSectionIndex(sectionIndex) {
  document.querySelector('.carousel__controls .selected').classList.remove('selected');
  indicatorParants.children[sectionIndex].classList.add('selected');
  carouselContainer.children[sectionIndex].style.zIndex = 1;
  carouselContainer.children[sectionIndex].style.opacity = 1;
}

function moveNext() {
  reset();
  
  cL({ 'next-0': sectionIndex })
  cL({ 'sectionsList.length-0': sectionsList.length })
  if (sectionIndex < (sectionsList.length - 1)) {
    sectionIndex = sectionIndex + 1;
    cL({ 'next-1': sectionIndex })
    cL({ 'sectionsList.length-1': sectionsList.length })
  } else {
    sectionIndex = sectionIndex;
  };
  setSectionIndex(sectionIndex);
};

function movePrev() {
  reset();
  if (sectionIndex > 0) {
    sectionIndex = sectionIndex - 1;
  } else {
    sectionIndex = 0;
  };
  setSectionIndex(sectionIndex);
};

[...dots].forEach(function(li, i){
  li.addEventListener('click', function(event){
    if (sectionIndex < i) {
      moveNext();
      sectionIndex = i;
    } else {
      movePrev();
      sectionIndex = i;
    }
  });
});

/** КОНЕЦ Слайдер на 3-м слайде */

document.addEventListener('touchstart', handleTouchStart, true);
document.addEventListener('touchmove', handleTouchMove, true);

/** Первый  слайд */
headerLinkHome.addEventListener('click', moveToFirst);
slideBtnNext.addEventListener('click', moveRight);
slideBtnDetail.addEventListener('click', openDetail);

/** Третий слайд */
arrowNext.addEventListener('click', moveNext);
arrowPrev.addEventListener('click', movePrev);
