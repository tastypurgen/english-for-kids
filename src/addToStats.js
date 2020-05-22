let stats = {};
if (localStorage.getItem('stats')) {
  stats = JSON.parse(localStorage.getItem('stats'));
}
function addToStats(word, mode) {
  if (!stats[word]) {
    stats[word] = {
      train: 0,
      right: 0,
      wrong: 0,
    };
  }
  stats[word][mode] += 1;

  localStorage.stats = JSON.stringify(stats);
}

export default addToStats;
