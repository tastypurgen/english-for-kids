import cards from './cards';
import renderWordsSet from './renderWordsSet';
import renderCategories from './renderCategories';

let isGameOn = false;
const menu = document.querySelector('#menu');
const checkbox = document.querySelector('.checkbox');
const title = document.querySelector('.title');

function changeGameMode() {
  checkbox.addEventListener('click', () => {
    // check gameMode off / on
    if (checkbox.checked) {
      if (cards[0].indexOf(title.textContent) + 1 === 0) {
        isGameOn = false;
        renderCategories(isGameOn);
      } else {
        isGameOn = false;
        renderWordsSet(cards[0].indexOf(title.textContent) + 1, isGameOn);
      }
      title.style.color = '#78c2ad';
      menu.style.background = '#78c2ad';
      const css = '#menuToggle a:hover {color: #78c2ad;}';
      document.querySelector('#menu li').cssText = css;
    } else {
      if (cards[0].indexOf(title.textContent) + 1 === 0) {
        isGameOn = true;
        renderCategories(isGameOn);
      } else {
        isGameOn = true;
        renderWordsSet(cards[0].indexOf(title.textContent) + 1, isGameOn);
      }
      title.style.color = 'palevioletred';
      menu.style.background = 'palevioletred';
    }
  });
}


export default changeGameMode;
