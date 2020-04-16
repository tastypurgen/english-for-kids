import cards from './cards';
import createCategory from './createCategory';
import renderWordsSet from './renderWordsSet';

const container = document.querySelector('.cards-container');
const title = document.querySelector('.title');
const menuLinks = document.querySelectorAll('li');

function renderCategories(isGameOn) {
  menuLinks.forEach((link) => {
    link.style.textDecoration = 'none';
  });
  menuLinks[0].style.textDecoration = 'underline';
  title.textContent = 'Categories';
  container.innerHTML = '';
  const categoriesEl = document.createElement('div');
  cards[0].forEach((card, i) => {
    createCategory(categoriesEl, cards[0][i], cards[i + 1][0].image, isGameOn, i);
  });
  categoriesEl.classList.add('categories');
  container.append(categoriesEl);

  document.querySelector('.categories').addEventListener('click', (e) => {
    if (e.target !== document.querySelector('.categories')) {
      const index = e.target.getAttribute('data-index');
      renderWordsSet(index, isGameOn);
    }
  });
}

export default renderCategories;
