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

let displaySlide = (e, conditionCallback) => {
  let slider, slides, currentSlide, indexOfCurrentSlide;

  slider = e.target.parentNode;
  slides = Array.from(slider.querySelectorAll('.ImageSlider__slide'));

  currentSlide = document.querySelector(
    '.ImageSlider__slide.ImageSlider__slide--visible'
  );
  indexOfCurrentSlide = slides.indexOf(currentSlide);

  let newCurrentIndex = conditionCallback(slides, indexOfCurrentSlide);

  currentSlide.classList.remove('ImageSlider__slide--visible');
  slides[newCurrentIndex].classList.add('ImageSlider__slide--visible');
};

let showPreviousSlide = (e) => {
  displaySlide(e, (slides, indexOfCurrentSlide) => {
    if (indexOfCurrentSlide) {
      return indexOfCurrentSlide - 1;
    } else {
      return slides.length - 1;
    }
  });
};

let showNextSlide = (e) => {
  displaySlide(e, (slides, indexOfCurrentSlide) => {
    if (indexOfCurrentSlide === slides.length - 1) {
      return 0;
    } else {
      return indexOfCurrentSlide + 1;
    }
  });
};

if (imageSliders) {
  imageSliders.forEach((slider) => {
    let arrows = generateArrowsFor(slider);
    arrows[0].addEventListener('click', showPreviousSlide);
    arrows[1].addEventListener('click', showNextSlide);
  });
}
