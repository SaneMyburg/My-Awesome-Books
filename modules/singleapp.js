export default class Switch {
  static newPage = (page) => {
    const booksLibrary = document.querySelector('.books-library');
    const newBooks = document.querySelector('.new-books');
    const contactInfo = document.querySelector('.contacts');

    if (page === 'List') {
      booksLibrary.style.display = 'block';
      newBooks.style.display = 'none';
      contactInfo.style.display = 'none';
    } else if (page === 'Add new') {
      booksLibrary.style.display = 'none';
      newBooks.style.display = 'block';
      contactInfo.style.display = 'none';
    } else {
      booksLibrary.style.display = 'none';
      newBooks.style.display = 'none';
      contactInfo.style.display = 'block';
    }
  }
}