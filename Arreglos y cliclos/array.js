let frutas = ["manzana", "pera", "naranja", "plátano", "naranja", "pera", "manzana", "uva"];
console.log("Lista de frutas:", frutas);

console.log("Primera fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("-------------------------------------");
console.log("Fruta en la posición 100:", frutas[100]); 
console.log("Fruta en la posición -1:", frutas[-1]); 
console.log("-------------------------------------");
console.log("Última fruta:", frutas[7]);
console.log("Última fruta usando la propiedad length:", frutas[frutas.length - 1]);
console.log("-------------------------------------");
frutas[4] = "kiwi"
console.log("Frutas actualizadas:", frutas);
console.log("-------------------------------------");
console.log("Tarea")
let conteoFrutas = {};

for (let conteo = 0; conteo < frutas.length; conteo++) {
    let fruta = frutas[conteo];
    if (conteoFrutas[fruta]) {
    conteoFrutas[fruta]++;
    } else {
    conteoFrutas[fruta] = 1;
    }
    }
    for (let fruta in conteoFrutas) {
    console.log(`Hay: ${conteoFrutas[fruta]} ${fruta}`); // `${}`valor dinámico en la cadena para multilinea
    }

