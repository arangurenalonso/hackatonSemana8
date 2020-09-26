let arrayNotas=[];
let arrayAlumnos=[];
let aprobados=0;
let desaprobados=0;
let numAlumnos=parseInt(prompt(`Cuantos alumnos va a ingresar`))

for(i=1;i<=numAlumnos;i++){
    let nota;
    arrayAlumnos.push(prompt(`Ingrese el nombre del alumno ${i}`))
    do {
      nota=parseInt(prompt(`Ingrese la nota de ${arrayAlumnos[i-1]}`)) ;
        if(nota<0 || nota>20){
            alert(`ingrese una nota valida`)
        }else{
            if(nota>=13){
                aprobados++;
            }else{
                desaprobados++;
            }
        }
    } while (nota<0 || nota>20);
    arrayNotas.push(nota)
}
console.table(arrayNotas)
console.log(`La cantidad de aprobados es ${aprobados}`)
console.log(`La cantidad de reprobados es ${desaprobados}`)
alert(`La cantidad de aprobados es ${aprobados}
La cantidad de reprobados es ${desaprobados}`)
