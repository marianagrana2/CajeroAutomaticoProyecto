const data =[
    {
      user: 'mariana',  
      pass: '1234',
      money: 150
    },
    {
        user: 'test',  
        pass: '0123',
        money: 150
    },
    {
        user: 'diana',  
        pass: '5678',
        money: 300
    },
    {
        user: 'marina',  
        pass: '9101',
        money: 280
    },
    {
        user: 'jimena',  
        pass: '2134',
        money: 500
      }
];


function mostrarError(tipo){
    let error = document.getElementById(`error${tipo}`) 
    error.classList.remove("hide") 
    error.classList.add("error") 
    setTimeout(() =>{ 
        error.classList.remove("error")
        error.classList.add("hide")
    }, 3000)
  }
const form = document.getElementById('form')


form.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    let usuario = document.getElementById('user').value
    let password = document.getElementById('password').value

    for(let index = 0; index < data.length; index++){
        if(data[index].user === usuario && data[index].pass === password){
            localStorage.setItem("usuario", data[index].user)
            localStorage.setItem("money",data[index].money)
            window.location.href = '/menu/menu.html'
            break
        }else if(data[index].user != usuario && data[index].pass === password){
            console.log("Usuario Incorrecto");
            mostrarError("Usuario"); 
        }else if(data[index].user === usuario && data[index].pass != password){
            console.log("Contraseña Incorrecto");
            mostrarError("Password"); 
        }else{
            console.log("Completa tus datos.")
        }   
    }
})







