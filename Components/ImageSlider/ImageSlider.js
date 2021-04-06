let imageSliders = document.querySelectorAll('.ImageSlider');

let generateArrowsFor = (container) => {
  let newRightArrow = document.createElement('div');
  newRightArrow.classList.add('ImageSlider__right-arrow');
  let newLeftArrow = document.createElement('div');
  newLeftArrow.classList.add('ImageSlider__left-arrow');

  container.insertBefore(newLeftArrow, null);
  container.appendChild(newRightArrow);
};

if (imageSliders) {
  imageSliders.forEach((slider) => {
    generateArrowsFor(slider);
  });
}

document.addEventListener('click', function (e) {
  if (e.target.parentNode.classList.contains('ImageSlider')) {
  }
});
