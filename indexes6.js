console.log('This is ES6 version of project 2');
class Book{
    constructor(name,author,type)
    this.name = name;
    this.author = author;
    this.type = type;
}

class Display{
     add(book){
        console.log("Adding to UI");
        let tableBody = document.getElementById('tablebody');
        let uiString = '<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>';
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book){
        if(book.name.length<2 || book.author.length<2)
        {
          return false
        }
        else
        {
           return true;
        }

        show(type,displaymessage){
            let message = Document.getElementById(message);
            let boldtext;
            if (type ==='message')
            {
                boldtext = 'Success';
            }
            else
            {
                boldtext = 'Error!';
            }
            message.innerHTML = '<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                 <strong>${boldtext}:</strong> ${displaymessage}
                                 <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                 </div>'
            setTimeout(function(){
                message.innerHTML = ''
            },5000);

}

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