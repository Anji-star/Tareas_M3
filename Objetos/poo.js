let edad  = "una edad"
let nacionalidad = "una nacionalidad"
//paso 1
class Persona {

    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }

    saludar(){
        console.log("Hola, mi nombre es", this.nombre, "tengo", this.edad, "años, soy", this.nacionalidad);
        
    }

    despedir(nombreAmigo){
        console.log("Hasta luego,", nombreAmigo);
        
    }
}

//paso 2
let persona1 = new Persona("Pedro", 23, "Mexicano")

console.log(persona1)
//paso3
persona1.saludar()
persona1.despedir("Fernando")

//Ejercicio 1
let persona2 = new Persona("Lucía", 30, "Canadiense")

//Ejercicio 2: Lucía se despide de Mario
persona2.despedir("Mario")

console.log("----------------------------------")
// Definición del objeto libro
const libro = {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    año: 1953,
    estado: "disponible",
    capitulos: [],

        describirLibro: function () {
            console.log("Libro titulado ",this.titulo, "escrito por" , this.autor , "en el año", this.año, "el estado es:",this.estado);
        },

        agregarCapitulo: function (nombreCapitulo) {
            this.capitulos.push(nombreCapitulo);
        console.log("Capítulo ", nombreCapitulo ," agregado al libro ", this.titulo);
    },

};

  libro.describirLibro(); // Muestra la descripción del libro
  libro.agregarCapitulo("Capítulo 1: Era estupendo quemar"); // Agrega un capítulo
  libro.agregarCapitulo("Capítulo 2: La criba y la arena"); // Agrega otro capítulo
  libro.agregarCapitulo("Capítulo 3: Fuego vivo"); // Agrega otro capítulo
  libro.describirLibro(); // Muestra la descripción actualizada
