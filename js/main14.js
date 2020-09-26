let focosTotales=parseInt(prompt(`Cuanto focos total hay?`))
let focosVerdes=0;
let focosBlancos=0;
let focosRojos=0;

for(i=1;i<=focosTotales;i++){
    let foco;
    do {
        foco=(parseInt(prompt(`Ingrese de que color es el foco ${i}
        1: Verde;
        2: Blanco;
        3: Rojo;`)))
        if(foco<=0 || foco>=4){
            alert(`ingrese una nota valida`)
        }else{
            switch(foco){
                case 1: focosVerdes++;
                break;
                case 2: focosBlancos++;
                break;
                default: focosRojos++;
            }
        }
    } while (foco<0 || foco>20);

    }
console.log(`La cantidad de focos según su color`)

console.log(`Focos Verdes: ${focosVerdes}`)
console.log(`Focos Blancos: ${focosBlancos}`)
console.log(`Focos Rojos: ${focosRojos}`)
alert(`
La cantidad de focos según su color:
Focos Verdes: ${focosVerdes}
Focos Blancos: ${focosBlancos}
Focos Rojos: ${focosRojos}
`)


