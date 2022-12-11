// от vladislav658
function toggleText() {
  let buttonToggleText = document.querySelector('button.toggle-text-button');
  let counterVal = 0;//Начальный счетчик кликов

  function toggleTextCount(){
    updateCount(++counterVal);
  }
  function updateCount(val) {
    let toggleText = document.getElementById("text");
	toggleText.setAttribute('counter', val);//Атрибут - значение счетчика кликов
    if (val % 2 === 0) {
	  toggleText.removeAttribute('hidden');
    } else {
	  toggleText.setAttribute('hidden', 'false');
    }
  }

  buttonToggleText.addEventListener('click', toggleTextCount);   
}
