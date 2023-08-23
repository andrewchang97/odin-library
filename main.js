const myLibrary = [];

function Book(name, author, numberOfPages, finished) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.finished = finished;
}

function addBookToLibrary() {
  newBook = new Book(name, author, numberOfPages, finished);
  myLibrary.push(newBook)
  form.reset();
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
  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("insideModal");
    const dataDisplay = document.getElementById("libraryID");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        const title = document.getElementById("book_title").value;
        const author = document.getElementById("author").value;
        const pageCount = document.getElementById("page_count").value;
        const finished = document.getElementById("finished").checked ? "Finished" : "Not Finished";

        // Create a new entry container
        const newEntry = document.createElement("div");
        newEntry.classList.add("entry"); // Add a class for styling if needed
        newEntry.innerHTML = `
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Page Count:</strong> ${pageCount}</p>
            <p><strong>Status:</strong> ${finished}</p>
        `;

        // Append the new entry to the data display area
        dataDisplay.appendChild(newEntry);

        // Clear the form fields
        document.getElementById("book_title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("page_count").value = "";
        document.getElementById("finished").checked = true;
    });
});