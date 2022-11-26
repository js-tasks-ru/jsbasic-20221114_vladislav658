// от vladislav658
function sumSalary(salaries) {
  let summKey = 0;
  for (let key in salaries) {
	 if (Number.isFinite(salaries[key])) {
       summKey += salaries[key];
	 }
  }
  return summKey;
}
