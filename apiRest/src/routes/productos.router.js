import { Router } from "express";
import Manager from "../Manager/contenedor.js"
const manager  = new Manager();
const router = Router();

///GET '/api/productos' -> devuelve todos los productos.

router.get('/',async(req,res)=>{
    let obtenerTodo = await manager.getAll()
    res.send(obtenerTodo);
})

//GET '/api/productos/:id' -> devuelve un producto según su id.

router.get('/:id',async(req,res)=>{
    let Lista = await manager.getAll()
    if (req.params.id >Lista.length) {
        res.send("404 El valor pedido no existe")
    } else {
        let numero = req.params.id
        let obtenerId = await manager.getById(numero)
        res.send(obtenerId)
    }

})

//POST '/api/productos' -> recibe y agrega un producto.

router.post('/:id',async(req,res)=>{
    let producto = req.body
    res.send({status:"succes", message:"Product Added"})
    await manager.save(producto)
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

router.put('/:id',async(req,res)=>{
    let producto = req.params
   await manager.actualizar(producto)
})


//DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    productos.eliminar(id);
    return res.json({ estado: 'BORRADO' });
})




export default router;