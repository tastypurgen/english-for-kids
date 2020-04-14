import cards from './cards';
import renderCategories from './renderCategories';
import renderWordsSet from './renderWordsSet';

const toggleMenu = document.querySelector('#menu-toggle');
const burger = document.querySelector('#menu');

function burgerHandler() {
  burger.addEventListener('click', (e) => {
    if (e.target !== burger) {
      const index = cards[0].indexOf(e.target.textContent);
      if (index === -1) renderCategories();
      else renderWordsSet(index + 1);
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === burger || e.target === toggleMenu) {
      return;
    }
    toggleMenu.checked = false;
  });
}

export default burgerHandler;
