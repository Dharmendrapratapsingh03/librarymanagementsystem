console.log("This is index.js");
//Todo's
//1.store all the data to the local Storage
//2.Give another column as an option to delete this book
//3.Add a scrollbar to the view

//Constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}

//Add methods to display prototype
Display.prototype.add() = function () { }
console.log("Adding to UI");
tablebody = document.getElementById('tableBody');
let uiString = '<tr>
    < td > $[book.author]</td>
        <><td>$[book.name]</td><td>$[book.type]</td></>
                    </tr > ';
tableBody.innerHTML += uiString;

//implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
    Display.prototype.show = function (type, displaymessage) {
        let message = Document.getElementById(message);
        message.innerHTML = '<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            < strong > Message:</strong > ${ displaymessage }
        <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div > '
        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
    }
}


//Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryFormSubmit(e) {
    console.log('you have submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    //Fiction, Computerprogramming, cooking

    let Fiction = document.getElementById('Fiction');
    let Computerprogramming = document.getElementById('Computerprogramming')
    let cooking = document.getElementById('cooking');
    let type;

    if (Fiction.checked) {
        type = Fiction.value;
    }

    else if (Computerprogramming.checked) {
        type = Computerprogramming.value;
    }

    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new book(name, author, type);
    console.log(book);

    let display = new Display;
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been succesfully added');
    }
    else {
        //show error to the user
        display.show('danger', 'you can not add this book');
    }


    e.preventDefault();
}