


arrayNombre=[];
arrayEdad=[];

let numPersonas=parseInt(prompt(`Ingrese el número de personas a jugar`));

for(let i=1;i<=numPersonas;i++){
        arrayNombre.push(prompt(`Ingrese el nombre de la persona ${i}`)) ;
        arrayEdad.push(prompt(`Ingrese la edad de la persona ${i}`)) ;
}

    console.log(arrayNombre)
    console.log(arrayEdad)

    edadMayor=Math.max(...arrayEdad)
    edadMenor=Math.min(...arrayEdad)
    console.log(`La edad Mayor es ${edadMayor}`)
    console.log(`La edad Menor es ${edadMenor}`)

    let posicionEdadMayor=arrayEdad.findIndex(function(position){
        return edadMayor==position;
    })

    let posicionEdadMenor=arrayEdad.findIndex(function(position){
        return edadMenor==position;
    })

    console.log(`${arrayNombre[posicionEdadMayor]} es el mayor con una edad de ${arrayEdad[posicionEdadMayor]} años`)
    console.log(`${arrayNombre[posicionEdadMenor]} es el menor con una edad de ${arrayEdad[posicionEdadMenor]} años`)

alert(`${arrayNombre[posicionEdadMayor]} es el mayor con una edad de ${arrayEdad[posicionEdadMayor]} años
${arrayNombre[posicionEdadMenor]} es el menor con una edad de ${arrayEdad[posicionEdadMenor]} años`)
