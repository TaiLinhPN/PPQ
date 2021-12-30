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
    time: settime2
}

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


function renderBooks(books){
    var addBooks = document.getElementById("add-books");
    console.log(books);
    var htmls = books.map(function(book){
        return`
        <tr>
            <th>${book.id}</th>
            <td>${book.name}</td>
            <td>${book.sdt}</td>
            <td>${book.peopleNumber}</td>
            <td>${book.day}</td>
            <td>${book.time}</td>
            <td>
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




