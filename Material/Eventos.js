// Cualquier cambio que suceda es un evento.
// Más eventos: https://www.w3schools.com/jsref/obj_events.asp
// <button onclick="alert('saludo')">Apretame</button> HTML
//          ↓
const button = document.querySelector(".button");
button.onclick = ()=>{
    alert("hola")
} // No es recomendable
//          ↓
button.addEventListener("click", saludar);
function saludar(){ // No aplican funciones flecha en este caso.
    alert("hola")
}
//          ↓
button.addEventListener("click", ()=> {
    alert("hola")
})

function saludar() {
    alert("hola")
    button.removeEventListener("click", saludar)
} // Remueve el evento, solo se ejecuta una vez

// Objeto Event
button.addEventListener("click", (e)=>{
    console.log(e.target)
})


// Event Flow (Bubbling -por defecto- o Capturing)
// Bubbling: Se ejecutan del más específico (hijos) a los menos específicos (contenedores).
// Capturing
contenedor.addEventListener("click", (e)=>{
    alert("Di click en el contenedor")
}, true) // Le da prioridad

// Parar la propagación de elementos que se superponen
button.addEventListener("click", (e)=>{
    alert("Di click en un botón")
    e.stopPropagation()
})


// Eventos del Mouse
// click: Ocurre con un click.

// dblclick: Ocurre con un doble click.
button.addEventListener("dblclick", (e)=>{
    alert("Di click en un botón")
}) // Dos clicks seguidos, menos de 500ms

// mouseover: Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
button.addEventListener("mouseover", (e)=>{
    alert("Pasaste por encima")
})

// mouseout: Ocurre cuando se mueve el puntero fuera de un elemento o sus elementos secundarios.
button.addEventListener("mouseout", (e)=>{
    alert("Saliste del botón")
})

// contextmenu: Ocurre con un click en el botón derecho en un elemento para abrir un menú contextual.
button.addEventListener("contextmenu", (e)=>{
    alert("Abriste el menú en el botón")
})

// mouseenter: Ocurre cuando el puntero se mueve sobre un elemento.
button.addEventListener("mouseenter", (e)=>{
    alert("Pasaste por encima")
}) // Para Internet Explorer, sino mouseover

// mousemove: Ocurre cuando el puntero se mueve mientras está sobre un elemento.
button.addEventListener("mousemove", (e)=>{
    alert("Estás en el botón")
}) // No burbujea

// mouseleave: Ocurre cuando el puntero se mueve fuera de un elemento.
button.addEventListener("mouseleave", (e)=>{
    alert("Saliste del botón")
}) // Este se ejecuta todo el tiempo mientras se mueva el mouse dentro del elemento, a diferencia de mouseover

//mousedown: Ocurre cuando el usuario apreta un botón del mouse sobre un elemento.
button.addEventListener("mousedown", (e)=>{
    alert("Apretaste el mouse")
})
// mouseup: Ocurre cuando el usuario suelta un botón del mouse sobre un elemento.
button.addEventListener("mouseup", (e)=>{
    alert("Soltaste el mouse")
})

// Eventos del teclado
// keydown: Ocurre cuando una tecla se presiona.
input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada")
})
// keypress: Ocurre cuando una tecla se presiona.
input.addEventListener("keypress",(e)=>{
    console.log("Presionó")
}) // No se recomienda
// keyup: Ocurre después de que la tecla sea presionada y soltada, dentro del elemento.
input.addEventListener("keyup",(e)=>{
    console.log("Tecla fue soltada, después de haber sido presionada")
})
input.addEventListener("keyup", (e)=>{
    let tecla = e.key;
    let nuevoContenido = `La última tecla presionada fue: ${tecla}`;
    contenedor.innerHTML = nuevoContenido
})


// Eventos de la interfaz
// error: Ocurre cuando sucede un error durante la carga de un archivo multimedia.
const img = document.querySelector(".img")
img.addEventListener("error", ()=>{
    console.log("Ha sucedido un error")
})
// load: Ocurre cuando un objeto se cargó.
window.addEventListener("load", ()=>{ // El window no es necesario aclararlo
    console.log("Ha cargado el sitio")
})
// beforeunload: Ocurre antes de que el documento esté a punto de descargarse, antes de irse del sitio.
addEventListener("beforeunload", ()=>{
    console.log("Te estás por ir del sitio")
})
// unload: Ocurre una vez que se ha descargado la página, cuando te vas del sitio.
addEventListener("unload", ()=>{
    console.log("Te fuiste del sitio")
})
// resize: Ocurre cuando se cambia el tamaño de la vista del documento.
addEventListener("resize", ()=>{
    console.log("Cambiaste la resolución")
})
// scroll: Ocurre cuando se desplaza la barra de desplazamiento de un elemento.
addEventListener("scroll", ()=>{
    console.log("Se scrolleó")
})
// select: Ocurre después de que el usuario selecciona algún texto de <input> o <textarea>.
input.addEventListener("select", ()=>{
    console.log("Se seleccionó")
})
input.addEventListener("select", (e)=>{
    console.log(e.target.selectionStart) // En qué index empezó la selección
})
input.addEventListener("select", (e)=>{
    console.log(e.target.selectionEnd) // En qué index terminó la selección
})
input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.textContent = textoCompleto.substring(start, end);
}) // Mostrar lo que está seleccionado


// Timers
const temporizador = setTimeout(()=>{
    document.write("hola")
},2000) // 2seg, una sola vez

const saludar = ()=>{
    document.write("hola")
} 
setTimeout(saludar,2000); // Con función con nombre

clearTimeout(temporizador) // Jamás se va a ejecutar

// Ejecuta una función constantemente
const intervalo = setInterval(()=>{
    document.write("hola")
},2000)
clearInterval(intervalo)

setTimeout(()=>{
    clearInterval(intervalo)
}, 5000) // Se ejecuta dos veces y para a los 5 seg. 
