import cards from './cards';
import renderCategories from './renderCategories';
import renderWordsSet from './renderWordsSet';

const burger = document.querySelector('#menu');

function burgerHandler() {
  burger.addEventListener('click', (e) => {
    if (e.target !== burger) {
      const index = cards[0].indexOf(e.target.textContent);
      if (index === -1) renderCategories();
      else renderWordsSet(index + 1);
    }
  });
}

export default burgerHandler;
