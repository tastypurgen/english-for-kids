/* eslint-disable no-multi-assign */
/* eslint-disable no-restricted-syntax */
function tableSort({ target }) {
  const order = (target.dataset.order = -(target.dataset.order || -1));
  const index = [...target.parentNode.cells].indexOf(target);
  const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
  const comparator = (i, innerOrder) => (a, b) => innerOrder * collator.compare(
    a.children[i].innerHTML,
    b.children[i].innerHTML,
  );

  for (const tBody of target.closest('table').tBodies) { tBody.append(...[...tBody.rows].sort(comparator(index, order))); }

  for (const cell of target.parentNode.cells) { cell.classList.toggle('sorted', cell === target); }
}

export default tableSort;
