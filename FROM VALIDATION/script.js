const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    
    if (password.value.length <=6) {
        messages.push('Password must be longer than 6 characers')
    }

    if (password.value.length >=20) {
        messages.push('Password must be less than 20 characers')
    }

    if (password.value.length === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault ()  
        errorElement.innerText = messages.join(',')
    }
})