const container = document.querySelector('.cards-container');

function trainDifficultWords() {
  document.querySelector('.title').innerHTML = '';
  container.innerHTML = `
  <h1 style="
    color: white;
    text-align: center;
    background: palevioletred;
    border-radius: 10px;
    padding: 25px;
  ">There are no serious mistakes! :)</h1>
  `;
}

export default trainDifficultWords;
