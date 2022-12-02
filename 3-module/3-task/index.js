// от vladislav658
function camelize(str) {
  let getCamelaizesOne = str.split('-');

  getCamelaizesMore = getCamelaizesOne
    .filter((zeroIndex, index) => (index > 0))
    .map(item => (item.charAt(0).toUpperCase() + item.substring(1)));
	
  return [...getCamelaizesOne[0], ...getCamelaizesMore].join('');
}
