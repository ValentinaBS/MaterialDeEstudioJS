let cadena1 = "abc def ghi ghi"
let cadena2 = "123"

// String.concat() - Junta dos o más cadenas y returna una nueva
cadena2.concat("456") // == 123456

// String.startsWith() - Si una cadena empieza con los caracteres de otra, devuelve true. Sino, false.
cadena1.startsWith(cadena2) // == false
cadena1.startsWith("a") // == true

// String.endsWith() - Si una cadena termina con los caracteres de otra, devuelve true. Sino, false.
cadena1.endsWith(cadena2) // == false
cadena1.endsWith("i") // == true

// String.includes() - Si una cadena se encuentra dentro de otra, devuelve true. Sino, false.
cadena1.includes(cadena2) // == false
cadena1.includes("de") // == true

// String.indexOf() - Devuelve el índice del primer caracter de la cadena, si no existe, devuelve -1.
cadena1.indexOf("def") // == 5
cadena1.indexOf("hola") // == -1

// String.lastIndexOf() - Devuelve el índice del último caracter de la cadena, si no existe, devuelve -1.
cadena1.lastIndexOf("ghi") // == 13 | toma la inicial del segundo ghi
cadena1.lastIndexOf("hola") // == -1


// String.padStart() - Rellenar cadena al principio, con los caracteres deseados.
cadena2.padStart(10, "56") // == 5656565123

// String.padEnd() - Rellenar cadena al final, con los caracteres deseados.
cadena2.padEnd(5, "a") // == 123aa

// String.repeat() - Devuelve la misma cadena, pero repetida la cantidad que le indiquemos.
cadena2.repeat(3) // == 123123123


let cadena3 = "Banana Manzana Berenjena"
// String.split() - Divide la cadena como le pidamos.
cadena3.split(" ") // == [Banana, Manzana, Berenjena] 
cadena3.split("Manzana") // == [Banana, Berenjena] 

// String.slice() - Extrae una sección de una cadena y devuelve una cadena nueva.
let removerPrimerCaract = cadena3.slice(1) // == "anana Manzana Berenjena" | cadena3 no se modifica.
let removerUltimoCaract = cadena3.slice(0, cadena3.length - 1) // == "Banana Manzana Berenjen" | cadena3 no se modifica.
let removerAmbos = cadena3.slice(1, -1) // == "anana Manzana Berenjen" | cadena3 no se modifica.

// String.substring() - Nos devuelve un pedazo de la cadena que seleccionamos.
cadena3.substring(0, 5) // == Banan | Primer parámetro es donde empieza(está incluido), el segundo es donde termina(no está incluido)

// String.toLowerCase() - Convierte una cadena a minúscula.
cadena3.toLowerCase() // == banana manzana berenjena

// String.toUpperCase() - Convierte una cadena a mayúscula.
cadena3.UpperCase() // == BANANA MANZANA BERENJENA

// String.toString() - Devuelve una cadena que representa al objeto especificado.
cadena2.toString() // == "123"

// String.trim() - Elimina los espacios en blanco al principio y al final de una cadena.
let cadena4 = "   Hola   "
cadena4.trim() // == "Hola"

// String.trimEnd() - Elimina los espacios en blanco al final de una cadena.
cadena4.trimEnd() // == "   Hola"

// String.trimStart() - Elimina los espacios en blanco al principio de una cadena.
cadena4.trimStart() // == "Hola   "

// String.valueOf() - Retorna el valor primitivo de un objeto string.
