import renderCategories from './renderCategories';
import burgerHandler from './burgerHandler';

const switcher = document.querySelector('.checkbox');


switcher.addEventListener('click', (e) => {
  console.log(e);
  if (switcher.checked) switcher.checked = true;
  else switcher.checked = false;
});

// TODO:
// fix header (<1200px)
// highlight current set in burger
// close burger after click out of burger
// add statistics and gamemode

burgerHandler();
renderCategories();
