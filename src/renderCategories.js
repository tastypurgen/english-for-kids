import cards from './cards';
import createCategory from './createCategory';
import renderWordsSet from './renderWordsSet';

const container = document.querySelector('.cards-container');
const title = document.querySelector('.title');

function renderCategories() {
  title.textContent = 'Categories';
  container.innerHTML = '';
  const categoriesEl = document.createElement('div');
  cards[0].forEach((card, i) => {
    createCategory(categoriesEl, cards[0][i], cards[i + 1][0].image, i);
  });
  categoriesEl.classList.add('categories');
  container.append(categoriesEl);

  document.querySelector('.categories').addEventListener('click', (e) => {
    if (e.target !== document.querySelector('.categories')) {
      const index = e.target.getAttribute('data-index');
      renderWordsSet(index);
    }
  });
}

export default renderCategories;
