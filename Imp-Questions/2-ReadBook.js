const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", alreadyRead: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: false }
];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    
    console.log(`${book.title} by ${book.author}`);
    
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
}
