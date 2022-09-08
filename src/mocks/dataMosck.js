const productos = [

  {   "price": 11500,
  "id"  : '00',
  "name": "Otra Cosa",
  "img":"https://picsum.photos/200",
  "description": "lalalalalalalal",
  "stock":10,
  },
    {
        "price": 11500,
        "id"  : '01',
        "name": "Celulares",
        "img": "/assets/celular.png",
        "description": "lalalalalalalal",
        "stock":10,
    },
    {
        "price": 12000,
        "id"  : '02',
        "name": "Laptop",
        "img": "/assets/laptop.png",
        "description": "lalalalalalalal",
        "stock":10,
    },
    {
        "price": 10100,
        "id"  : '03',
        "name": "Licuadora",
        "img": "/assets/licuadora.png",
        "stock":10,
    },
    {
        "price": 10760,
        "id"  : '04',
        "name": "Mixer",
        "img": "/assets/mixer.png",
        "stock":10,
    },
    {
        "price": 12345,
        "id"  : '05',
        "name": "Mixer PRO",
        "img": "/assets/mixer.png",
        "stock":10,
    }

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

    },5000)

  })
