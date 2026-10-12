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

addBookToLibrary('James Jonathan','Subway Sammy','1000','true');
console.log(myLibrary);