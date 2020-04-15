function createCategory(cat, name, img, isGameOn, i) {
  const cardEl = document.createElement('div');
  if (isGameOn) cardEl.classList.add('cat-card-game');
  else cardEl.classList.add('cat-card');
  cardEl.setAttribute('data-index', i + 1);
  cardEl.innerHTML = `
    <img src="${img}" data-index="${i + 1}">
    <div class="cat-card__title" data-index="${i + 1}">${name}</div>
  `;
  cat.append(cardEl);
}

export default createCategory;
