let formulario = document.getElementById("formulario");
document.getElementById("enviar").addEventListener("click", validar);
document.getElementById("enviar").addEventListener("click", validarNombre);
document.getElementById("enviar").addEventListener("click", validarDni);
document.getElementById("enviar").addEventListener("click", validarSelect);


function validar(e){
    e.preventDefault();
    if(validarNombre() && validarDni() && validarContraseña() && validarSelect){
        alert("Envio de formulario");
        
    }else{
        alert("Hay datos erroneos");
    }
}

function validarNombre() {
    let nombre = formulario.elements[0].value;
    if (nombre == "" || nombre.length == 0) {
        alert("El campo no puede estar vacio");
        return false;
    }
    return true;
}

function validarDni() {
    let dni = formulario.elements[1].value;
    if (dni == "" || dni == 0) {
        alert("El campo no puede estar vacio");
    } else {
        if (!(/^\d{2}.\d{3}.\d{3}$/.test(dni))) {
            alert("El formato no es correcto");
            return false;
        }
    }
    return true;
}

function validarSelect(){
    let vacuna = formulario.elements[2].value;
    if (vacuna == null || vacuna == "") {
        alert("Debes seleccionar una opcion");
        return false;
    } 
    return true;
}

function validarContraseña(){
    let pass = formulario.elements[3].value;
    if(pass == "" || pass.length == 0){
        alert("El campo no puede estar vacio");
        
    }if(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])\S{6,}$/){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    return true;
}

