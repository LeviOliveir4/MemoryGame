const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form')
const nick = document.querySelector('.nick')

const validateInput = ({ target }) =>{
   if(target.value.length > 3){
    button.removeAttribute('disabled')    
    nick.style.color = "#00FF00"
}else{
    button.setAttribute('disabled','')
    nick.style.color ="#c20909"
   }
}

const handleSubmit = (event) =>{
    event.preventDefault();
    
    localStorage.setItem('player',input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input',validateInput)
form.addEventListener('submit',handleSubmit)