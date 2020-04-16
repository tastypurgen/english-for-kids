
import cards from './cards';
import shuffle from './shuffle';
import renderCategories from './renderCategories';


function runGame(title) {
  const container = document.querySelector('.cards-container');
  const gameCards = document.querySelector('.card-items');
  const repeatBtn = document.querySelector('.repeat-btn');
  const currentSet = cards[0].indexOf(title.textContent) + 1;
  const soundArr = [];
  let errorsCount = 0;

  cards[currentSet].forEach((key) => {
    const element = [];
    element.push(key.word);
    element.push(new Audio(`https://wooordhunt.ru/data/sound/word/us/mp3/${key.word}.mp3`));
    soundArr.push(element);
  });

  const shuffled = shuffle(soundArr);
  shuffled[0][1].play();

  repeatBtn.addEventListener('click', () => {
    shuffled[0][1].play();
  });
  const copyTitle = title;
  copyTitle.innerHTML = '';

  gameCards.addEventListener('click', (e) => {
    if (e.target !== gameCards) {
      // check clicked card and sound
      if (`url("img/${shuffled[0][0]}.jpg")` === e.target.style.backgroundImage) {
        // right card

        copyTitle.innerHTML += '<img src="img/star-win.svg">';
        e.target.classList.add('front-off');
        new Audio('https://english-for-kids.netlify.app/static/media/correct.8e3d6124.mp3').play();
        shuffled.shift();
      } else {
        // wrong card

        copyTitle.innerHTML += '<img src="img/star.svg">';
        new Audio('https://english-for-kids.netlify.app/static/media/error.32fc22b2.mp3').play();
        errorsCount += 1;
      }
      // check words left
      if (shuffled.length > 0) {
        setTimeout(() => { shuffled[0][1].play(); }, 1000);
      } else {
        if (errorsCount < 1) {
          new Audio('https://english-for-kids.netlify.app/static/media/success.beda7e18.mp3').play();
          copyTitle.innerHTML = '';
          container.innerHTML = `
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
          ">
            <img style="width: 400px;" src="img/winner.png">
            <h2 style="
              font-size: 4rem;
              color: white;
              background: #78c2ad;
              padding: 10px 20px;
              border-radius: 10px;
            ";
            background: #78c2ad;">You won!</h2>
          </div>
          `;
        } else {
          const message = errorsCount === 1 ? 'You made 1 mistake!' : `You made ${errorsCount} mistakes!`;
          new Audio('https://english-for-kids.netlify.app/static/media/failure.18423bbf.mp3').play();
          copyTitle.innerHTML = '';
          container.innerHTML = `
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
          ">
            <img style="width: 400px;" src="img/gameover.png">
            <h2 style="
              font-size: 4rem;
              color: white;
              background: palevioletred;
              padding: 10px 20px;
              border-radius: 10px;
            ">${message}</h2>
          </div>
          `;
          errorsCount = 0;
        }
        setTimeout(() => { renderCategories(true); }, 5000);
      }
    }
  });
}

export default runGame;