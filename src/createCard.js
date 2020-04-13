
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

export default createCard;
