

class Nombre{
    constructor(nombre,apellido){;
        this.nombre= nombre;
        this.apellido= apellido;
        this.libro= {};
        this.mascotas= [];  


    }
        
    getFullName= ()=>{
        return console.log(`su nombre completo es ${this.nombre} ${this.apellido}`)
    }

    addMascota = (pet)=>{
        this.mascotas.push(pet)
        console.log(`mi mascota es un ${pet}`)
    }
    countMascotas= ()=>{
        this.mascotas.length
        console.log(`la cantidad de mascotas es ${this.mascotas.length}`)
    }
    addBooks=(name , autor)=>{
       console.log(`libro:${name} autor: ${autor}  `)
        
    
        } 
     getBooksName=(name, autor)=> {
            console.log(`${name} ${autor}`)
    }    

   
   
           
        
        }
        
        
    





let nombre1 = new Nombre ("maximiliano" , "amin");
nombre1.getFullName()
nombre1.addMascota("perro")
nombre1.addMascota("gato")
nombre1.countMascotas()
nombre1.addBooks(name="el secreto de sus ojos",autor="darin")
nombre1.getBooksName(name="el secreto de sus ojos",autor="darin")
