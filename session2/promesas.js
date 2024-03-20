const apiMock= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (input == 1) {
                resolve({
                    status:200,
                    data: {
                        nombre:'Miguel',
                    edad: 30                    }
                })
            } else {
                reject({
                    status:400,
                    error:'Bad Request'
                })
                
            }
        },2000);
    })
}

apiMock(1).then((resultado)=>{
   console.log(resultado);
   return apiMock(2);
})
.catch((error)=>{
    console.log('error', error);
}

