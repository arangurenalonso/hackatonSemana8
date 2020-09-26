/**
 * Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
 * año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
 * años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
 * y represéntelo ,que permita determinar el bono que recibirá un trabajado
 */

let añoAntiguedad=parseInt(prompt(`Ingrese los años de antiguedad`));
let bono;

switch (añoAntiguedad){
    case 0: bono=100;
    break;
    case 1: bono=100;
    break;
    case 2: bono=200;
    break;
    case 3: bono=300;
    break;
    case 4: bono=400;
    break;
    case 4: bono=500;
    break;
    default: bono=1000;
}

alert(`El bono que te corresponde es ${bono} dolares`)
