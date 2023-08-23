const myLibrary = [];

function Book(name, author, numberOfPages, finished) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.finished = finished;
}

function addBookToLibrary() {
  // do stuff here

  console.log("success")
}
let newBook = document.querySelector(".createNew");
newBook.addEventListener("click", addBookToLibrary);