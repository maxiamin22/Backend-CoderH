import {Router} from 'express';
import PetManager from '../managers/pets.js';


const router = Router('welcome');
const petService = new PetManager()
router.get('/',(req,res)=>{
    res.render('welcome',{})
})

router.get('/newPet',(req,res)=>{
    res.render('newPet')
})

router.get('/pets',async(req,res)=>{
    let pets = await petService.getAll()
    res.render('pets',{
        pets,
        hasPets:pets.length>0,
        name:"maxi"
    })
})
export default router;