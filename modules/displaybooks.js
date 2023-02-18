import Store from './store.js';

export default class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.my-books');
    const allBooks = document.createElement('div');
    allBooks.classList.add('mybooks-item');

    allBooks.innerHTML = `
          <p class="mybooks-p">${book.title}</p>
          <p class="mybooks-p">By</p>
          <p class="mybooks-p">${book.author}</p>
          <button class="remove-book">Remove</button>
          `;
    list.appendChild(allBooks);
  }

  static deleteBook(element) {
    if (element.classList.contains('remove-book')) {
      element.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}