function Book (title, author, pages, readStatus, displayInfo) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.readStatus = readStatus
    this.displayInfo = function () {
        return `${title}, ${author}, ${pages}, ${readStatus}`
    }
}

let bookItem = new Book("No Sweetness Here", "Lawrence Darmani", 50, "read");
console.log(bookItem);
console.log(bookItem.displayInfo());