// El Spread Operator corresponde a un operador el cual distribuye los elementos de un arreglo u objeto, 
// para asignarlos a alguna variable/constante/función. Se pueden crear funciones que tomen un número variable de argumentos. 

// Spread para llamada de funciones
const nums = [9, 3, 2, 8];
Math.max(nums); // NaN

Math.max(...nums); //9

// Copiar un arreglo
var arr = [1, 2, 3];
var arr2 = [...arr]; // como arr.slice()
arr2.push(4);
// arr2 se vuelve [1, 2, 3, 4] - arr no es modificado

// Una forma mejor para concatenar arreglos
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

// La sintaxis de desestructuración es una expresión de JavaScript 
// que permite desempacar valores de arreglos, o propiedades de objetos en distintas variables.
const user = { name: 'John Doe', age: 34 };

const name1 = user.name;
const age1 = user.age;
//          ↓
const { name, age } = user; // Las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user.

// Asignar un nuevo nombre de variable al extraer valores
const { name: userName, age: userAge } = user; // El valor de userName sería la cadena John Doe, y el valor de userAge sería 34.

// Asignar variables desde objetos anidados
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// Asignar variables desde arreglos
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

// Desestructuración con el parámetro rest para reasignar elementos de un arreglo
const [uno, dos, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(uno, dos); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// Desestructuración para pasar un objeto como parámetro de función
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;