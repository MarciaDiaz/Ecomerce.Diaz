export const customFetch = (products) => {

    return new Promise ((resolve, reject) =>{

        setTimeout (() =>{
            resolve (products)
        }, 2000)
    })
}