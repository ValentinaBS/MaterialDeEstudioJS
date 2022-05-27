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

