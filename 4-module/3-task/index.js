// от vladislav658
function highlight(table) {
  let  bazeCollection = table.rows;
  
  for (let row of bazeCollection) {
	  if (row.cells[3].getAttribute('data-available') == 'true') {
		row.classList.add('available');
	  } else if (row.cells[3].getAttribute('data-available') == 'false') {
		row.classList.add('unavailable');
	  } else {
		row.setAttribute('hidden', 'hidden');
	  }
	  if (row.cells[2].innerHTML == 'm') {
		row.classList.add('male');
	  } 
	  if (row.cells[2].innerHTML == 'f') {
		row.classList.add('female');
	  }
	  if (parseInt(row.cells[1].innerHTML, 10) < 18) {
		row.setAttribute('style', 'text-decoration: line-through;');
	  }
  }
}
