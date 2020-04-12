import cards from './cards';

const cardItems = document.querySelector('.card-items');


function createCategory(title, img, i) {
  console.log(title, img);
  const cardEl = document.createElement('div');
  cardEl.classList.add('cat-card');
  cardEl.setAttribute('data-index', i + 1);
  cardEl.innerHTML = `
    <img src="${img}">
    <div class="cat-card__title">${title}</div>
  `;
  cardItems.append(cardEl);
}

function createCard(word) {
  console.log(word);
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
  cardItems.append(cardEl);
}


function renderWordsSet(setIndex) {
  cardItems.innerHTML = '';
  cards[setIndex].forEach((card, i) => {
    createCard(cards[setIndex][i]);
  });
}

cards[0].forEach((card, i) => {
  createCategory(cards[0][i], cards[i + 1][0].image, i);
});


cardItems.addEventListener('click', (e) => {
  if (e.target !== cardItems) {
    const index = e.target.getAttribute('data-index');
    renderWordsSet(index);
  }
});
