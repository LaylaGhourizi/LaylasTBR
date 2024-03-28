let library = [];

function addBook(title, author, owned) {
  library.push({ title, author, owned });
}

function displayBooks() {
  let bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = ''; // Clear existing content
  
  library.forEach(book => {
    let bookItem = document.createElement('div');
    bookItem.textContent = `${book.title} by ${book.author}`;
    bookListElement.appendChild(bookItem);
  });
}

// Example usage
addBook("How to Walk Away", "Katherine Center", true);
addBook("Some Kind of Perfect", "Krista Ritchie", false);
addBook("Beartown", "Fredrik Backman", true);

displayBooks();