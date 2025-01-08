let cadena = "12345678-k";

let regex = /^\d{8}-[A-Z]$/i;

console.log(regex.test(cadena));

//console.log(cadena.search(regex));
//console.log(cadena.match(regex));