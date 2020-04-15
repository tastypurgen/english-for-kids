import cards from './cards';
import createCard from './createCard';

const container = document.querySelector('.cards-container');
const title = document.querySelector('.title');

function renderWordsSet(setIndex, isGameOn) {
  title.textContent = cards[0][setIndex - 1];
  container.innerHTML = '';
  const cardItems = document.createElement('div');
  cardItems.classList.add('card-items');
  cards[setIndex].forEach((card, i) => {
    createCard(cardItems, cards[setIndex][i], isGameOn);
  });
  container.append(cardItems);
}

export default renderWordsSet;
