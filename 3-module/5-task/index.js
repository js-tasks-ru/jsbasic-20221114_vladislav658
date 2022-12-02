// от vladislav658
function getMinMax(str) {
  let getMinMaxArr = str.split(' ');
 
  let minNum = +getMinMaxArr[0];
  let maxNum = minNum;

  for (let i = 0; i < getMinMaxArr.length; i++) {
    let e = +getMinMaxArr[i];
    if (e < minNum) minNum = e;
    if (e > maxNum) maxNum = e;
  }

  return {min: minNum, max: maxNum};
	
}
