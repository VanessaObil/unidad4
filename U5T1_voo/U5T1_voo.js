let expiracion = "expires=31 Dec 2025, 23:59:59 GMT";
document.cookie = "Usuario=Vanessa,Edad=21,Curso=daw2"+";"+expiracion;
const valorCookie = document.cookie;

let d  = valorCookie.split(",");

console.log(d);

function getCookie(datos){
    if (valorCookie.length >0) {
        console.log("El valor de la cookie es: "+ valorCookie);
        /*alert(sessionStorage.getItem("Contador"));
        alert(localStorage.getItem("Contador"));*/
    } else {
        console.log( 'No se encontró la cookie "dato".');
    }

}

document.getElementById('mostrarCookie').addEventListener('click', getCookie);