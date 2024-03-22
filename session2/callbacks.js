/*
todo bien
a nivel de codigo veo que esto no me funciono, no
me recuerdo el error del callback
@param {recibe dos parametros, error y data}
*/

const getData = (callback) =>{
setTimeout(()=>{
    const data = 'informacion viene de un api';
    //callback(null,data);
    //callback({error: 'no hay comunicación con el api'}, null);
    callback(null,data);
    }, 2000);
}



//const resultado = getdata();
//console.log(resultado);

getData((error, data)=>{
if (error) {
    console.log("se genero error", error);
} else {
    console.log("Respuesta Exitosa", data);
}
})

