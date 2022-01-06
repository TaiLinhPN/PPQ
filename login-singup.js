
// var modalLog = document.querySelector('.modal-login')

// function openLog(){
//     modalLog.classList.add("display-block")
//     var modal = document.querySelector('.add-content')
//     modal.innerHTML = htmlLog;
// }

// function closeModal() {
//     modalLog.classList.remove("display-block")
// }

// function createAccDone(userName,pass){
//     document.querySelector("#user-in").value = userName;
//     document.querySelector("#pass-in").value = pass;
//     document.querySelector("#tab-2").checked = false
//     document.querySelector("#tab-1").checked = true
// }

// htmlLog = `<div class="login-wrap">
// <div class="login-html">
//     <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
//     <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
//     <div class="login-form">
//         <div class="sign-in-htm">
//             <div class="group">
//                 <label for="user-in" class="label">Username</label>
//                 <input id="user-in" type="text" class="input">
//             </div>
//             <div class="group">
//                 <label for="pass-in" class="label">Password</label>
//                 <input id="pass-in" type="password" class="input" data-type="password">
//             </div>
//             <div class="group">
//                 <input id="check-in" type="checkbox" class="check" checked>
//                 <label for="check-in"><span class="icon"></span> Keep me Signed in</label>
//             </div>
//             <div class="group">
//                 <input type="submit" class="button" onclick="signIn()" value="Sign In">
//             </div>
//             <div class="hr"></div>
//             <div class="foot-lnk">
//                 <a href="#forgot">Forgot Password?</a>
//             </div>
//         </div>
//         <div class="sign-up-htm">
//             <div class="group">
//                 <label for="user-up" class="label">Username</label>
//                 <input id="user-up" type="text" class="input">
//             </div>
//             <div class="group">
//                 <label for="pass-up" class="label">Password</label>
//                 <input id="pass-up" type="password" class="input" data-type="password">
//             </div>
//             <div class="group">
//                 <label for="pass-repeat-up" class="label">Repeat Password</label>
//                 <input id="pass-repeat-up" type="password" class="input" data-type="password">
//             </div>
//             <div class="group">
//                 <label for="email-up" class="label">Email Address</label>
//                 <input id="email-up" type="text" class="input">
//             </div>
//             <div class="group">
//                 <input onclick="signUp()" type="submit" class="button" value="Sign Up">
//             </div>
//             <div class="hr"></div>
//             <div class="foot-lnk">
//                 <label for="tab-1">Already Member?</a>
//             </div>
//         </div>
//     </div>
// </div>
// </div>`

// var usersApi = "https://61bc10bed8542f001782452a.mockapi.io/userApi"

// async function signUp() {
//     var user = document.querySelector("#user-up").value
//     var pass = document.querySelector("#pass-up").value
//     var passRe = document.querySelector("#pass-repeat-up").value
//     var email = document.querySelector("#email-up").value

//    if (await getName(user) === null && checkPass(pass,passRe)){
//         var data ={
//             name: user,
//             pass: pass,
//             email: email,
//             product:[]
//         };
//         createAcc(data);
//         console.log("ok")
//         createAccDone(user,pass);
//     } else {
//         console.log("fal")
//     }    
// }

//  async function signIn(){
//     var user = document.querySelector("#user-in").value
//     var pass = document.querySelector("#pass-in").value

//     console.log(user)
//     var acc = await getName(user)
//     console.log(acc)
//     if(acc === null){
//         console.log("ten chua co")
//     } else {
//         if(checkPass(pass,acc.pass) === false){
//             console.log("pass sai")
//         } else {
//             console.log("ok")
//             ipa = "https://61bc10bed8542f001782452a.mockapi.io/userApi/"+acc.id;            
//         }
//     }
// }

// async function getName(userName){
//     var listName = await getUsers()
    
//     for(i = 0; i < listName.length; i++){
//         if (listName[i].name === userName){
//             return listName[i]
//         } 
//     }
//     return null   
// }

// function checkPass(pass,passRe){
//     if (pass === passRe){
//         return true
//     } else {
//         return false
//     }
// }

// function createAcc(data){
//     var options = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {'Content-Type': 'application/json'}
//     }
//     handleData(usersApi,options);
// }

// function handleData(usersApi,options){
//     fetch(usersApi,options)
//         .then(function (response){
//             response.json()
//         })
// }

// async function getUsers(){
//    return await fetch(usersApi)   
//         .then(res=>res.json())      
// }

// // var tr =checkSignIn()
// // console.log(tr)

// // async function c(){
// //      if (await checkSignIn()== true){
// //         return "ok"
// //     }
// // }
// // console.log(c())


// // async function getData(api){
// //     return await fetch(api).then(res => res.json())
// // }

// // async function renderData(api){
// //     let data = await getData(api)
// // }


// // var promise = new Promise(
// //     function(resolve,reject){
        
// //         resolve(
// //             getUsers(function(us){
                
// //             })
// //         )
// //     }
// // )

// // promise
// //     .then(function(us){
// //         console.log(us)
// //     })

// //     .catch(function(err){
// //         console.log("b")

// //     })
// //     .finally(function(){
// //         console.log("x")

// //     })

// // console.log(promise)
