// 1
// Массив
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
// Получение элемента массива
var solution = scores[2];
// Вывод
console.log("Решение: " + solution);
/*------------------------------------------------------*/

// 2
// Массив сортов мороженного
var flavors = ['vanilla', 'butterscotch', 'lavender', 'chocolate', "cookie dough"];
// Получение элемента массива
var flavorOfTheDay = flavors[2];
// Обновление значения в массиве
flavors[3] = "vanilla chocolate chip";
// Подсчёт количества элементов в массиве
var numFlavors = flavors.length;

// 3
// Массив сортов мороженного
var products = ["Choo Choo Chocolate", "Icy Msint", "Cake Batter", "Bubblegum"];
// Последний элемент в массиве
var last = products.length - 1;
// Переменная с последним элементов
var recent = products[last];
// Вывод
console.log("Решение: " + recent);

// 4 с циклом while
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// Переменная вывода строки в цикле
var output;
var i = 0;
while (i < scores.length) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    i = i + 1;
}

// 5 с циклом for
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// Переменная вывода строки в цикле
var output;
for (var i = 0; i < scores.length; i = i + 1) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
}

// 6 с циклом while
var products = ["Choo Choo Chocolate", "Icy Msint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
    i = i + 1;
}

// 7 с циклом for
var products = ["Choo Choo Chocolate", "Icy Msint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
}

// 8 подсчёт кол-ва и поиск максимального элемента массива
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
// Пустой массив индексов максимальных элементов 
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i); // Добавление элемента в пустой массив максимальных элементов
    }
}
console.log("Solutions with the highest score: " + bestSolutions);

// 9 создание функции из 8 пункта
function printAndGetHightScore(scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

// 10 нахождение индекса максимального (-ых) элемента (-ов) массива scores и выбор у них индекса самого минимального значения массива costs 
var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highscore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i]
            }
        }
    }
    return index;
};
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");