// Page 453
var migrating = true;
let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying");
    }
};

function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack")
    }
}

if (migrating) {
    quack(4);
    fly(4);
}

// Page 458
let midi = true;
let type = "piano"
let midiInterface;

function play(sequence) {
    // ...
}
let pause = function () {
    stop();
}
function stop() {
    // ...
}

function createMidi() {
    // ...
}

if (midi) {
    midiInterface = function (type) {
        // ...
    };
}

// Page 459
function quack1(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack1")
    }
}
let fly1 = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying1");
    }
}

let superFly = fly1;
superFly(2);

let superQuack = quack1;
superQuack(3);

//Page 477
let products = [
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Banana", calories: 100, color: "yellow", sold: 12000 },
    { name: "Orange", calories: 200, color: "orange", sold: 12101 },
    { name: "Apple", calories: 80, color: "green", sold: 25412 },
    { name: "Strawberry", calories: 50, color: "red", sold: 43922 },
    { name: "Cherries", calories: 50, color: "red", sold: 14983 },
    { name: "Peach", calories: 50, color: "yellow", sold: 9427 },
    { name: "Pear", calories: 50, color: "yellow", sold: 9909 },
    { name: "Watermelon", calories: 50, color: "green", sold: 62123 },
];

// Page 463
var passengers = [
    { name: "Alice", paid: true, ticket: "coach" },
    { name: "Bob", paid: false, ticket: "firstclass" },
    { name: "Charlie", paid: true, ticket: "firstclass" },
    { name: "David", paid: false, ticket: "premium" },
];

// Page 464
function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
    }
    return true;
}

function checkNoFly(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

function printPassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
    return true;
}

//Page 465
function sayIt(translator) {
    let phrase = translator("Hello");
    console.log(phrase);
}

function hawaiianTranslator(word) {
    if (word === "hello") {
        return "Aloha";
    }
    if (word === "Goodbye") {
        return "Adios";
    }
    return word;
}

sayIt(hawaiianTranslator);

// Page 466
// Функция перебора пассажиров
function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (!testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNoPaid(passenger) {
    return (!passenger.paid);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

let allPaid = processPassengers(passengers, checkNoPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

// Page 468
function printPassenger(passenger) {
    let message = passenger.name;
    if (passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " hasn't paid";
    }
    console.log(message);
    return false;
}

processPassengers(passengers, printPassenger);

// Page 469
function fun(echo) {
    console.log(echo);
}

fun("Hello"); // Ответ: Hello

function boo(aFunction) {
    aFunction();
}
boo(fun);
console.log(boo); // Ответ: [Function: boo]

console.log(fun); // Ответ: [Function: fun]

let moreFun = fun;
moreFun("Hello again"); // Ответ: Hello again

function echoMaker() {
    return fun;
}
console.log(echoMaker()); // Ответ: [Function: fun]

let bigFun = echoMaker();
bigFun("Is there an echo?"); // Ответ: Is there an echo?

// Page 473
function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunclion = createDinnerOrder(passenger);
    // Предложить напитки
    getDrinkOrderFunction();
    // Предложить обед
    getDinnerOrderFunclion();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // Включить кино
    getDrinkOrderFunction();
    // Забрать мусор
}

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log("Would you like a wine or water?");
        };
    } else {
        orderFunction = function () {
            console.log("Your choice is cola or water.");
        };
    }
    return orderFunction;
}

//Page 491
function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFunction = function () {
            console.log("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}

// Page 475
function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);

// Page 479
let numbersArray = [50, 60, 58, 52, 54, 54, 48, 69,];

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

// Page 480
numbersArray.sort(compareNumbers); // Сортировка
console.log(numbersArray);

// Page 481
function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareSold); // Сортировка напитков по количеству проданного

// Page 482
function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name
            + ", calories: " + products[i].calories
            + ", Color: " + products[i].color
            + ", Solid: " + products[i].sold);
    }
}

printProducts(products);