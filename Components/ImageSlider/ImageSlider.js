let getNumberOfSlides = (slider) => {
  return slider.querySelectorAll('.ImageSlider__slide').length;
};

let getCurrentSlide = (slider) => {
  let slides, currentSlide;

  slides = Array.from(slider.querySelectorAll('.ImageSlider__slide'));

  currentSlide = document.querySelector(
    '.ImageSlider__slide.ImageSlider__slide--visible'
  );

  return currentSlide || -1;
};

let generateArrowsFor = (slider) => {
  let newRightArrow, newLeftArrow;

  newRightArrow = document.createElement('div');
  newRightArrow.classList.add('ImageSlider__right-arrow');

  newLeftArrow = document.createElement('div');
  newLeftArrow.classList.add('ImageSlider__left-arrow');

  slider.insertBefore(newLeftArrow, null);
  slider.appendChild(newRightArrow);

  return [newLeftArrow, newRightArrow];
};

let generateDotsFor = (slider) => {
  let navigationGroup, totalSlides;
  navigationGroup = document.createElement('div');
  navigationGroup.classList.add('ImageSlider__navigation-group');

  totalSlides = getNumberOfSlides(slider);

  for (let i = 0; i < totalSlides; ++i) {
    let newDot = document.createElement('div');
    newDot.classList.add('ImageSlider__navigation-dot');
    //data attributes with dashes get converted to camelCase
    newDot.dataset.slideNumber = i;

    navigationGroup.appendChild(newDot);
  }

  slider.appendChild(navigationGroup);

  return navigationGroup;
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

let handleNavigationDots = (e) => {
  if (e.target.classList.contains('ImageSlider__navigation-dot')) {
    let slider = e.target.parentNode.parentNode;
  }
};

let imageSliders = document.querySelectorAll('.ImageSlider');

if (imageSliders) {
  imageSliders.forEach((slider) => {
    let arrows = generateArrowsFor(slider);
    let groupOfDots = generateDotsFor(slider);
    groupOfDots.addEventListener('click', handleNavigationDots);
    arrows[0].addEventListener('click', showPreviousSlide);
    arrows[1].addEventListener('click', showNextSlide);
  });
}
