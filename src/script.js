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
  card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('front');
  front.style.backgroundImage = `url(${word.image})`;

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.cssText = `background-image: url(${word.image});`;

  const enTitle = document.createElement('div');
  enTitle.classList.add('card-title');
  enTitle.textContent = word.word;

  const ruTitle = document.createElement('div');
  ruTitle.classList.add('card-title');
  ruTitle.textContent = word.translation;

  const rotate = document.createElement('div');
  rotate.classList.add('rotate');
  rotate.setAttribute('id', 'rotate');
  rotate.style.backgroundImage = 'url("img/rotate.svg")';

  const audio = document.createElement('audio');
  audio.setAttribute('preload', 'auto');
  audio.setAttribute('src', `https://wooordhunt.ru/data/sound/word/us/mp3/${word.word}.mp3`);

  card.append(front);
  card.append(audio);
  card.append(back);
  front.append(enTitle);
  front.append(rotate);
  back.append(ruTitle);
  parent.append(card);

  card.addEventListener('click', (e) => {
    if (!e.target.innerHTML) {
      e.target.offsetParent.style.cssText = `background-image: url(${word.image}); transform: rotateY(180deg)`;
      // rotate.front.audio.back
      e.target.offsetParent.nextElementSibling.nextElementSibling.style.cssText = `background-image: url(${word.image}); transform: rotateY(360deg); filter: saturate(0%);`;
    } else if (e.target.innerHTML === word.word) e.target.offsetParent.nextElementSibling.play();
    else if (e.target === front) {
      e.target.nextElementSibling.play();
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
