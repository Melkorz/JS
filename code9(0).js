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
