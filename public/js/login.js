const loginBtn = document.getElementById('loginBtn')
const newUserBtn = document.getElementById('newUserBtn')







// Redirect to registration
const directToRegister = (event) => {
    event.preventDefault()
     
    document.location.href = '/register'

}





newUserBtn.addEventListener('click', directToRegister)
