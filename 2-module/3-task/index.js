// от vladislav658
let calculator = {
  read(a, b) {
    this.first = a;
    this.second = b;
  },
  sum() {
    return this.first + calculator.second;
  },
  mul() {
    return this.first * calculator.second;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
