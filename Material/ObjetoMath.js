// ---- Métodos ----




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