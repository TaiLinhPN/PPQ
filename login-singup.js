var modalLog = document.querySelector('.modal-login')

function openLog(){
    modalLog.classList.add("display-block")
    var modal = document.querySelector('.add-content')
    modal.innerHTML = htmlLog;
}

function closeModal() {
    modalLog.classList.remove("display-block")
}

htmlLog = `<div class="login-wrap">
<div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
    <div class="login-form">
        <div class="sign-in-htm">
            <div class="group">
                <label for="user-in" class="label">Username</label>
                <input id="user-in" type="text" class="input">
            </div>
            <div class="group">
                <label for="pass-in" class="label">Password</label>
                <input id="pass-in" type="password" class="input" data-type="password">
            </div>
            <div class="group">
                <input id="check-in" type="checkbox" class="check" checked>
                <label for="check-in"><span class="icon"></span> Keep me Signed in</label>
            </div>
            <div class="group">
                <input type="submit" class="button" value="Sign In">
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
            </div>
        </div>
        <div class="sign-up-htm">
            <div class="group">
                <label for="user-up" class="label">Username</label>
                <input id="user-up" type="text" class="input">
            </div>
            <div class="group">
                <label for="pass-up" class="label">Password</label>
                <input id="pass-up" type="password" class="input" data-type="password">
            </div>
            <div class="group">
                <label for="pass-repeat-up" class="label">Repeat Password</label>
                <input id="pass-repeat-up" type="password" class="input" data-type="password">
            </div>
            <div class="group">
                <label for="email-up" class="label">Email Address</label>
                <input id="email-up" type="text" class="input">
            </div>
            <div class="group">
                <input onclick="signUp()" type="submit" class="button" value="Sign Up">
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <label for="tab-1">Already Member?</a>
            </div>
        </div>
    </div>
</div>
</div>`

var usersApi = "https://61bc10bed8542f001782452a.mockapi.io/users"

function signUp() {
    var user = document.querySelector("#user-up").value
    var pass = document.querySelector("#pass-up").value
    var passRe = document.querySelector("#pass-repeat-up").value
    var email = document.querySelector("#email-up").value
    
    
    getUsers(function(users){
        x = checkUser(users, user)
        y = checkpass(pass,passRe)
        console.log(y)
        if (x == true && y == true) {
            console.log("ok")
        }
    })
    
    if (pass == passRe){
        console.log( true)
    } else{
        console.log( false)

    }
    
}


function checkUser(users, user){
    for  (var i = 0; i < users.length; i++){
        if(users[i].name == user){
            return false
        }else{
            return true
        }
    }
}

function checkpass(pass,passRe){
    
}


var a = {
    name: "tai linh",
    pass: "123",
    email:"tai@gmail.com"

}
var ls = [];

function getUsers(callback){
    fetch(usersApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}



var ls2 = getUsers(function(us){
    ls = us
    console.log(us)
    console.log(ls)
    return true
    
})

console.log(ls2)




var a = "nó ;à"
function cha (){
    a = 'no'
}
cha()
console.log(a)
