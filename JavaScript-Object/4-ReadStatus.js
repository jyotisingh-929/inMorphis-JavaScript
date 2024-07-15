let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

function displayReadingStatus(library) {
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let bookInfo = "'" + book.title + "' by " + book.author;

        if (book.readingStatus) {
            console.log(bookInfo + " is already read.");
        } else {
            console.log(bookInfo + " is not read yet.");
        }
    }
}

displayReadingStatus(library);
