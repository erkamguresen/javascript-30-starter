export function showCellTemp(event) {
  const cell = event.target;
  cell.className = 'visible';
  //   console.log(event.type, event.target);
}

export function showCellPermanent(event) {
  const cell = event.target;

  cell.setAttribute('data-selected', 'yes');
  cell.className = 'visible';
  console.log(event.type);
}

export function hideCellValue(event) {
  const cell = event.target;

  if (cell.getAttribute('data-selected') === 'no') {
    cell.className = 'hidden';
  }
}
