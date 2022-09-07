const productos = [

  {   id:'01',
  name:'random1',
 category:'nuevos',
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
 price:75,
  img:'https://picsum.photos/200',
   stock:5,
  },
    {
        "price": 11500,
        "id"  : '01',
        "name": "Celulares",
        "img": "../assets/celular.png",
        "description": "lalalalalalalal",
    },
    {
        "price": 12000,
        "id"  : '02',
        "name": "Laptop",
        "img": "./assets/laptop.png",
        "description": "lalalalalalalal",
    },
    {
        "price": 10100,
        "id"  : '03',
        "name": "Licuadora",
        "img": "./assets/licuadora.png",
    },
    {
        "price": 10760,
        "id"  : '04',
        "name": "Mixer",
        "img": "./assets/mixer.png",
    },
    {
        "price": 12345,
        "id"  : '05',
        "name": "Mixer PRO",
        "img": "./assets/mixer.png",
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

    },10000)

  })
