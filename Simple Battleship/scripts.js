// Переменная с рандомным значением
randomLoc = Math.floor(Math.random() * 5);
// Позиции каждой клетки корабля
var location1 = randomLoc; 
var location2 = location1 + 1; 
var location3 = location2 + 1;
// Номер текущей попытки
var guess;
// Количество попаданий
var hits = 0;
// Количество попыток
var guesses = 0;
// Потоплен корабль?
var isSunk = false;
// Пока корабль не потоплен...
while (isSunk == false) {
    // Вводим число в строку ввода
    guess = prompt("Для выстрела введите число 0-6: ");
    if (guess < 0 || guess > 6) {
        alert("Выстрел не удался! Наводчик ввёл неправильные координаты! Попробуйте ввести правильные числа.");
    } else {
        guesses = guesses + 1;
        // Проверка на попадание в позиции кораблей
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Попал!');
            hits = hits + 1;
            // Проверка на попадание на все позиции корабля
            if (hits == 3) {
                isSunk = true;
                alert("Ты уничтожил корабль!");
            }
        } else {
            alert('Промахнулся!')
        }
    }
}
// Вывод результата пользователю
var stats = "У вас " + guesses + " попыток";
alert(stats);