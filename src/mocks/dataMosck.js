export const productos = [


    {price: 11500,name: "Celulares",img: "/assets/celular.png", category: 'nuevo',description: "lalalalalalalal",stock:10,},
   
    

]



export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal')
      }

    },3000)

  })
