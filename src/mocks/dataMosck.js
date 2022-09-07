const productos = [
    {
        "price": 11500,
        "id"  : '1',
        "name": "Celulares",
        "img": "../assets/celular.png",
        "description": "lalalalalalalal",
    },
    {
        "price": 12000,
        "id"  : '2',
        "name": "Laptop",
        "img": "./assets/laptop.png",
        "description": "lalalalalalalal",
    },
    {
        "price": 10100,
        "id"  : '3',
        "name": "Licuadora",
        "img": "./assets/licuadora.png",
    },
    {
        "price": 10760,
        "id"  : '4',
        "name": "Mixer",
        "img": "./assets/mixer.png",
    },
    {
        "price": 12345,
        "id"  : '5',
        "name": "Mixer PRO",
        "img": "./assets/mixer.png",
    }

];



export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal :( no hay sushi')
      }

    },3000)

  })
