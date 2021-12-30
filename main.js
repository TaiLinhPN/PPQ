var bookingApi = "https://61bc10bed8542f001782452a.mockapi.io/booking"

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


function checkTime(x) {
    var listCheckTime = document.getElementsByClassName('checkTime');
    for (var i = 0; i < listCheckTime.length; i++){
        if (i !== x){
            listCheckTime[i].checked = false;
        }  
    }
}




