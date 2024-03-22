const apiMock= (input)=>{
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
 //  return apiMock(2);
})
.catch((error)=>{
    console.log('error', error);
})

const main = async() =>{
   try {
    const resultado = await apiMock(1);
    console.log(resultado);
   } catch (error) {
    console.error('Error',error);
   }

   // const resultado = await apiMock(1);
   // console.log(resultado);
}

main();