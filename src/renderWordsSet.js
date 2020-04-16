import cards from './cards';
import createCard from './createCard';
import runGame from './runGame';

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

  if (isGameOn) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.innerHTML = `
      <button class="start-btn">Start Game</button>
      <button class="repeat-btn"></button>
    `;
    container.append(cardItems);
    container.append(btnContainer);
    document.querySelector('.start-btn').addEventListener('click', () => {
      document.querySelector('.start-btn').style.display = 'none';
      document.querySelector('.repeat-btn').style.cssText = 'display: block; background-image: url(img/repeat.svg)';
      runGame(title);
    });
  } else {
    container.append(cardItems);
  }
}

export default renderWordsSet;
