// Page 453
var migrating = true;
let fly = function(num){
    for(let i = 0; i < num; i++){
        console.log("Flying");
    }
};

function quack(num){
    for(let i = 0; i < num; i++){
        console.log("Quack")
    }
}

if(migrating){
    quack(4);
    fly(4);
}

// Page 458
let midi = true;
let type = "piano"
let midiInterface;

function play(sequence){
    // ...
}
let pause = function(){
    stop();
}
function stop(){
    // ...
}

function createMidi(){
    // ...
}

if(midi){
    midiInterface = function(type){
        // ...
    };
}

// Page 459
function quack1(num){
    for(let i = 0; i < num; i++){
        console.log("Quack1")
    }
}
let fly1 = function(num){
    for(let i = 0; i < num; i++){
        console.log("Flying1");
    }
}

let superFly = fly1;
superFly(2);

let superQuack = quack1;
superQuack(3);