// Usar funciones flecha para escribir funciones anónimas de manera breve
const myFunc = function() {
    const myVar = "value";
    return myVar;
}
//          ↓
const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}
//          ↓
const myFunc3 = () => "value";

// Escribir funciones flecha con parámetros

// Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.
const doubler = item => item * 2;

// Es posible pasar más de un argumento a una función flecha.
const multiplier = (item, multi) => item * multi;

// Establecer parámetros por defecto, cuando el argumento no se especifica
const increment = (number, value = 1) => number + value; // value se vuelve 1 si no se introduce un número