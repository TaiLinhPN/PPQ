var modalLog = document.querySelector('.modal-login')
var ipa = document.querySelector("#ipa")
var modal = document.querySelector('.add-content')
console.log(modal)


function openLog(){
    modalLog.classList.add("display-block")
    var modal = document.querySelector('.add-content')
    modal.innerHTML = htmlLog;
}

function openAcc(){
    alert("daay ba")
    modalLog.classList.add("display-block")
    var modal = document.querySelector('.add-content')
    console.log(modal)

}

function closeModal() {
    modalLog.classList.remove("display-block")
}

function createAccDone(userName,pass){
    document.querySelector("#user-in").value = userName;
    document.querySelector("#pass-in").value = pass;
    document.querySelector("#tab-2").checked = false
    document.querySelector("#tab-1").checked = true
}

function signInSucc(acc){
    document.querySelector("#btn-log").innerHTML = `
    <a id="btn-log" onclick="openAcc()" href="#">
    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
    ${acc.name}
    </a>` 

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
                <input type="submit" class="button" onclick="signIn()" value="Sign In">
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

var usersApi = "https://61bc10bed8542f001782452a.mockapi.io/userApi"

async function signUp() {
    var user = document.querySelector("#user-up").value
    var pass = document.querySelector("#pass-up").value
    var passRe = document.querySelector("#pass-repeat-up").value
    var email = document.querySelector("#email-up").value

   if (await getName(user) === null && checkPass(pass,passRe)){
        var data ={
            name: user,
            pass: pass,
            email: email,
            product:[]
        };
        createAcc(data);
        console.log("ok")
        createAccDone(user,pass);
    } else {
        console.log("fal")
    }    
}

 async function signIn(){
    var user = document.querySelector("#user-in").value
    var pass = document.querySelector("#pass-in").value

    console.log(user)
    var acc = await getName(user)
    console.log(acc)
    if(acc === null){
        console.log("ten chua co")
    } else {
        if(checkPass(pass,acc.pass) === false){
            console.log("pass sai")
        } else {
            console.log("ok")
            ipa.value = "https://61bc10bed8542f001782452a.mockapi.io/userApi/"+acc.id;  
            ipaCustomer()
            closeModal()
            signInSucc(acc)
                    
        }
    }
}

async function getName(userName){
    var listName = await getUsers()
    
    for(i = 0; i < listName.length; i++){
        if (listName[i].name === userName){
            return listName[i]
        } 
    }
    return null   
}

function checkPass(pass,passRe){
    if (pass === passRe){
        return true
    } else {
        return false
    }
}

function createAcc(data){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    handleData(usersApi,options);
}

function handleData(usersApi,options){
    fetch(usersApi,options)
        .then(function (response){
            response.json()
        })
}

async function getUsers(){
   return await fetch(usersApi)   
        .then(res=>res.json())      
}

// var tr =checkSignIn()
// console.log(tr)

// async function c(){
//      if (await checkSignIn()== true){
//         return "ok"
//     }
// }
// console.log(c())


// async function getData(api){
//     return await fetch(api).then(res => res.json())
// }

// async function renderData(api){
//     let data = await getData(api)
// }


// var promise = new Promise(
//     function(resolve,reject){
        
//         resolve(
//             getUsers(function(us){
                
//             })
//         )
//     }
// )

// promise
//     .then(function(us){
//         console.log(us)
//     })

//     .catch(function(err){
//         console.log("b")

//     })
//     .finally(function(){
//         console.log("x")

//     })

// console.log(promise)

// ===========================================================================

// var bookingApi = "https://61bc10bed8542f001782452a.mockapi.io/booking"
var bookingApi = ""


function ipaCustomer (){
    bookingApi = ipa.value
    console.log(bookingApi)
}



var timeSet = ""

function start(){
    getBookings(function(books){
        renderBooks(books)
    })
}
start();

function getBookings(callback){
    fetch(bookingApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function creatBook(){
    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    var peopleNumber = document.getElementById('inputPNum').value;
    var day = document.getElementById('inputDay').value;

    var data ={
        name: name,
        sdt: phone,
        peopleNumber: peopleNumber,
        day: day,
        time: settime2}

    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(bookingApi,options)
        .then(function (response){
            response.json()
        })
    
}

function removeBook(id){
    var options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }
    fetch(bookingApi + '/' + id,options)
        .then(function (response){
            response.json();
        })
    
    var booksItem = document.querySelector('.books-id-'+id);
    booksItem.remove();
        
        
        
}

function updateBook(id){
    var name = document.querySelector('.name-'+id);
    var sdt = document.querySelector('.sdt-'+id);
    var peopleNumber = document.querySelector('.peopleNumber-'+id);
    var day = document.querySelector('.day-'+id);
    var time = document.querySelector('.time-'+id);
    var handle = document.querySelector('.handle-'+id);


    name.innerHTML          = `<input class ="input-name-${id}" type="text" value="${name.innerHTML.trim()}" >`
    sdt.innerHTML           = `<input class ="input-sdt-${id}" type="text" value="${sdt.innerHTML.trim()}" >`
    peopleNumber.innerHTML  = `<input class ="input-peopleNumber-${id}" type="text" value="${peopleNumber.innerHTML.trim()}" >`
    day.innerHTML           = `<input class ="input-day-${id} type="date" value="${day.innerHTML.trim()}" >`
    time.innerHTML          = `<input class ="input-time-${id}" type="text" value="${time.innerHTML.trim()}" >`
    handle.innerHTML        = `<button onclick='getChangedData(id)' id="btn-handle-${id}" >ok</button>`

}

function getChangedData(id){
    
    console.log("truoc",id)
    id = id.replace(/btn-handle-/g,'');
    console.log("sau:",id)

    var name = document.querySelector('.input-name-'+id)
    var sdt = document.querySelector('.input-sdt-'+id)
    var peopleNumber = document.querySelector('.input-peopleNumber-'+id)
    var day = document.querySelector('.input-day-'+id)
    var time = document.querySelector('.input-time-'+id)

    // console.log("inner",name.innerHTML)
    // console.log("vl",name.value)

    var data ={
        name: name.value,
        sdt: sdt.value,
        peopleNumber: peopleNumber.value,
        day: day.value,
        time: time.value}
    
    putdata(id,data)


    var booksItem = document.querySelector('.books-id-'+id); 
    

    var htmls =`
    <tr class ="books-id-${id}">
        <th class ="id-${id}">          ${id}</th>
        <td class ="name-${id}">        ${data.name}</td>
        <td class ="sdt-${id}">         ${data.sdt}</td>
        <td class ="peopleNumber-${id}">${data.peopleNumber}</td>
        <td class ="day-${id}">         ${data.day}</td>
        <td class ="time-${id}">        ${data.time}</td>
        <td class ="handle-${id}">
            <button onclick="removeBook(${id})">Xóa</button>
            <button onclick="updateBook(${id})">Sửa</button>
        </td>
    </tr>
    `
        
        booksItem.innerHTML = htmls;


}



function putdata(id,data) {
    var options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    fetch(bookingApi + '/' + id,options)
        .then(function (response){
            response.json()
        })
}


function renderBooks(books){
    var addBooks = document.getElementById("add-books");
    console.log(books);
    var stt = 0;
    var htmls = books.map(function(book){
        stt++
        return`
        <tr class ="books-id-${book.id}">
            <th class ="id-${book.id}">          ${stt}</th>
            <td class ="name-${book.id}">        ${book.name}</td>
            <td class ="sdt-${book.id}">         ${book.sdt}</td>
            <td class ="peopleNumber-${book.id}">${book.peopleNumber}</td>
            <td class ="day-${book.id}">         ${book.day}</td>
            <td class ="time-${book.id}">        ${book.time}</td>
            <td class ="handle-${book.id}">
                <button onclick="removeBook(${book.id})">Xóa</button>
                <button onclick="updateBook(${book.id})">Sửa</button>
            </td>
        </tr>
        `
    })
    addBooks.innerHTML = htmls.join('');

}

var listTime = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30',]
var settime2 ='bạn chưa chọn giờ'
function checkTime(x) {
    var listCheckTime = document.getElementsByClassName('checkTime');
    for (var i = 0; i < listCheckTime.length; i++){
        if (i !== x){
            listCheckTime[i].checked = false;
        }  
    }
    settime2 = listTime[x]
}

function seeMore(){

    var btnSeeMore = document.querySelector(".see-more");
    btnSeeMore.classList.add("display-block")

}

