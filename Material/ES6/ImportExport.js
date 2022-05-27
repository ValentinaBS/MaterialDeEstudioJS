// Un script que utilice este module ahora podrá utilizar las caraterísticas import y export:
// Código para HTML: <script type="module" src="filename.js"></script>

// Cuando exportas una variable o función, puedes importarla en otro archivo y usarla sin tener que volver a escribir el código. 
export { add, subtract };

// import te permite elegir qué partes de un archivo o módulo cargar.
import { add, subtract } from './math_functions.js';

// Usar * para importar todo de un archivo
import * as myMathModule from "./math_functions.js";
// Crea un objeto llamado myMathModule que contiene todas las exportaciones de math_functions.js
myMathModule.add(2,3);
myMathModule.subtract(5,3);

// Crear un fallback de exportación con export default
export default function add(x, y) {
    return x + y;
}

// Importa una exportación por defecto
import add from "./math_functions.js";
// El valor importado, add, no está rodeado por llaves ({}). 
// add es simplemente un nombre de variable, para cualquiera que sea la exportación por defecto del archivo math_functions.js

