// Selecciona todo el formulario
let formulario = document.getElementById("formulario");
// Eventos en el boton enviar
document.getElementById("enviar").addEventListener("click", validar);
document.getElementById("enviar").addEventListener("click", validarNombre);
document.getElementById("enviar").addEventListener("click", validarDni);
document.getElementById("enviar").addEventListener("click", validarSelect);
document.getElementById("enviar").addEventListener("click", validarContraseña);

// Selecciona el div en donde iran los errores
let errores = document.getElementById("errores");

// Valida si todo el formulario esta correcto
function validar(e) {
    e.preventDefault();
    if (validarNombre() && validarDni() && validarContraseña() && validarSelect) {
        errores.innerHTML = "<p>Envio del formulario</p>";
        e.target.submit();
    } else {
        errores.innerHTML = "<p>Hay datos erroneos</p>";
    }
}

// Valida si el nombre esta vacio o si contiene algo diferente a letras
function validarNombre() {
    let nombre = formulario.elements[0].value;
    if (nombre == "" || nombre.length == 0 ) {
        errores.innerHTML += "<p>El campo no puede estar vacio</p>";
       
    }else{
        if(!(/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre))){
            errores.innerHTML += "<p>El campo nombre solo puede contener letras</p>";
             return false;
        }
    }
    return true;
}

// Valida si el dni cumple con los requisitos
function validarDni() {
    let dni = formulario.elements[1].value;
    if (dni == "" || dni == 0) {
        errores.innerHTML += "<p>El campo no puede estar vacio</p>";
    } else {
        if (!(/^\d{2}\.\d{3}\.\d{3}-[A-Z]$/.test(dni))) {
            errores.innerHTML += "<p>El forrmato no es correcto</p>";
            return false;
        }
    }
    return true;
}

// Verifica que se haya seleccionado una opcion del select
function validarSelect() {
    let vacuna = formulario.elements[2].value;
    if (vacuna == null || vacuna == "") {
        errores.innerHTML += "<p>Debes seleccionar una opcion</p>";
        return false;
    }
    return true;
}

// Valida si la contraseña cumple con los requisitos
function validarContraseña() {
    let pass = formulario.elements[3].value;
    if (pass == "" || pass.length == 0) {
        errores.innerHTML += "<p>El campo no puede estar vacio</p>";
    } else {
        if (!(/^[A-Z]{2}[^a-zA-Z0-9:]*[a-zA-Z0-9]{8,}#.*\d{2,}$/.test(pass))) {
            errores.innerHTML += "<p>Introduce la contraseña de nuevo</p>";
            return false;
        }
        return true;
    }
}