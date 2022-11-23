// от vladislav658
function ucFirst(str) {
  let strValid = str;
  if (strValid === null || strValid === undefined) {
    console.log('Данные не корректны, НЕ подразумевается что содержимое null или undefined...');
	return (false);
  } else {
    const strValidUpper = strValid.charAt(0).toUpperCase() + strValid.substring(1);
    console.log('Данные корректны... = ', strValidUpper);
    return (strValidUpper);	
  }
}
