import cards from './cards';

const container = document.querySelector('.cards-container');
const menuLinks = document.querySelectorAll('li');

function renderStatistics() {
  menuLinks.forEach((link) => {
    link.style.textDecoration = 'none';
  });
  menuLinks[9].style.textDecoration = 'underline';

  document.querySelector('.title').innerHTML = 'Statistics';

  container.innerHTML = '';
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
    <th>Category</th>
    <th>Word</th>
    <th style="
    width: 20%;">Translation</th>
    <th>Train</th>
    <th>Right</th>
    <th>Wrong</th>
    <th>Errors</th>
  `;

  cards.slice(1).forEach((category, i) => {
    const cat = cards[0][i];
    category.forEach((word) => {
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
      td4.textContent = 0;
      tr.append(td4);

      const td5 = document.createElement('td');
      td5.textContent = 0;
      tr.append(td5);

      const td6 = document.createElement('td');
      td6.textContent = 0;
      tr.append(td6);

      const td7 = document.createElement('td');
      td7.textContent = '0%';
      tr.append(td7);

      tbody.append(tr);
    });
  });

  table.append(thead);
  table.append(tbody);
  container.append(table);
}

export default renderStatistics;
