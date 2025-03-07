const listaLibros = document.getElementById("lista")

buscador.addEventListener("input",()=>{
    const buscador = document.getElementById("buscador")
    let itemsLibros = listaLibros.getElementsByTagName("li")
    let texto = buscador.value.toLowerCase()

    console.log(itemsLibros);
    console.log(texto);
    
    for(let i = 0; i < itemsLibros.length; i++){
        let textoLibro = itemsLibros[i].textContent.toLowerCase()
        if(textoLibro.includes(texto)){

            itemsLibros[i].style.display = "block" 
        }else{
            itemsLibros[i].style.display = "none" 
        }
        
    }

})