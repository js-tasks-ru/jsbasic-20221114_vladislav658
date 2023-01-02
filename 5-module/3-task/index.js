// от vladislav658
function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let oneSlide = document.querySelectorAll('.carousel__slide');
  let widthOneSlide = oneSlide[0].offsetWidth;
  let buttonArrowRight = document.querySelector('.carousel__arrow_right');
  let buttonArrowLeft = document.querySelector('.carousel__arrow_left');
  let counterSlides = 0;//Начальный счетчик слайдов
  carouselInner.setAttribute('counter', 0);
  buttonArrowLeft.style.display = 'none';
  

  function updateButton() {
    if (carouselInner.getAttribute('counter') !== '0') {
	  buttonArrowLeft.style.display = '';
	} else {
	  buttonArrowLeft.style.display = 'none';
	}
    if (carouselInner.getAttribute('counter') != '3') {
	  buttonArrowRight.style.display = '';
	} else {
	  buttonArrowRight.style.display = 'none';
	}
  }
  
  function updateCount() {
	let moveValue;
	if (carouselInner.getAttribute('moving') == 'right') {
	  carouselInner.setAttribute('moving', 'stop');//Атрибут двигаемся - СТОП (ОДНА итерация)
      updateCount(++counterSlides);
      carouselInner.setAttribute('counter', counterSlides);//Атрибут - значение счетчика СЛАЙДОВ
	  moveValue = counterSlides*widthOneSlide;
	  carouselInner.style.transform = 'translateX(-' + moveValue + 'px)';
	};
	if (carouselInner.getAttribute('moving') == 'left') {
	  carouselInner.setAttribute('moving', 'stop');//Атрибут двигаемся - СТОП (ОДНА итерация)
      updateCount(--counterSlides);
	  carouselInner.setAttribute('counter', counterSlides);//Атрибут - значение счетчика СЛАЙДОВ
	  moveValue = counterSlides*widthOneSlide;
	  carouselInner.style.transform = 'translateX(-' + moveValue + 'px)';
	};
  }
  
  function moveRight() {
	carouselInner.setAttribute('moving', 'right');//Атрибут - двигаемся ВПРАВО
  }
  function moveLeft() {
	carouselInner.setAttribute('moving', 'left');//Атрибут - двигаемся ВЛЕВО
  }
 
   buttonArrowRight.addEventListener('click', moveRight);
   buttonArrowRight.addEventListener('click', updateCount);
   buttonArrowRight.addEventListener('click', updateButton);
   
   buttonArrowLeft.addEventListener('click', moveLeft);
   buttonArrowLeft.addEventListener('click', updateCount);
   buttonArrowLeft.addEventListener('click', updateButton);
}
