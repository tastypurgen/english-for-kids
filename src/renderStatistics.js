import cards from './cards';
import tableSort from './tableSort';

const title = document.querySelector('.title');
const container = document.querySelector('.cards-container');
const menuLinks = document.querySelectorAll('li');


function renderStatistics() {
  const ls = JSON.parse(localStorage.getItem('stats'));

  menuLinks.forEach((link) => {
    link.style.textDecoration = 'none';
  });
  menuLinks[9].style.textDecoration = 'underline';

  title.style.cssText = 'padding: 4px; display: flex;justify-content: space-around;';
  title.innerHTML = `
    <span class="resetBtn">Reset</span>
  `;

  container.innerHTML = '';
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
    <th style="width: 15%;">Category</th>
    <th style="width: 22%;">Word</th>
    <th style="width: 22%;">Translation</th>
    <th style="width: 10%;">Train</th>
    <th style="width: 10%;">Right</th>
    <th style="width: 10%;">Wrong</th>
    <th style="width: 10%;">Errors</th>
  `;

  cards.slice(1).forEach((category, i) => {
    const cat = cards[0][i];
    category.forEach((word) => {
      let rightCount;
      let wrongCount;
      const tr = document.createElement('tr');

      const td1 = document.createElement('td');
      td1.textContent = cat;
      tr.append(td1);

      const td2 = document.createElement('td');
      td2.textContent = word.word;
      tr.append(td2);

      const td3 = document.createElement('td');
      td3.textContent = word.translation;
      tr.append(td3);

      const td4 = document.createElement('td');
      if (ls !== null && ls[word.word]) td4.textContent = ls[word.word].train;
      else td4.textContent = 0;
      tr.append(td4);

      const td5 = document.createElement('td');
      if (ls !== null && ls[word.word]) {
        rightCount = ls[word.word].right;
        td5.textContent = rightCount;
      } else td5.textContent = 0;
      tr.append(td5);

      const td6 = document.createElement('td');
      if (ls !== null && ls[word.word]) {
        wrongCount = ls[word.word].wrong;
        td6.textContent = wrongCount;
      } else td6.textContent = 0;
      tr.append(td6);

      const td7 = document.createElement('td');
      if (ls !== null && ls[word.word] && wrongCount !== 0) {
        const percent = (wrongCount / (wrongCount + rightCount)) * 100;
        td7.textContent = `${parseInt(percent, 10)}%`;
      } else td7.textContent = '';
      tr.append(td7);

      tbody.append(tr);
    });
  });

  table.append(thead);
  table.append(tbody);
  container.append(table);

  document.querySelectorAll('table thead').forEach((tableTH) => tableTH.addEventListener('click', (e) => tableSort(e)));

  document.querySelector('.resetBtn').addEventListener('click', () => {
    localStorage.clear();
    renderStatistics();
  });
}

export default renderStatistics;
