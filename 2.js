// 1 задача
var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);
console.log(humid); // Ответ: true

// 2 задача
var guess = 6;
var isValid = (guess >= 0 && guess <= 6); // 1 && 1 = 1
console.log(isValid); // Ответ: true

// 3 задача
var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false); //1 || 0 = 1
console.log(sendFile); // Ответ: true

// 4 задача
var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" || (points > 100 && points < 200)) { 
    level = 2; // 0 || 1 = 1. Следовательно level = 2 выполняется
} else {
    level = 1;
}
console.log(level); // Ответ: 2
