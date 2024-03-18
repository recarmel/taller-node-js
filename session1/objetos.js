const objeto = {
    id: 123,
    nombre: 'Cesar',
    edad:20,
    listanumeros: [1,2,3,4,5]
}

//declarar variables obteniendo el objeto

const{nombre, listanumeros}= objeto;

console.log(objeto.nombre);

//estructura por otro tipo
//por posición
const [var1, var2]=listanumeros;

console.log(var1,var2);