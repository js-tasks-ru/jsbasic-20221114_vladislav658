// от vladislav658
function camelize(str) {
  let getCamelaizes = str.split('-');
    for (let key in getCamelaizes) {
	  if (key > 0) {
        getCamelaizes[key] = getCamelaizes[key].charAt(0).toUpperCase() + getCamelaizes[key].substring(1);
	  }
    }
  return getCamelaizes.join('');
}
