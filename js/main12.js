//Ejercicio Nº 12

let salario=parseInt(prompt(`ingrese su salario actual`));

const porcentajeIncrementoAnual=0.10;
/**
 * ¿Cuál es su salario al cabo de 6 años?
 * ¿Qué salario ha recibido en cada uno de los 6 años?
 */

let i=0;


for(i;i<=6;i++){
    let añoEnCurso;
    switch (i){
        case 0: añoEnCurso=`primer`;break;
        case 1: añoEnCurso=`segundo`;break;
        case 2: añoEnCurso=`tercer`;break;
        case 3: añoEnCurso=`cuarto`;break;
        case 4: añoEnCurso=`quinto`;break;
        case 5: añoEnCurso=`sexto`;break;
        default: añoEnCurso=`septimo en adelante`;
    }
    if(i==6){
        console.log(`Al cabo de los 6 años el nuevo sueldo del profesor es $${salario} de salario`);
        alert(`Al cabo de los 6 años el nuevo sueldo del profesor es $${salario} de salario`);
      
        break;
    }
    let mensaje=`Durante el ${añoEnCurso} año  el profesor recibio $${salario} de salario`
    console.log(mensaje)
    let montoIncrementado=salario*porcentajeIncrementoAnual;
    //Nuevo salario al finalizar el año
    salario=salario+montoIncrementado;
}









