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