let view = {
    // метод получает строковое сообщение 
    // и выводит его в области сообщений
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHits: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

let board = document.getElementById("board");

let selectedTd;

var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
{ locations: ["14", "24", "34"], hits: ["", "hit", ""] },
{ locations: ["00", "01", "02"], hits: ["hit", "", ""] }];

