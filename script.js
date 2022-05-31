
import { updateTime } from './Modules/clock.js';
updateTime ();
import * as Navbar from './Modules/nav-bar.js'

const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const allBooks = document.getElementById('all-books');
let bookData = [];

function setBorder() {
  const data = JSON.parse(localStorage.getItem('bookData'));
  if (bookData.length > 0 || data.length > 0) {
    allBooks.classList.add('border');
  } else if (bookData.length === 0 && data.length === 0) {
    allBooks.classList.remove('border');
  }
}
function setStyles() {
  let index = 1;
  const liList = document.querySelectorAll('.book');
  liList.forEach((element) => {
    if (index % 2 !== 0) {
      element.classList.add('bookBlack');
    }
    index += 1;
  });
}

class Book {
  constructor(title = 'title', author = 'author', id = '0') {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook() {
    // This will add itself to the bookData Array
    bookData.push(this);
  }

  removeBook() {
    // This Will Remove It self From the bookData Array
    bookData.filter((book) => book.id !== this.id);
  }
}

// Function create the div and li for each new book
function getLi(book) {
  const divTitle = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divTitleAuthor = document.createElement('div');
  const removeButton = document.createElement('button');
  const li = document.createElement('li');

  divTitle.classList.add('title');
  divAuthor.classList.add('author');
  divTitleAuthor.classList.add('containerTitleAuthor');
  removeButton.classList.add('remove');
  removeButton.setAttribute('id', `button${book.id}`);
  const stringifyedBook = JSON.stringify(book);
  removeButton.setAttribute('onclick', `javascript:removeLi(${book.id} ,${stringifyedBook})`);
  li.classList.add('book');
  li.setAttribute('id', `book${book.id}`);

  divTitle.innerHTML = book.title;
  divAuthor.innerHTML = book.author;
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';

  divTitleAuthor.appendChild(divTitle);
  divTitleAuthor.appendChild(divAuthor);
  li.appendChild(divTitleAuthor);
  li.appendChild(removeButton);

  return li;
}

// Store data to local storage.

function storeData() {
  localStorage.setItem('bookData', JSON.stringify(bookData));
}

// Load data from local storage.

function loadData() {
  const data = localStorage.getItem('bookData');
  if (data) {
    bookData = JSON.parse(data);
    bookData.forEach((book) => {
      bookList.appendChild(getLi(book));
    });
    setStyles();
    setBorder();
  }
}

// When new page is opend it first check if there is data in local stroage it load it.
loadData();

addBook.addEventListener('click', () => {
  if (newTitle.value && newAuthor.value) {
    const id = bookData[bookData.length - 1] ? bookData[bookData.length - 1].id + 1 : 1;
    const book = new Book(`"${newTitle.value}"`, `by ${newAuthor.value}`, id);
    book.addBook();
    bookList.appendChild(getLi(book));
    setBorder();
    storeData();
    setStyles();
  }
  newTitle.value = '';
  newAuthor.value = '';
});

function removeLi(id) {
  const li = document.getElementById(`book${id}`);
  li.remove();
  bookData = bookData.filter((book) => book.id !== id);
  storeData();
  setBorder();
}

// For removing linter errors. which say to call the removeLi function. it is called inside
// the getLI but as it is the string type so linter is unable to recoznise it.

const a = 0;
const b = 1;

if (a > b) removeLi(0);
