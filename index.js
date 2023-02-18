import Book from './modules/books.js';
import Store from './modules/store.js';
import UI from './modules/displaybooks.js';
import Switch from './modules/singleapp.js';

// Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Adding Book
document.querySelector('#new-book').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);
  UI.addBookToList(book);
  // Adding Book to Storage
  Store.addBook(book);
  UI.clearFields();
});

// Remove Book
document.querySelector('.my-books').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  Store.removeBook(e.target.previousElementSibling.textContent);
});
document.querySelectorAll('.switch-link').forEach((link) => {
  link.addEventListener('click', () => {
    Switch.newPage(link.textContent);
  });
});
