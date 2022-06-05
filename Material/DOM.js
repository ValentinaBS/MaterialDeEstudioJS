// Document Object Model
/* Nodo: Es cualquier etiqueta del cuerpo.
-Document: Nodo raíz del que derivan el resto de nodos.
-Element: Nodos definidos por etiquetas HTML.
-Text: El texto dentro de element se considera un nuevo nodo tipo text.
-Attribute: Los atributos de las etiquetas definen nodos.
-Comentarios y otros */

// Document - Métodos de Selección de Elementos
// getElementById(): Selecciona un elemento por ID.
let placeholder = document.getElementById("placeholder");

// getElementsByTagName(): Selecciona todos los elementos que coincidan con la etiqueta dada.
let placeholder2 = document.getElementsByTagName("p"); // Devuelve una lista de elementos, no un array.

// querySelector(): Devuelve el primer elemento que coincida con el grupo especificado de selectores.
let placeholder3 = document.querySelector(".placeholder3"); // Id
let placeholder4 = document.querySelector("#placeholder4"); // Class

// querySelectorAll(): Devuelve todos los elementos que coincida con el grupo especificado de selectores.
let placeholder5 = document.querySelectorAll("#placeholder5"); // Node List

// Métodos para Definir, Obtener y Eliminar valores de atributos.
// setAttribute(): Modifica el valor de un atributo.
// <input type="range" class="rangoEtario">
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type", "text") // Primer parámetro es lo que queremos modificar, el segundo es el nuevo atributo.

// getAttribute(): Obtiene el valor de un atributo.
let valorDelAtributo = rangoEtario.getAttribute("type")

// removeAttribute(): Remueve el valor de un atributo.
let removerAtributo = rangoEtario.removeAttribute("type") // Desaparece type

// Atributos globales en HTML: class - contenteditable (indica si el usuario puede modificarlo) - 
// dir (direccionalidad del texto) - hidden - id - style - tabindex - title
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", "true") // Se puede editar el contenido
titulo.setAttribute("dir", "rtl") // Right to left o Left to Right
titulo.setAttribute("hidden", "true") // Desaparece el contenido
titulo.setAttribute("tabindex", "0") // Genera un focus
titulo.setAttribute("title", "popup") // Al pasar el mouse, se crea un cartel

// Atributos de inputs: className - value - type - accept - form - minLength - placeholder - required
const input = document.querySelector(".inputs")
(input.value)
(input.type = "range")
(input.accept = "image/gif") // Tipos de archivo que acepta.
(input.form) // Ejecuta un input fuera del form
(input.minLength) = "4" // Si no tiene por lo menos 4 caracteres, no lo envia.
(input.placeholder) = "Texto de prueba"
(input.required) = "Campo obligatorio"

// Atributo style
titulo.style.backgroundColor = "red" // Propiedades en Camel Case

// Clases, classList
titulo.classList.add("grande") // Añade una clase.
titulo.classList.remove("grande") // Remueve una clase.
let valor = titulo.classList.item(0) // Devuelve la clase especificada.
let valor2 = titulo.classList.contains("grande") // Verifica si contiene esa clase.
titulo.classList.toggle("grande") // En caso de que no tenga esa clase, la agrega. Si la tiene, la remueve.
titulo.classList.toggle("grande", true) // Forzar que nunca la saque
titulo.classList.replace("grande", "chico") // Reemplaza una clase, devuelve true.

// Obtención y modificación de elementos
titulo.textContent // Devuelve el texto de cualquier nodo
titulo.innerText // Devuelve el texto visible de un node element
titulo.innerHTML // Devuelve el contenido HTML de un elemento
titulo.outerHTML // Devuelve el código HTML completo del elemento

// Creación de elementos
const contenedor = document.querySelector(".contenedor");
const itemLista = document.createElement("LI") // Todo en mayúscula, crea etiqueta <li>

itemLista.textContent = "Item de la lista" 
contenedor.appendChild(textoItem) // <li>Item de la lista</li>

// Optimizar recursos
const fragmento = document.createDocumentFragment();
for (i = 0; i < 20; i++) {
    const itemLista2 = document.createElement("LI")
    itemLista2.textContent = "Item de la lista" 
    fragmento.appendChild(itemLista2)
}
contenedor.appendChild(fragmento) // se repite las veces indicadas

// Obtención y modificación de childs
const primerHijo = contenedor.firstChild
const ultimoHijo = contenedor.lastChild // Cuentan los espacios como texto
//          ↓
contenedor.firstElementChild
contenedor.lastElementChild

const hijos = contenedor.childNodes // Cuenta espacios
hijos.forEach(hijo => console.log(hijo)) // No es un array, se puede recorrer con forEach.
const hijosSoloElementos = contenedor.children // No se puede recorrer con forEach, pero si un for of
for (hijo of hijos) {
    console.log(hijo)
}

// Métodos de childs
const parrafo = document.createElement("P").innerHTML = "Párrafo"
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Título"
const h2_antiguo = document.querySelector(".h2")

contenedor.replaceChild(h2_nuevo, h2_antiguo)
contenedor.removeChild(h2_antiguo)
let respuesta = contenedor.hasChildNodes(); // Pregunta si tiene hijos, true o false

// Propiedades de parents
h2_antiguo.parentElement
h2_antiguo.parentNode // Busca padres sean elementos o no

// Propiedades de siblings
h2_antiguo.nextSibling // Lo que le sigue
h2_antiguo.previousSibling // Anterior sibling
//          ↓
h2_antiguo.nextElementSibling // Solo identifica elementos
h2_antiguo.previousElementSibling

// Nodo closest
div.closest(".div") // Selecciona el elemento ascendente más cercano