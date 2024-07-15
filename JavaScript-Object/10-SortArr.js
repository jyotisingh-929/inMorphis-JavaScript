let library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

// Sorting the array of objects by libraryID
library.sort((a, b) => {
    return a.libraryID - b.libraryID;
});

// Printing each object in the sorted array in object format
for (let i = 0; i < library.length; i++) {
    let obj = library[i];
    console.log(JSON.stringify(obj));
}
