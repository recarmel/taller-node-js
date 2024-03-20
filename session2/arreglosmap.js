const listaEnteros =[1,2,3,4,5,6];

//agregando filtros
const ListaalCuadrado = listaEnteros.map((valor)=>{
    var valorCuadrado = valor * valor;
  
  return valorCuadrado;
});

console.log(ListaalCuadrado);