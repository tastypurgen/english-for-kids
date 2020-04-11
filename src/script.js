import cards from './cards';

const cardItems = document.querySelector('.card-items');

cards[0].forEach((card) => {

});


function createCard(word) {
  console.log(word);
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  const front = document.createElement('div');
  front.classList.add('front');
  const title = document.createElement('div');
  title.classList.add('card-title');
  title.textContent = word.word;
  // TODO fix image
  front.style.backgroundImage = `url(${word.image})`;
  cardEl.append(front);
  cardEl.append(title);
  cardItems.append(cardEl);
}

createCard(cards[1][0]);
