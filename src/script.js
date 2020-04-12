import cards from './cards';

// TODO:
// fix burger
// fix header (<1200px)

const container = document.querySelector('.container');


function createCategory(cat, title, img, i) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('cat-card');
  cardEl.setAttribute('data-index', i + 1);
  cardEl.innerHTML = `
    <img src="${img}" data-index="${i + 1}">
    <div class="cat-card__title" data-index="${i + 1}">${title}</div>
  `;
  cat.append(cardEl);
}

function createCard(parent, word) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  const front = document.createElement('div');
  front.classList.add('front');
  const title = document.createElement('div');
  title.classList.add('card-title');
  title.textContent = word.word;
  front.style.backgroundImage = `url(${word.image})`;
  cardEl.append(front);
  cardEl.append(title);
  parent.append(cardEl);
}


function renderWordsSet(setIndex) {
  container.innerHTML = '';
  const cardItems = document.createElement('div');
  cardItems.classList.add('card-items');
  cards[setIndex].forEach((card, i) => {
    createCard(cardItems, cards[setIndex][i]);
  });
  container.append(cardItems);
}

function renderCategories() {
  const categoriesEl = document.createElement('div');
  cards[0].forEach((card, i) => {
    createCategory(categoriesEl, cards[0][i], cards[i + 1][0].image, i);
  });
  categoriesEl.classList.add('categories');
  container.append(categoriesEl);
}

renderCategories();

document.querySelector('.categories').addEventListener('click', (e) => {
  if (e.target !== document.querySelector('.categories')) {
    const index = e.target.getAttribute('data-index');
    renderWordsSet(index);
  }
});
