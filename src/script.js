import cards from './cards';

// TODO:
// fix header (<1200px)

const container = document.querySelector('.cards-container');
const burger = document.querySelector('#menu');
const title = document.querySelector('.title');

function createCategory(cat, name, img, i) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('cat-card');
  cardEl.setAttribute('data-index', i + 1);
  cardEl.innerHTML = `
    <img src="${img}" data-index="${i + 1}">
    <div class="cat-card__title" data-index="${i + 1}">${name}</div>
  `;
  cat.append(cardEl);
}

function createCard(parent, word) {
  const card = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');
  const enTitle = document.createElement('div');
  const ruTitle = document.createElement('div');
  const rotate = document.createElement('div');
  card.classList.add('card');
  front.classList.add('front');
  back.classList.add('back');
  enTitle.classList.add('card-title');
  enTitle.textContent = word.word;
  ruTitle.classList.add('card-title');
  ruTitle.textContent = word.translation;
  front.style.backgroundImage = `url(${word.image})`;
  back.style.cssText = `background-image: url(${word.image});`;
  rotate.classList.add('rotate');
  rotate.setAttribute('id', 'rotate');
  rotate.style.backgroundImage = 'url("img/rotate.svg")';
  card.append(front);
  card.append(back);
  front.append(enTitle);
  front.append(rotate);
  back.append(ruTitle);
  parent.append(card);

  card.addEventListener('click', (e) => {
    if (!e.target.innerHTML) {
      e.target.offsetParent.style.cssText = `background-image: url(${word.image}); transform: rotateY(180deg)`;
      e.target.offsetParent.nextElementSibling.style.cssText = `background-image: url(${word.image}); transform: rotateY(360deg); filter: saturate(0%);`;
    }
  });

  card.addEventListener('mouseleave', (e) => {
    e.target.firstElementChild.style.cssText = `background-image: url(${word.image}); transform: rotateY(0deg)`;
    e.target.lastElementChild.style.cssText = `background-image: url(${word.image}); transform: rotateY(180deg)`;
  });
}

function renderWordsSet(setIndex) {
  title.textContent = cards[0][setIndex - 1];
  container.innerHTML = '';
  const cardItems = document.createElement('div');
  cardItems.classList.add('card-items');
  cards[setIndex].forEach((card, i) => {
    createCard(cardItems, cards[setIndex][i]);
  });
  container.append(cardItems);
}

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

burger.addEventListener('click', (e) => {
  if (e.target !== burger) {
    const index = cards[0].indexOf(e.target.textContent);
    if (index === -1) renderCategories();
    else renderWordsSet(index + 1);
  }
});

renderCategories();
