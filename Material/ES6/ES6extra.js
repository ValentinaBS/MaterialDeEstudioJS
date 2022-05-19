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