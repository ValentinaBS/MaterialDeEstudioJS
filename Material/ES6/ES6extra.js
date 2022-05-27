// Crear cadenas usando plantillas literales
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting); // Hello, my name is Zodiac Hasbro! I am 56 years old.

// Escribir declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
//          ↓
const getMousePosition2 = (x, y) => ({ x, y });

// Escribir funciones breves y declarativas dentro de objetos
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        this.gear = newGear;
    }
};
//          ↓
const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

// Crear una promesa de JavaScript. Cuando la tarea se completa, o cumples tu promesa o no la cumples.
const myPromise = new Promise((resolve, reject) => { // Estos métodos se utilizan para determinar el resultado de la promesa. resolve: éxito, reject: fallo

}); // En estado pending porque no hay una forma de completar la promesa.
// Una promesa tiene tres estados: pending, fulfilled, y rejected
const myPromise2 = new Promise((resolve, reject) => {
    if(resolve) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});

// Manejar una promesa cumplida usando then
makeServerRequest.then(result => {
    console.log(result)
});
// Manejar una promesa rechazada usando catch
makeServerRequest.catch(error => {
    console.log(error)
});