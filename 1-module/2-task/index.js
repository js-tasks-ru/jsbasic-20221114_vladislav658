// от vladislav658
/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  const nameValid = name;
  if (nameValid === null) {
    return (false);
  }
  const nameValidSymbol = nameValid.split('');
  //или const nameValidSymbol = Array.from(nameValid);
  let nameValidLength = name.length;
  if (nameValidLength > 3) {
    for ( i = 0; i < nameValidLength; i++) {
	  if (nameValidSymbol[i] == " ") {
        return (false);
		break;
	  }
	}
    return (true);	
  } else {
    return (false);
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
