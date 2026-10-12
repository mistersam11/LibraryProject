function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the Book constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readString;
        if (read) {
            readString = "read";
        } else {
            readString = "not yet read"
        }
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${readString}`);
    }
}

const treeHouse = new Book("The Magic Tree House", "The Big Mouse", 34, false);

treeHouse.info();