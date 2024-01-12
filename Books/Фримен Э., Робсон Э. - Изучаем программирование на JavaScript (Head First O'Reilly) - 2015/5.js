// 1
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

// 2
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

// 3
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}
var worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

// 4
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

console.log(prequal(cadi));
console.log(prequal(fiat));
console.log(prequal(chevy));

// 5
function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}
function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

// 6
var fiat = {
    make: "Fiat",

    // Здесь перечисляются другие свойства (экономим место)
    started: false,

    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            console.log("Zoom zoom!");
        } else {
            console.log("You need to start the enigma first");
        }
    }
};

// 7
var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,

    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing "
                + this.name + " by " + this.artist);
        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
        }
    }
};
song.play();
song.pause();

// 8
var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function () {
        return this.advice[this.index];
    }
};
eightBall.shake;
console.log(eightBall.look());

// 9
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    }
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    }
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    }
};
cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();

// 10 перербрать все свойства объекта и вывести в консоль
for (var prop in chevy) {
    console.log(prop + ": " + chevy[prop]);
}

// 11
var fiat = {
    make: "Fiat",
    model: "500",
    // Здесь идут другие свойства...
    started: false,
    fuel: 0,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

// 12
var fiat = {
    make: "Fiat",
    model: "500",
    // Здесь идут другие свойства...
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel == 0) {
            console.log("The car is on empty, fill up before starting!");
        } else {
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.make + " " +
                    this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                console.log("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            console.log("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();