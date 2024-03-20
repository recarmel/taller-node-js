/*
todo bien
*/

const getdata = (callback) =>{
setTimeout(()=>{
    var data = 'informacion viene de un api';
    //callback(null,data);
    callback(null,data);
    }, 2000);
}

const resultado = getdata();
console.log(resultado);

getdata((error, data)=>{
if (error) {
    console.log("se genero error", error);
} else {
    console.log("hubo exito", data);
}
})

