const listaEnteros = [1, 2, 3, 4, 5, 6];

//agregando filtros
const listafiltrada = listaEnteros.filter((valor) => {
  var residuo = valor % 2;
  if (residuo == 0) {
    return true;
  }
  return false;
});

console.log(listafiltrada);
