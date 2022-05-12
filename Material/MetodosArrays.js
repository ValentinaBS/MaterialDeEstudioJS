let nombres = ["Luz", "Juan", "Mia"]

// ----- Transformadores ----- Modifica al array
// Array.pop() - Elimina el último elemento del array y lo devuelve.
let resultado = nombres.pop() // == "Mia" | nombres devuelve el array original sin "Mia". 

// Array.shift() - Elimina el primer elemento del array y lo devuelve.
let resultado2 = nombres.shift() // == "Luz" | nombres devuelve el array original sin "Luz".

// Array.push() - Agrega un elemento al array al final de la lista y devuelve la cantidad de elementos.
let resultado3 = nombres.push("Mario") // == 4 | nombres devuelve el array original con "Mario" al final. 

// Array.reverse() - Invierte el orden de los elementos del array.
let resultado4 = nombres.reverse() // == ["Mia", "Juan", "Luz"] | nombres devuelve el nuevo array, no es necesario agregarlo en una variable.

// Array.unshift() - Agrega elementos al inicio del array, y devuelve su nueva longitud.
let resultado5 = nombres.unshift("Mario") // == 4 | nombres devuelve el array con "Mario" al principio.

// Array.sort() - Ordena los elementos de un array localmente (orden alfabético/numérico) y lo devuelve ordenado.
let resultado6 = nombres.sort() // == ["Juan", "Luz", "Mia"] | nombres devuelve el nuevo array.

// Array.splice() - Cambia el contenido de un array eliminando elementos y/o agregando nuevos.
let resultado7 = nombres.splice(1, 1) // posición que comienza, cuantos se eliminan == ["Juan"] | nombres devuelve el array sin el elemento eliminado.
let resultado8 = nombres.splice(1, 1, "Mario") // == ["Juan"] | nombres devuelve ["Luz", "Mario", "Mia"], Mario reemplaza a Juan.

// ----- Accesores ----- Dejan al array intacto, se crea uno nuevo
// Array.join() - Une todos los elementos de una matriz en una cadena y la devuelve.
let resultado9 = nombres.join(" - ") // == "Luz - Juan - Mia"

// Array.slice() - Devuelve una parte del array dentro de un nuevo array de inicio a fin (no incluido)
let resultado10 = nombres.slice(0, 1) // == ["Luz"]
let resultado11 = nombres.slice(0, -1) // == ["Luz", "Juan"] (excluir el último elemento)

// Métodos como en cadenas: Array.toString() - indexOf() - lastIndexOf() - includes(). Seleciona elementos/palabras enteras, en vez de caracteres individuales como en las cadenas.

// ----- De Repetición -----
// Array.filter() - Crea un nuevo array con todos los elementos que cumplan la condición.
let resultado12 = nombres.filter(nombre => nombre.lenght > 3) // == ["Juan"] || No modifica el array original
// Array.forEach() - Ejecuta la función indicada una vez por cada elemento del array. No muta al array.
let resultado13 = nombres.forEach(nombre => console.log(nombre)) // == "Luz"