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

addBookToLibrary("Harry Potter and the Philosopher's Stone",'J.K. Rowling','1000','true');
addBookToLibrary("Uncle Tom's Cabin",'Harriet Beecher Stowe','258','false');

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