const lista = [1,1,2,3,4,4,5,6,7,6];


/*var elemento2 = 0;
var indice = 0;
var lista2 = [];
for (let id = 0; id < lista.length; id++) {
    const element = lista[id];
    if (element == elemento2) {
        
    } else {
        lista2[indice]= element
        indice = indice+1;
        elemento2 = element;
    }
}*/

const listafiltrada = lista.filter((valor,indice)=>{
    if (lista.indexOf(valor)== indice)
    return valor;

});


console.log(listafiltrada);