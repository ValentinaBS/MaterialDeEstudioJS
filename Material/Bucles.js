const myArray = [];
let i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
} // Ejecuta una condición específica mientras esta sea verdadera, y se detiene una vez que esa condición ya no sea verdadera.

do {
    myArray.push(i);
    i++;
} while (i < 10) // Primero hace (do) una pasada por el código dentro del bucle sin importar qué, y luego continua ejecutando el bucle mientras (while) la condición especificada sea verdadera (true).

for (let i = 1; i < 6; i++) { // for (a -inicialización-; b -condición-; c -expresión final-)
    myArray.push(i);
}
for (let i = 10; i > 0; i -= 2) {
    myArray.push(i);
  } // Cuenta hacia atrás

let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
} // Itera a través de un arreglo con un bucle "for"

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    } 
} // Reemplazar bucles usando recursión