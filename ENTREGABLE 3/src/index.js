
import ProductsManager from "./containers/productsManager.js"

// Importar la clase, NO SIGINIFICA INSTANCIARLA

const productService = new ProductsManager()

const enviroment = async() =>{
    console.log('producto agregado')
    let pets = await productService.getAllProducts()
    console.log(pets)
    
    
   
    let producto = {
        name: 'papel',
        precio: "25"
    }
    
   

    
   
   

    await productService.addPet(producto)
    //await productService.getById(id)
    //await productService.deleteById(deleteById)

    //await productService.deleteAll()
}

enviroment()
