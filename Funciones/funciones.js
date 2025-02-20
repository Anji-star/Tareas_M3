//paso 1
function saludar() {
    console.log("Hola mundo!");   
}
//Paso 2
saludar()
saludar()
saludar()
//paso 3
function saludarPersona(nombre) {
    console.log("Hola ", nombre, "!");
}

saludarPersona("Pepe")
saludarPersona("lulu")
saludarPersona("tete")

console.log("Ejecuto saludar()", saludar());
console.log("Ejecuto saludarPersona()",saludarPersona("lulu"));

//return
function suma(num1, num2) {
    return num1 + num2
}

console.log(suma(1,2));
console.log(suma(4,10));
console.log(suma(7,3));
console.log(suma("Hola"," a todos"));

function resta(num1, num2) {
    let resta = num1 - num2
    return resta
}

console.log(resta(10,5));
let resultado = resta(4,9)//Guardamos el resultado en una variable
console.log(resultado);

//Podemos anidar funciones para controlar el alcance de una función (nested functions)
function saludoMayuscula(nombre) {
    function mayuscula(string) {
        return string.toUpperCase()
    }
    return mayuscula(nombre)
}

console.log(saludoMayuscula("Pepe"));
//console.log(mayuscula("Hola")); //Devuelve error porque mayusculas sólo vive dentro de saludoMayuscula

console.log("-------------------------------------");
console.log("Tarea")

const librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro ", titulo, "agregado a la lista");
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros que has leído:");
    
        
        for (let i = 0; i < librosLeidos.length; i++) {
        console.log("Leido", librosLeidos[i]);
        }
    }
}


agregarLibro("El Principito");
agregarLibro("Cien años de soledad");
mostrarLibrosLeidos();