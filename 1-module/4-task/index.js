// от vladislav658
function checkSpam(str) {
  let strValidUpper = str.toUpperCase();
  if (strValidUpper.includes("1XBET") || strValidUpper.includes("XXX")) {
	return (true);
  } else {
    return (false);
  }
}
