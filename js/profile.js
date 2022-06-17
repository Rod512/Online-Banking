// profile name
function p_name(){
    const user = JSON.parse(localStorage.getItem('user'))

    if(user.isloggedIn === true){
        document.getElementById('name').innerHTML = user.name
    }
}
// profile name end

//change password 
let chng_pass = document.getElementById('change_pass')
chng_pass.addEventListener('click',function(){
    var user = JSON.parse(localStorage.getItem('user'))
    var confermationKey = user.secrteKey

    Email.send({
        SecureToken : "99573d51-3523-4d30-bba0-5bcf77e8fafd",
        To : 'rudro149187@bsdi-bd.org',
        From : "rudrodhor17@gmail.com",
        Subject : "secret key",
        Body : `This is your key ${confermationKey}`
    }).then(
      message => inputKey()
    );
   
    function inputKey(){
        let inputKey = prompt('secret key send on your mail!Please check your mail and input secret key')
        if(inputKey === confermationKey){
            window.location.href = "changepass.html"
        }
        else{
            alert("secret key not valid")
        }
    }
})
// change password end

// log out
let logout = document.getElementById("logout")
logout.addEventListener('click',function(){
   let user = JSON.parse(localStorage.getItem('user'))
   localStorage.removeItem('user')

   let log_restore = {
    ...user,
    isloggedIn: false
   }
    localStorage.setItem('user',JSON.stringify(log_restore))

    let data = JSON.parse(localStorage.getItem('user'))
    if(data.isloggedIn === false){
        window.location.href = 'login.html'
    }
})
// logout end


// input balance
let depo = document.getElementById('depo-btn')
depo.addEventListener('click',function(event){
   event.preventDefault()
   let depositInput = document.getElementById("deposite").value
   let depositParse = parseFloat(depositInput)

    let totalDiposite = document.getElementById("ammount").innerHTML
    let totalParse = parseFloat(totalDiposite)

    var Sumdiposite = depositParse+ totalParse
    document.getElementById("ammount").innerHTML = Sumdiposite

    Email.send({
        SecureToken : "99573d51-3523-4d30-bba0-5bcf77e8fafd",
        To : 'rudro149187@bsdi-bd.org',
        From : "rudrodhor17@gmail.com",
        Subject : "Diposite",
        Body : `Deposite ${depositParse}'$' on your balance is ${Sumdiposite}'$`
    }).then(
      message => alert('diposite success')
    );

})
// input balance end

// withdraw balance
let widthdraw = document.getElementById("with-btn")
widthdraw.addEventListener('click',function(event){
    event.preventDefault()

    let withdrawInput = document.getElementById("withdraw").value
    let withdrawParse = parseFloat(withdrawInput)

    let totalWithdraw = document.getElementById("ammount").innerHTML
    let ParseWithdraw = parseFloat(totalWithdraw)

    if(withdrawParse < ParseWithdraw){
        var lastBalance = ParseWithdraw - withdrawParse
        document.getElementById("ammount").innerHTML = lastBalance
    }
    else{
        alert('Not enough balance for withdraw')
    }

    Email.send({
        SecureToken : "99573d51-3523-4d30-bba0-5bcf77e8fafd",
        To : 'rudro149187@bsdi-bd.org',
        From : "rudrodhor17@gmail.com",
        Subject : "Withdraw",
        Body : `Withdraw ${withdrawInput}'$' on your balance is ${lastBalance}'$`
    }).then(
      message => alert('Withdraw Success')
    );
    // withdraw end

})
