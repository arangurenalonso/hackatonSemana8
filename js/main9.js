let fechaNacimiento=parseInt(prompt(`Ingrese el año de nacimiento`));

const fecha=new Date();
let añoActual=fecha.getFullYear()

let edadPostulante=añoActual-fechaNacimiento

alert(`El postulante tiene: ${edadPostulante} años`)
