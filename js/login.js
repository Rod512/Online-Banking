function auth(email,password){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user.email === email && user.password === password){
        localStorage.removeItem('user')
        let restore ={
            ...user,
            isloggedIn: true
        }
        localStorage.setItem('user',JSON.stringify(restore))
        return true
    }else{
        false
    }

}
const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener("click",function(event){
    event.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById("password").value

    let islogin = auth(email,password)

    if (islogin === true){
        window.location.href = 'profile.html'
    }else{
        let massage = document.querySelector(".massage")
        massage.innerHTML = "login faild! please inter correct email & password"
    }

})