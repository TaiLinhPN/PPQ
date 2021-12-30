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
}


function checkTime(x) {
    var listCheckTime = document.getElementsByClassName('checkTime');
    for (var i = 0; i < listCheckTime.length; i++){
        if (i !== x){
            listCheckTime[i].checked = false;
        }  
    }
}




