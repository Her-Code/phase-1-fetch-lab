function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    return fetch("https://anapioficeandfire.com/api/books")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((json) => renderBooks(json))
      .catch((error) => console.error('Error fetching books:', error.message));
  }
  
  function renderBooks(bookData) {
    // Assuming bookData is an array of book objects
    const bookTitles = bookData.map((book) => book.name);
    const bookList = document.createElement('ul');
    bookTitles.forEach((title) => {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      bookList.appendChild(listItem);
    });
    document.body.appendChild(bookList);
  }
  
  // Call fetchBooks() when index.html is loaded
  fetchBooks();

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
