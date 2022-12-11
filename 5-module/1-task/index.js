// от vladislav658
function hideSelf() {
  let buttonHideSelf = document.querySelector('button.hide-self-button');
  
  buttonHideSelf.addEventListener('click', buttonHideSelf.setAttribute('hidden', 'true'));
}
