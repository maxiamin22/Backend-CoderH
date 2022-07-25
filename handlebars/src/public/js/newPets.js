const petForm = document.getElementById("petForm");

petForm.addEventListener('submit',event=>{
    event.preventDefault();
    const formData = new FormData(petForm)
    console.log(formData)
    fetch('/api/pets',{
        method: 'POST',
        body:formData
    }).then(result=>result.json()).then(json=>console.log(json))
})