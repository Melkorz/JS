// Обзор методов и свойств строки
// Свойство length (возвращает длину строки)
var input = "hello";
for(var i = 0; i < input.length; i++){
    if(input.charAt(i) == "l"){
        console.log("There's an l sign at index " + i);
    }
}

// Метод indexOf (возвращает индекс первого вхождения подстроки)
var phrase = "the cat in the hat";
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);
// Метод indexOf с начальной позицией поиска
index = phrase.indexOf("the", 5);
console.log("there's a sitting at index " + index);
// Метод indexOf с отсутствующей позицией поиска
index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index);

// Метод substring (возвращает подстроку)
// Метод substring с начальной и конечной позицией поиска
var data = "name|phone|address";
var val = data.substring(5, 10);
console.log("Substring is " + val);
// Метод substring только с начальной позицией поиска
val = data.substring(5);
console.log("Substring is now " + val);

// Метод split (возвращает строку, удаляя выбранную часть из строки и заменяет её запятыми)
var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is " + vals);

