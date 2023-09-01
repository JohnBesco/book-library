const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookList.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

document.getElementById("new-book-btn").addEventListener("click", () => {
  const bookForm = document.getElementById("book-form");
  bookForm.style.display = "block";
});

document.getElementById("add-book-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  const bookForm = document.getElementById("book-form");
  bookForm.style.display = "none"; //
  displayBooks(); 
  event.target.reset(); 
});


displayBooks();
