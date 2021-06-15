export function showCellTemp(event) {
  const cell = event.target;
  cell.className = 'visible';
  //   console.log(event.type, event.target);
}

export function showOrHideCellPermanent(event) {
  const cell = event.target;

  if (cell.nodeName === 'TD' && cell.getAttribute('data-selected') === 'no') {
    cell.setAttribute('data-selected', 'yes');
    cell.className = 'visible';
  } else if (
    cell.nodeName === 'TD' &&
    cell.getAttribute('data-selected') === 'yes'
  ) {
    cell.setAttribute('data-selected', 'no');
  }
}

export function hideCellValue(event) {
  const cell = event.target;

  if (cell.getAttribute('data-selected') === 'no') {
    cell.className = 'hidden';
  }
}
