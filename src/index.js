import initializeDropDownMenus from '../Components/DropDownMenu/DropDownMenu.js';
import initializeMobileMenus from '../Components/MobileMenu/MobileMenu.js';
import initializeImageSliders from '../Components/ImageSlider/ImageSlider.js';

const TIME_PER_SLIDE = 5;

initializeDropDownMenus();
initializeMobileMenus();
initializeImageSliders(TIME_PER_SLIDE);
