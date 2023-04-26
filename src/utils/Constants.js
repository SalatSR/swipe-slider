const slide2Message = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur provident voluptas fugiat maxime placeat totam iusto impedit, beatae perferendis dignissimos corporis, vitae voluptatum atque temporibus necessitatibus nulla omnis quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur provident voluptas fugiat maxime placeat totam iusto impedit, beatae perferendis dignissimos corporis, vitae voluptatum atque temporibus necessitatibus nulla omnis quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur provident voluptas fugiat maxime placeat totam iusto impedit, beatae perferendis dignissimos corporis, vitae voluptatum atque temporibus necessitatibus nulla omnis quam.';

const headerLinkHome = document.querySelector('.header__btn_home');
const sliderLine = document.querySelector('.slider__line');
const slideBtnNext = document.querySelector('.slide-1__btn');
const slideBtnDetail = document.querySelector('.slide-3__btn');

/** для слайдера на 3-м слайде */
const arrowNext = document.querySelector('.carousel__btn_next');
const arrowPrev = document.querySelector('.carousel__btn_prev');
const carouselContainer = document.querySelector('.carousel__container');
const sectionsList = document.querySelectorAll('.carousel__slide');
const indicatorParants = document.querySelector('.carousel__controls ul');
const dots = document.querySelectorAll('.carousel__controls li');

const advantages = [
  {
      number: '01',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
      number: '02',
      paragraph: 'Faucibus pulvinar elementum integer enim'
  },
  {
      number: '03',
      paragraph: 'Faucibus pulvinar elementum integer enim'
  },
  {
      number: '04',
      paragraph: 'Mi bibendum neque egestas congue quisque egestas diam'
  },
  {
      number: '05',
      paragraph: 'Venenatis lectus magna fringilla urna'
  },
  {
      number: '06',
      paragraph: 'Venenatis lectus magna fringilla urna'
  }
];

export {
  slide2Message,
  headerLinkHome,
  sliderLine,
  slideBtnNext,
  slideBtnDetail,
  advantages,
  arrowNext,
  arrowPrev,
  carouselContainer,
  sectionsList,
  indicatorParants,
  dots,
};