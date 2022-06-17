let change_pass = document.getElementById("change_pass_btn")
change_pass.addEventListener('click',function(event){
    event.preventDefault()
    let user = JSON.parse(localStorage.getItem('user'))
    let currentPass = document.getElementById('current_password').value
    let newPass = document.getElementById('new_password').value

    if(user.password === currentPass){
        localStorage.removeItem('user')
        let restore ={
            ...user,
            isloggedIn: true
        }
        restore.password = newPass
        localStorage.setItem('user',JSON.stringify(restore))
    }else{
        let massage = document.getElementById('massage')
        massage.innerHTML = "Current pasword not valid! Please type again"
    }


})