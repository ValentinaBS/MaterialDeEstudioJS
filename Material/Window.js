// Objeto con la más alta jerarquia en JS
// open(): Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
let youtubeURL = "https://www.youtube.com/";
let ventana = window.open(youtubeURL);

// close(): Cierra la ventana actual, o la ventana en la que se llamó.
ventana.close();

// closed: Indica si la ventana referenciada está cerrada o no.
ventana.closed; // true o false

// stop(): Detiene la carga de recursos en el contexto de navegación actual.
window.stop();

// alert(): Muestra un cuadro de alerta con el contenido especificado y un botón Aceptar.
alert("Hello World");

// print(): Abre el cuadro de diálogo Imprimir, para imprimir el documento actual.
print();

// prompt(): Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (String).
prompt("Escribí un dato");

// confirm(): Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.
let respuesta = confirm("¿Estás seguro que deseas salir del sitio web?"); // true o false


// screen: Devuelve una referencia al objeto de pantalla asociado con la ventana.
window.screen; // Acceder a propiedades del screen.
screen.availHeight // Altura que puede tener window si está maximizada.
screen.height // Alto total de la pantalla.

// screenLeft: Devuelve la distancia horizontal entre el borde izquierdo del navegador y el de la pantalla.
const screenL = window.screenLeft;
// screenTop: Devuelve la distancia vertical entre el borde superior del navegador y el de la pantalla.
const screenT = window.screenTop; // No se pueden modificar

// scrollX: Devuelve el número de px que el documento desplaza horizontalmente.
const scrollX = window.scrollX;
// scrollY: Devuelve el número de px que el documento desplaza verticalmente.
const scrollY = window.scrollY;
// scroll(): Desplaza la ventana a un lugar particular en el documento.
window.scroll(0, 100); // posición absoluta en px

// resizeBy(): Cambia el tamaño de la ventana actual en una cantidad específica.
ventana.resizeBy(100, 200); // relativo
// resizeTo(): Redimensiona dinámicamente la ventana.
function quarter() {
    ventana.resizeTo(
        window.screen.availWidth / 2,
        window.screen.availHeight / 2
    );
  } // absoluto

// moveBy(): Mueve la ventana en una ubicación relativa.
ventana.moveBy(200,300);
// moveTo(): Mueve la ventana en una ubicación absoluta.
ventana.moveTo(200,300);


// Location
// href: Devuelve el href/URL de la página actual.
const href = window.location.href // devuelve protocol, hostname y pathname.
// hostname: Devuelve el nombre de dominio del servidor web.
window.location.hostname // sin el https, ej: "www.youtube.com"
// pathname: Devuelve la ruta y el nombre de archivo de la página actual.
window.location.pathname // lo que va después del dominio
// protocol: Devuelve el protocolo web utilizado (http: o https:)
window.location.protocol
// assign(): Carga un nuevo documento
window.location.assign()