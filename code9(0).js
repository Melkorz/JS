let tick = true;
function ticker(){
    if(tick){
        console.log("tick");
        tick = false;
    } else{
        console.log("tock");
        tick = true;  
    }
}
setInterval(ticker, 1000);

var addOne = function (x) {
    return x + 1;
};
var six = addOne(5);
console.log(six); // 6

// Page 453
var migrating = true;
var fly = function(num){
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

// Page 