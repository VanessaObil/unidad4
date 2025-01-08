let formulario = document.getElementById("formulario");

document.getElementById("enviar").addEventListener("click", validar);
document.getElementById("enviar").addEventListener("click", validarNombre);
document.getElementById("enviar").addEventListener("click", validarEdad);
document.getElementById("enviar").addEventListener("click", validarNif);
document.getElementById("enviar").addEventListener("click", validarEmail);
document.getElementById("enviar").addEventListener("click", validarProvincia);
document.getElementById("enviar").addEventListener("click", validarFecha);
document.getElementById("enviar").addEventListener("click", validarTelefono);
document.getElementById("enviar").addEventListener("click", validarHora);

let errores = document.getElementById("errores");

function validar(e) {
    e.preventDefault();
    if (validarNombre() && validarEdad && validarNif && validarEmail && validarProvincia && validarFecha && validarTelefono && validarHora) {
        errores.innerHTML = "<p>Envio del formulario</p>";
        e.target.submit();
    } else {
        errores.innerHTML = "<p></p>";
    }
}
function validarHora(){
    let hora = formulario.elements[8].value;
    let nodo_hora = document.getElementById("ehora");
    let regex = /^\d{2}\:\d{2}$/;
    if(hora == "" || hora == 0){
        errores.innerHTML += "<p>El campo hora no puede estar vacio</p>";
        nodo_hora.setAttribute("class", "error");
    }else{
        if(!(regex.test(hora))){
            errores.innerHTML += "<p>La hora debe cumplir con el formato: hh:mm</p>";
            nodo_hora.setAttribute("class", "error");
        }else{
            nodo_hora.setAttribute("class", "");
        }
    }
}

function validarTelefono(){
    let telefono = formulario.elements[7].value;
    let nodo_tel = document.getElementById("etelefono");
    let regex = /^\d{9}$/;
    if(telefono == "" || telefono == 0){
        errores.innerHTML += "<p>El campo telefono no puede estar vacio</p>";
        nodo_tel.setAttribute("class", "error");
    }else{
        if(!(regex.test(telefono))){
            errores.innerHTML += "<p>El telefono debe tener 9 digitos</p>";
            nodo_tel.setAttribute("class", "error");
        }else{
            nodo_tel.setAttribute("class", "");
        }
    }
}

function validarFecha(){
    let fecha = formulario.elements[6].value;
    let nodo_fecha = document.getElementById("efecha");
    let regex1 = /^\d{2}\/\d{2}\/\d{4}$/;
    let regex2 = /^\d{2}\-\d{2}\-\d{4}$/;
    if(fecha == "" || fecha == 0){
        errores.innerHTML += "<p>El campo fecha no puede estar vacio</p>";
        nodo_fecha.setAttribute("class", "error");
    }else{
        if(!(regex1.test(fecha) || (regex2.test(fecha))) ){
            errores.innerHTML += "<p>La fecha debe cumplir con el formato dd/mm/aaa o dd-mm-aaaa</p>";
            nodo_fecha.setAttribute("class", "error");
        }else{
            nodo_fecha.setAttribute("class", "");
        }
    }
}

function validarProvincia(){
    let provincia = formulario.elements[5].value;
    let nodo_provincia = document.getElementById("eprovincia");
    if (provincia == null || provincia == "") {
        errores.innerHTML += "<p>Debes seleccionar una provincia</p>";
        nodo_provincia.setAttribute("class", "error");
    }else{
        nodo_provincia.setAttribute("class", "");
    }
    
}

function validarEmail(){
    let email  = formulario.elements[4].value;
    let nodo_email = document.getElementById("eemail");
    let regex =  /^[a-zA-Z0-9._%+-]+@g\.educaand\.es$/i;
    if(email == "" || email.length == 0){
        errores.innerHTML += "<p>El campo email no puede estar vacio</p>";
        nodo_email.setAttribute("class", "error");
    }else{
        if(!(regex.test(email))){
            errores.innerHTML += "<p>El email debe ser con @g.educaand.es</p>";
            nodo_email.setAttribute("class", "error");
        }else{
            nodo_email.setAttribute("class","");
        }
    }

}

function validarNif(){
    let nif = formulario.elements[3].value;
    let nodo_nif = document.getElementById("enif");
    let regex = /^\d{8}-[A-Z]$/i;
    if((nif == "" || nif.length == 0)){
        errores.innerHTML += "<p>El campo nif no puede estar vacio</p>";
        nodo_nif.setAttribute("class","error");
    }else{
        if(!(regex.test(nif))){
            errores.innerHTML += "<p>El campo  nif debe tener 8 digitos , un guion y una letra</p>";
            nodo_nif.setAttribute("class","error");
        }else{
            nodo_nif.setAttribute("class", "");
        }
    }
}

function validarEdad(){
    let edad = formulario.elements[2].value;
    let nodo_edad = document.getElementById("eedad");
    let regex = /\d$/;
    if(edad == "" || edad < 0){
        errores.innerHTML += "<p>El campo edad no puede estar vacio</p>";
        nodo_edad.setAttribute("class", "error");
    }else{
        
        if(!(regex.test(edad))){
            errores.innerHTML += "<p>El campo edad solo puede contener numeros</p>";
            nodo_edad.setAttribute("class","error");
        }else{
            nodo_edad.setAttribute("class","");
        }
    }
}

function validarNombre(){
    let nombre = formulario.elements[0].value;
    let nodo_nom = document.getElementById("enombre");
    let nodo_ape = document.getElementById("eapellido");
    if (nombre == "" || nombre.length == 0 ) {
        errores.innerHTML += "<p>El campo nombre no puede estar vacio</p>";
        nodo_nom.setAttribute("class","error");
    }else{
        let regex = /[A-Z]$/i;
        if(!(regex.test(nombre))){
            errores.innerHTML += "<p>El campo nombre solo puede contener letras</p>";
            nodo_nom.setAttribute("class","error");
        }else{
            nodo_nom.setAttribute("class","");
        }
    }

    let apellido = formulario.elements[1].value;
    if (apellido == "" || apellido.length == 0 ) {
        errores.innerHTML += "<p>El campo apellido no puede estar vacio</p>";
        nodo_ape.setAttribute("class","error");
    }else{
        let regex = /[A-Z]$/i;
        if(!(regex.test(apellido))){
            errores.innerHTML += "<p>El campo apellido solo puede contener letras</p>";
            nodo_ape.setAttribute("class","error");
        }else{
            nodo_ape.setAttribute("class","");
        }
    }
    
}


