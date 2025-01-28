let tabla = document.getElementById("cuerpoTabla");

fetch("https://api.escuelajs.co/api/v1/products")
    .then(function (response) {
        if (!response.ok) {  // Verifica si la respuesta es exitosa
            throw new Error("Error en la solicitud");
        }
        return console.log(response.json());  // Convierte la respuesta a formato JSON
    }).then(function (data) { 
        //tabla.innerHTML = "";
        for (let index = 0; index < data; index++) {

            let producto = array[index];
            let fila = document.createElement("tr");

            let idprod = document.createElement("td");
            idprod.textContent = producto.id;

            let titulo = document.createElement("td");
            titulo.textContent = producto.tilte;

            let desc = document.createElement("td");
            titulo.textContent = producto.description;

            fila.append(idprod);
            fila.append(titulo);
            tabla.append(fila);

        }




    })