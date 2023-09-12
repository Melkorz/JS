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