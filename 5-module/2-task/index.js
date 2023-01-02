// от vladislav658
function toggleText() {
  let buttonToggleText = document.querySelector('button.toggle-text-button');
  let blockText = document.getElementById('text');

  function blockTextSetAttribut() {
    blockText.hidden = !blockText.hidden;
  }
 
   buttonToggleText.addEventListener('click', blockTextSetAttribut);
}
