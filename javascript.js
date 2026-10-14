const myLibrary = [];

function Book(title,author,pages,read,id) {
    if (!new.target) {
        throw Error("You must use 'new' to call the constructor!")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read) {
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

const bookshelf = document.getElementById('bookshelf');
const form = document.getElementById('addform');
const bookdialog = document.getElementById('bookdialog');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById("booktitle").value;
    const author = document.getElementById("bookauthor").value;
    const pages = document.getElementById("bookpages").value;

    addBookToLibrary(title,author,pages);
    bookdialog.close();
    displayBooks();

})

function displayBooks() {
    bookshelf.innerHTML = "";
    myLibrary.forEach((item) => {
        const book  = document.createElement("div");
        book.classList = "book-body";

        const content = `
        <div class="book">
            <div class="book-header">
                <h2>${item.title}</h2>
            </div>
            <div class="book-body">
                <h3>by ${item.author}</h3>
                <p>${item.pages} pages</p>
            </div>
        </div>
        `;

        bookshelf.innerHTML += content;
    });
}

displayBooks();
