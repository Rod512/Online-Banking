function loginMust(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user===null || user.isLoggedIn === false){
        window.location.href = 'login.html'
    }
}

function forDashboard(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.isLoggedIn === true){
        window.location.href = 'profile.html'
    }
}