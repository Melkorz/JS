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

function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (lot[i] == car) {
            return i;
        }
    }
    return -1;
}
var chevy = {
    make: "Chevy",
    model: "Bel-Air",
};
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
};
var fiat = {
    make: "Fiat",
    model: "500",
};
var fiat2 = {
    make: "Fiat",
    model: "500",
};

var lot = [chevy, taxi, fiat, fiat2];

var loc1 = findCarInLot(chevy);
console.log(loc1);
var loc2 = findCarInLot(fiat);
console.log(loc2);
var loc3 = findCarInLot(fiat2);
console.log(loc3);
var loc4 = findCarInLot(taxi);
console.log(loc4);

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