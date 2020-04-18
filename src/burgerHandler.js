import cards from './cards';
import renderCategories from './renderCategories';
import renderWordsSet from './renderWordsSet';
import renderStatistics from './renderStatistics';

const toggleMenu = document.querySelector('#menu-toggle');
const burger = document.querySelector('#menu');
const checkbox = document.querySelector('.checkbox');

function burgerHandler() {
  burger.addEventListener('click', (e) => {
    if (e.target !== burger) {
      // if gameMode is off
      const index = cards[0].indexOf(e.target.textContent);
      if (checkbox.checked) {
        if (e.target.textContent === 'Statistics') renderStatistics();
        else if (index === -1) renderCategories();
        else renderWordsSet(index + 1);
      } else if (e.target.textContent === 'Statistics') renderStatistics();
      else if (index === -1) renderCategories(true);
      else renderWordsSet(index + 1, true);
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
