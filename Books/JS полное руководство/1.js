// Page 28
let primes = [2, 3, 5, 7, 11, 13];
let empty = [];

// Page 29
//Вложенные массивы (объекты содержат объекты)
let points = [              //Массив с 2-мя элементами
    {x: 0, y: 0},
    {x: 1, y: 1}
];

console.log(points.length);
console.log(points);
console.log(points[0].x);
for(let i = 0; i < points.length; i++){
    console.log(points[i].x);
}

let data = {                    // Объект с двумя свойствами
    trial1: [[1, 2], [3, 4]],   // Значением каждого свойства является массив
    trial2: [[2, 3], [4, 5]]    // Элементы массива представляют собой массивы
};

console.log(data.trial1.length);
console.log(data);
console.log(data.trial1[0][1]);
for(let i = 0; i < data.trial1.length; i++){
    console.log(data.trial1[i]);
}

// Page 31
// Определение метода расчёта расстояния между точками
points.dist = function(){
    let p1 = this[0]; // Первый элемент массива, на котором вызывается метод
    let p2 = this[1]; // Второй элемент массива, на котором вызывается метод
    let a = Math.abs(p1.x - p2.x);
    let b = Math.abs(p1.y - p2.y);
    return Math.sqrt(a*a + b*b); // Теорема Пифагора
};
console.log(points.dist());

// Page 32
function sum(array){ //Функция расчёта суммы элементов массива
    let sum = 0;
    for(let x of array){
        sum += x;
    }
    return sum;
}
console.log(sum(primes));

// Page 33
class Point{ // Класс ООП с методом расчёта расстояния между точками
    constructor(x, y){ // Функция конструктора, инициализация новых объектов
        this.x = x;
        this.y = y;
    }
    diastance(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

let p = new Point(1, 1); // Создание нового объекта класса Point
console.log(p.diastance()); // Вызов метода расчёта расстояния

// Page 35
/** Программа расчёта данных 
 * для гистограмм частоты применения символов  
 */

// Этот класс расширяет класс Map - 
// метод get() возвращает значение не null
// для заданного ключа, когда его нет в отображении
class MyMap extends Map{
    constructor(myValue){
        super(); // Вызов конструктор суперкласса Map
        this.myValue = myValue; // Задать значение
    }
    get(key){
        if (this.has(key)){ // Проверка наличия ключа в отображении
            return super.get(key); // Возврат значения из суперкласса Map
        } 
        else{
            return this.myValue; // Возврат собственного значения
        }
    }
}

// Класс создания и вывода гистограммы частоты использования букв
class Histogram{
    constructor(){
        this.letterCounts = new MyMap(0); // Создание отображения букв на счётчики
        this.totalLetters = 0; // Общее количество букв
    }
    // Функция обновления гистограммы буквами текста
    update(text){
        // Удалить из текста пробельные символы
        // и преобразовать оставшиеся в верхний регистр
        text = text.replace(/\s/g, '').toUpperCase();

        // Пройти по символам текста
        for(let character of text){
            // Получение старого счётчика и увеличение (инкрементирование) его
            this.letterCounts.set(character, this.letterCounts.get(character) + 1);
            this.totalLetters++;
        }
    }

    // Функция преобразование гистограммы в строку графики ASCII
    toString(){
        // Преобразовать записи Map в массив массивов [ключ, значение]
        let entries = [...this.letterCounts];
        // Сортировать по счётчику и по алфавиту
        entries.sort((a, b) => {
            if(a[i] === b[i]) { //Если счётчики равны, тогда
                return a[0] < b[0] ? -1 : 1; // сортировка по алфавиту
            } else {
                return b[1] - a[1]; // сортировка по наибольшему счётчику
            }
        });
        // Преобразовать счётчики в процентный эквивалент
        for(let entry of entries){
            entry[1] = entry[1] / this.totalLetters * 100;
        }

        // Отбросить все записи с процентным отношением менее 1%
        entries = entries.filter(entry => entry[1] >= 1);

        // Преобразовать каждую запись в строку текста
        let lines = entries.map(
            ([l,n]) => `${1}: ${"#".repeat(Math.round(n))} ${(n.toFixed(2))}%`
        );

        // Вернуть сцеплённые строки в форме новых строк 
        return lines.join("\n");  
    }

    // Асинхронная (возвращающая Promise - переводится "Обещание") функция создаёт объект гистограммы (Histogram),
    // читает асинхронным образом порции текста из стандартного ввода
    // и добавляет их к гистограмме.
    // Достигнув конца потока данных, 
    // функция возвращает итоговую гистограмму
    async function histogram() {
        process.stdin.setEncouding("utf-8"); // Читать строки в текстовом формате, а не в байтах
        for await (let chunk of process.stdin){
            histogram.add(chunk)
        }
        return histogram;
    }
}

// Главное тело программы
// Создаёт объект Histogram из стандартного ввода
// и выводит гистограмму
histogramFromStdin().then(histogram => {console.log(histogram.toString()); });
