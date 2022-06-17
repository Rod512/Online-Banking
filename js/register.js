const Registerbtn = document.getElementById('btn')
Registerbtn.addEventListener('click',function(event){
    event.preventDefault()

    let name = document.getElementById('name').value
    let number = document.getElementById('number').value
    let email = document.getElementById('registerEmail').value
    let password = document.getElementById('registerPassword').value

    let user = {
        name : name,
        number : number,
        email : email,
        password : password,
        isloggedIn : false,
        secrteKey : Math.random().toString(36).slice(2,7)
    }
    
    let bank = {
        deposite : 0,
        widthdraw : 0,
        total : 0
    }
    let statement = JSON.stringify(bank)
    localStorage.setItem('bank',statement)

    let data = JSON.stringify(user)
    localStorage.setItem("user",data)
    window.location.href = "login.html"
})