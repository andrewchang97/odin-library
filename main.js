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

let modal = document.querySelector("#bookModal");
let btn = document.querySelector(".createNew");
let closeButton = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }