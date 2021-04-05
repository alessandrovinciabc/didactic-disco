let behaviourOnClick = function (e) {
  if (e.target.classList.contains('DropDownMenu__button')) {
    let content = e.target.parentNode.querySelector('.DropDownMenu__content');

    if (content) {
      content.classList.toggle('DropDownMenu__content--visible');
    }
  }
};

let initializeDropDownMenus = () => {
  document.addEventListener('click', behaviourOnClick);

  return {
    eventType: 'click',
    callback: behaviourOnClick,
  };
};

export default initializeDropDownMenus();
