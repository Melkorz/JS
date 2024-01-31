//Вложенные массивы (объекты содержат объекты)
let points = [              //Массив с 2-мя элементами
    {x: 0, y: 0},
    {x: 1, y: 1}
];

console.log(points.length);
console.log(points);
console.log(points[0].x);
for(var i = 0; i < points.length; i++){
    console.log(points[i].x);
}

let data = {                    // Объект с двумя свойствами
    trial1: [[1, 2], [3, 4]],   // Значением каждого свойства является массив
    trial2: [[2, 3], [4, 5]]    // Элементы массива представляют собой массивы
};
console.log(data.trial1.length);
console.log(data);