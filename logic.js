const addBookBtn = document.querySelector(".btn-add");
const modal = document.querySelector("form");
const modalFirstField = document.querySelector("#title");
const container = document.querySelector(".container");
let submitBookBtn = document.querySelector(".btn-submit");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let isRead = document.querySelector("#isRead");
let bookContainer = document.querySelector(".books-container");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
var booksList = [];
var mainBooksList = [];
function showModalListener() {
  addBookBtn.addEventListener("click", (e) => {
    modal.style.display = "grid";
    container.classList.toggle("modal-open");
    modalFirstField.focus();
    addBookBtn.disabled = true;
    e.stopPropagation();
  });
}
function hideModalListener() {
  document.addEventListener("click", (e) => {
    if (
      container.classList.contains("modal-open") &&
      !modal.contains(e.target) &&
      !addBookBtn.contains(e.target)
    ) {
      modal.style.display = "none";
      container.classList.toggle("modal-open");
      addBookBtn.disabled = false;
    }
  });
}
function getBookFromBookList(arr) {
  if (arr.length) {
    return arr.pop(-1);
  }
}

function createBookArticle() {
  let book = getBookFromBookList(booksList);
  let article = document.createElement("article");
  let title = document.createElement("h3");
  let by = document.createElement("p");
  let author = document.createElement("h3");
  let pages = document.createElement("p");
  let readBoolean = document.createElement("button");
  let remove = document.createElement("button");
  readBoolean.classList.add("readState");
  remove.classList.add("removeBook");
  function notRead() {
    readBoolean.textContent = "not read";
    readBoolean.style.backgroundColor = "var(--light-red)";
  }
  function read() {
    readBoolean.textContent = "read";
    readBoolean.style.backgroundColor = "var(--light-green)";
  }
  title.textContent = book.title;
  by.textContent = "by";
  author.textContent = book.author;
  pages.textContent = book.pages + " pages";
  if (book.read) {
    read();
  } else {
    notRead();
  }
  remove.textContent = "remove";
  article.append(title, by, author, pages, readBoolean, remove);
  bookContainer.appendChild(article);

  readBoolean.addEventListener("click", () => {
    readBoolean.textContent == "not read" ? read() : notRead();
  });
  remove.addEventListener("click", () => {
    remove.parentElement.remove();
  });
}
function addBookToBooksList(e) {
  if (
    title.validity.valid &&
    author.validity.valid &&
    pages.validity.valid &&
    isRead.validity.valid
  ) {
    e.preventDefault();
    modal.style.display = "none";
    container.classList.toggle("modal-open");
    addBookBtn.disabled = false;
    let book = new Book(title.value, author.value, pages.value, isRead.checked);
    booksList.push(book);
    mainBooksList.push(book);
    modal.reset();
    createBookArticle();
  }
}

showModalListener();
hideModalListener();
submitBookBtn.addEventListener("click", addBookToBooksList);
