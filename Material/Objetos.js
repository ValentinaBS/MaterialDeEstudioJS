const gato = {
    name: "Whiskers",
    legs: 4,
    tails: 1,
    enemies: ["Water", "Dogs"]
}; // Crear objeto
const nameValue = gato.name;
gato["enemies"]; // Maneras de acceder a propiedades
gato.tails = 2 //Actualiza propiedad
gato.miau = "meow"; // Añade nueva propiedad
delete gato.miau; // Elimina propiedad
gato.hasOwnProperty("color"); // Comprueba si tiene esa propidad, devuelve true/false

function phoneticLookup(val) {
    let result = "";
    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank",
    }
    result = lookup[val]
    return result; // Crear un objeto para buscar valores en vez de if/else o switch
}

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": ["8T", "LP"],
        "gold": true
    },
    {
        "artist": "Man",
        "title": "Great Man",
        "release_year": 1989,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    }
]; // Array con un objeto en su interior (estructura de datos flexible)
const secondFormat = myMusic[1].formats[1]; //Acceder a un arreglo anidado

const myStorage = {
    "car": {
    "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
    },
    "outside": {
        "trunk": "jack"
    }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // Acceder a objetos anidados

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

/* Ejercicio
Tu función siempre debe devolver el objeto de colección de registros completo.
Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
Si value es una cadena vacía, elimina esa propiedad prop del álbum. */

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop]
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
}
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // Anidación de bucles "for"

/* this se refiere al objeto con el que el método está asociado: dog. Si el nombre del objeto se cambia a cat, no es necesario encontrar todas 
las referencias a duck en el código. Hace que el código sea reutilizable y mas fácil de leer.*/
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

// La palabra clave class declara una nueva función, a la cual se añade un constructor. 
// Este constructor se invoca cuando new es llamado para crear un nuevo objeto.
// El método constructor es un método especial para crear e inicializar un objeto creado con una clase.

class Celular {
    constructor (color, peso, resPantalla, resCamara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDeCamara =  resCamara;
        this.resolucionDePantalla = resPantalla;
        this.MemoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido === false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
        }
    }
    reiniciar() {
        if (this.encendido === true) {
            alert("Reiniciando"); 
        } else {
            alert("Celular apagado");
        }
    }
    sacarFotos() {
        alert(`Foto tomada con una resolución de ${this.resolucionDeCamara}`);
    }
    grabar() {
        alert(`Grabando con una resolución de ${this.resolucionDeCamara}`);
    }
    get mostrarInfo() {
        return `
        Color:${this.color}
        Peso:${this.peso}
        Resolución de pantalla:${this.resolucionDePantalla}
        Resolución de cámara:${this.resolucionDeCamara}
        Memoria RAM:${this.ram}
        `;
    }
}
let celular1 = new Celular("rojo", "150g", "5 pulgadas", "full hd", "2GB")
// celular1 tiene todas las propiedades de Celular

celular1 instanceof Celular; // true
// Permite comparar un objeto con un constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor.

let ownProps = [];
for (let property in celular1) {
    if(celular1.hasOwnProperty(property)) {
    ownProps.push(property)
}
} // Mostrar propiedades directas en un array

Celular.prototype.numPantallas = 1;
// Todas las instancias de Celular tienen la propiedad numPantallas.
// Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades.
Bird.prototype = {
    constructor: Bird, // Para verificar cuál función de constructor creó la instancia. 
    numLegs: 2, 
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};
Bird.prototype = Object.create(Animal.prototype); 
let duck = new Bird("Donald"); // Establecer el prototipo prototype del subtipo
duck.eat();

// Para objetos no relacionados es mejor utilizar mixins. Un "mixin" permite a otros objetos utilizar una colección de funciones.
let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
};
flyMixin(bird);
flyMixin(plane);

// Agrupar mixins en un módulo con funciones inmediatamente invocadas
let motionModule = (function () {
    return {
        glideMixin: function(obj) {
        obj.glide = function() {
            console.log("Gliding on the water");
        };
        },
        flyMixin: function(obj) {
        obj.fly = function() {
            console.log("Flying, wooosh!");
        };
        }
    }
})();
motionModule.glideMixin(duck);
duck.glide();

// Crear propiedades privadas (closure)
function Bird() {
    let weight = 15;
    this.getWeight = function() {
        return weight
    }
}

// Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario 
// sin que el usuario acceda directamente a la variable privada.
// Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. 
// Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}