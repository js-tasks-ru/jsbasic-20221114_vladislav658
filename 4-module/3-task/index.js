// от vladislav658
function highlight(table) {
  let  bazeCollection = table.rows;
  
  for (let row of bazeCollection) {
	for (let cell of row.cells) {
	  if (cell.getAttribute('data-available') == 'true') {
		row.classList.add('available');
	  } else if (cell.getAttribute('data-available') == 'false') {
		row.classList.add('unavailable');
	  } else {
		row.setAttribute('hidden', 'hidden');
	  }
	  if (cell.innerHTML == 'm') {
		row.classList.add('male');
	  } 
	  if (cell.innerHTML == 'f') {
		row.classList.add('female');
	  }
	  if (parseInt(cell.innerHTML, 10) < 18) {
		row.setAttribute('style', 'text-decoration: line-through;');
	  }
	}
  }
}
