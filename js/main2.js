let arrayNotas=[]

for(i=1;i<=4;i++){
    let nota;
    do {
      nota=parseInt(prompt(`Ingrese la nota ${i}`)) ;
        if(nota<0 || nota>20){
            alert(`ingrese una nota valida`)
        }
    } while (nota<0 || nota>20);
    arrayNotas.push(nota)
}
console.log(arrayNotas)

let suma=0;

arrayNotas.forEach(function(element){
    suma+=element;
}
)

let prom=suma/arrayNotas.length
alert(`El promedio de las 4 notas es ${prom}`)