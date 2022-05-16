// ---- Métodos ----
// Math.sqrt() - Devuelve la raíz cuadrada positiva de un número.
let resultado1 = Math.sqrt(25) // == 5

// Math.cbrt() - Devuelve la raíz cúbica de un número.
let resultado2 = Math.cbrt(27) // == 3

// Math.max() - Devuelve el mayor de cero o más números.
let resultado3 = Math.max(2, 8, 7, 6, 102, 154, 12) // == 154

// Math.min() - Devuelve el menor de cero o más números.
let resultado4 = Math.min(2, 8, 7, 6, 102, 154, 12) // == 2

// Math.random() - Devuelve un número pseudo-aleatorio entre 0 y 1.
let resultado5 = Math.random() // == aleatorio entre 0 y 1

// Math.round() - Devuelve el valor de un número redondeado al número entero más cercano.
let numero1 = 10.5
let resultado6 = Math.round(numero1) // == 11
let resultado7 = Math.round(10.4) // == 10

// Math.fround() - Devuelve la representación flotante de precisión simple más cercana de un número.
let resultado8 = Math.fround(2.60) // == 2.5999999046325684

// Math.floor() - Devuelve el mayor entero menor que o igual a un número.
let numero2 = 19.9
let resultado9 = Math.floor(numero2) // == 19

// Math.trunc() - Devuelve la parte entera del número x, elimina dígitos fraccionarios.
let resultado10 = Math.trunc(9.9) // == 9
let resultado11 = Math.trunc(9.3) // == 9

// Math.abs() - Devuelve el valor absoluto de un número. Pasando un string no-numérico o una variable undefined/empty retorna NaN. Pasando null retorna 0.
let resultado12 = Math.abs(-1) // == 1

// ---- Funciones de FreeCodeCamp.org ----

function randomFraction() {
    return Math.random(); // Genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo).
}

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
} // Devuelve un número aleatorio entre 0 y 9

function randomRange(myMin, myMax) {
    return  Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} // Devuelve un número aleatorio de un rango establecido

function convertToInteger(str) {
    // parseInt(string, radix);
    return parseInt(str)
    // return parseInt(str, 2)
} // Convierte un string en un número entero, sino devuelve NaN

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
} // Operador condicional (ternario), puede utilizarse como una expresión if-else de una sola línea y devolver strings
function checkSign(num) {
    return (num > 0) ? "positive"
    : (num === 0) ? "zero"
    : "negative" 
} // Múltiples condiciones
function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}