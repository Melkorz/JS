// Посмотреть тип данных у переменной
var test1 = 123;
var test2 = "123";
var test3 = null;
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);

function Duck(sound) {
    this.sound = sound;
    this.quack = function () {
        console.log(this.sound);
    }
}
var toy = new Duck("quack quack"); // toy - это объект (создание объекта)
toy.quack();
console.log(typeof toy);
/* 
    Оператор instanceof 
    возвращает true или false, 
    в зависимости от того, 
    является ли объект экземпляром указанного класса
*/
console.log(toy instanceof Duck);

// Вывести в консоль результат сравнения (true or false)
console.log("0" == 0);
console.log("0" === 0);
console.log("0" == false);

// Проверка преобразования типов данных
console.log(Infinity - "1");
console.log("1" - Infinity);
console.log("42" + 42);
console.log(2 + "1 1");
console.log("1" - 1);
console.log("Result: " + 10 / 2);

function lieDetectorTest() {
    var lies = 0;

    var stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond!");
        lies++;
    }
    var car = {
        keysInPocket: null,
    };
    if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }
    if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!");
        lies++;
    }
    var foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }
    var yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name!");
        lies++;
    }
    return lies;
}
var numbersOfLies = lieDetectorTest();
console.log("You told " + numbersOfLies + " lies");
if (numbersOfLies >= 3) {
    console.log("Guilty as charged");
}