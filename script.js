function calc() {
    // Получаем значения из полей ввода и переводим в числа
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operator').value;
    let res;

    // Проверяем, ввел ли пользователь оба числа
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').innerText = "Введите оба числа!";
        return; // Останавливаем функцию
    }

    // Выбираем действие в зависимости от знака
    if (op === '+') {
        res = a + b;
    } else if (op === '-') {
        res = a - b;
    } else if (op === '*') {
        res = a * b;
    } else if (op === '/') {
        // Защита от деления на ноль
        if (b === 0) {
            document.getElementById('result').innerText = "Ошибка: деление на 0!";
            return;
        }
        res = a / b;
    }

    // Выводим итоговый результат на страницу
    document.getElementById('result').innerText = "Результат: " + res;
}
