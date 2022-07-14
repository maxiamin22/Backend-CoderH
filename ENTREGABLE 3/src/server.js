import ProductsManager from "./containers/productsManager.js"
import express from 'express'

const app = express()
const PORT = 8080;


const productService = new ProductsManager()
const getProducts = productService.getAllProducts()

const server = app.listen(PORT, () =>{
    console.log('I am listen from port')
})

app.get('/productosRandom', (req, res) =>{
    res.send('random')
})

app.get('/productos', async (req, res) =>{
    let result = await getProducts
    res.send(result)
})