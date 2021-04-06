let imageSliders = document.querySelectorAll('.ImageSlider');

let generateArrowsFor = (container) => {
  let newRightArrow = document.createElement('div');
  newRightArrow.classList.add('ImageSlider__right-arrow');
  let newLeftArrow = document.createElement('div');
  newLeftArrow.classList.add('ImageSlider__left-arrow');

  container.insertBefore(newLeftArrow, null);
  container.appendChild(newRightArrow);

  return [newLeftArrow, newRightArrow];
};

let showPreviousSlide = (e) => {
  let slider, slides, currentSlide, indexOfCurrentSlide;

  slider = e.target.parentNode;
  slides = Array.from(slider.querySelectorAll('.ImageSlider__slide'));

  currentSlide = document.querySelector(
    '.ImageSlider__slide.ImageSlider__slide--visible'
  );
  indexOfCurrentSlide = slides.indexOf(currentSlide);

  let newCurrentIndex;
  if (indexOfCurrentSlide) {
    newCurrentIndex = indexOfCurrentSlide - 1;
  } else {
    newCurrentIndex = slides.length - 1;
  }

  currentSlide.classList.remove('ImageSlider__slide--visible');
  slides[newCurrentIndex].classList.add('ImageSlider__slide--visible');
};

let showNextSlide = (e) => {};

if (imageSliders) {
  imageSliders.forEach((slider) => {
    let arrows = generateArrowsFor(slider);
    arrows[0].addEventListener('click', showPreviousSlide);
    arrows[1].addEventListener('click', showNextSlide);
  });
}
