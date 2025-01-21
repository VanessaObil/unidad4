let expiracion = "expires=31 Dec 2025, 23:59:59 GMT";
document.cookie = "Usuario=Vanessa,Edad=21,Curso=daw2"+";" +expiracion;
const valorCookie = document.cookie;

let d  = valorCookie.split(";");
let e = d[1].split(",");

console.log(d);
console.log(e);

function getCookie(datos){
   let dato = prompt("Escribe el valor que buscas: ");
   

}

document.getElementById('mostrarCookie').addEventListener('click', getCookie);