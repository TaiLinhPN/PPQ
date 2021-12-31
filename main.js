var bookingApi = "https://61bc10bed8542f001782452a.mockapi.io/booking"


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

    console.log(name + " " + phone + " " + peopleNumber + " " + day + " " + settime2)

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
        // .then(function (){
        //     var addBooks = document.getElementById("add-books");
            
        //     var htmls = `
        //         <tr class ="books-id-${data.id}">
        //             <th>${data.id}</th>
        //             <td>${data.name}</td>
        //             <td>${data.sdt}</td>
        //             <td>${data.peopleNumber}</td>
        //             <td>${data.day}</td>
        //             <td>${data.time}</td>
        //             <td>
        //             <button onclick="removeBook(${data.id})">Xóa</button>
        //             <button onclick="updateBook(${data.id})">Sửa</button>
        //             </td>
        //         </tr>
        //         `
        //         console.log(addBooks)
        //     addBooks.innerHTML += htmls;

        // })
    

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
        .then(function (){
            var booksItem = document.querySelector('.books-id-'+id);
            booksItem.remove();
        })
}

function updateBook(id){
    var name = document.querySelector('.name-'+id);
    var sdt = document.querySelector('.sdt-'+id);
    var peopleNumber = document.querySelector('.peopleNumber-'+id);
    var day = document.querySelector('.day-'+id);
    var time = document.querySelector('.time-'+id);
    var handle = document.querySelector('.handle-'+id);

    name.innerHTML = `<input type="text" value="${name.innerHTML.trim()}" >`
    sdt.innerHTML = `<input type="text" value="${sdt.innerHTML.trim()}" >`
    peopleNumber.innerHTML = `<input type="text" value="${peopleNumber.innerHTML.trim()}" >`
    day.innerHTML = `<input type="date" value="${day.innerHTML.trim()}" >`
    time.innerHTML = `<input type="text" value="${time.innerHTML.trim()}" >`
    handle.innerHTML = `<button onclick="getNewdata()">ok</button>`
    console.log("name: " + name,"sdt: " + sdt, "peopleNumber: " + peopleNumber,"day: " +  day,"time: " +  time)
    
    function getNewdata() {

    }
    getNewdata()

    // var data ={
    //     name: 'liinh',
    //     sdt: 'phone',
    //     peopleNumber: 'peopleNumber',
    //     day: 'day',
    //     time: 'settime2'}

    

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
        }).then(function (id){
            var booksItem = document.querySelector('.books-id-'+id);            
            var htmls = `
                <tr class ="books-id-${id}">
                    <th>${data.id}</th>
                    <td>${data.name}</td>
                    <td>${data.sdt}</td>
                    <td>${data.peopleNumber}</td>
                    <td>${data.day}</td>
                    <td>${data.time}</td>
                    <td>
                    <button onclick="removeBook(${data.id})">Xóa</button>
                    <button onclick="updateBook(${data.id})">Sửa</button>
                    </td>
                </tr>
                `
                console.log(booksItem)
                booksItem.innerHTML = htmls;

        })
}


function renderBooks(books){
    var addBooks = document.getElementById("add-books");
    console.log(books);
    var htmls = books.map(function(book){
        return`
        <tr class ="books-id-${book.id}">
            <th class ="id-${book.id}">          ${book.id}</th>
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

console.log(timeSet)




