const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
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
      <h3>"${book.title}"</h3>
      <p>${book.author}</p>
      <p>${book.pages} Pages</p>
      <button class="${book.read ? "read-button" : "not-read-button"}" data-index="${index}">${
      book.read ? "Read" : "Not Read Yet"
    }</button>
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookList.appendChild(bookCard);
  });
}

document.addEventListener("click", (event) => {
  if (event.target.matches(".read-button, .not-read-button")) {
    const button = event.target;
    const index = button.dataset.index;
    myLibrary[index].read = !myLibrary[index].read;

    button.classList.toggle("read-button");
    button.classList.toggle("not-read-button");
    button.textContent = myLibrary[index].read ? "Read" : "Not Read Yet";
  }
});

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

const bookForm = document.getElementById("book-form");

document.getElementById("add-book-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  bookForm.close();
  displayBooks();
  event.target.reset();
});

document.addEventListener("click", (event) => {
  if (event.target == bookForm) {
    bookForm.close();
  }
});

document.getElementById("new-book-btn").addEventListener("click", () => {
  bookForm.showModal();
});

displayBooks();


