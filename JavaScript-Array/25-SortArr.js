var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function sortByTitle(arr) {
    return arr.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
}

let sortedLibrary = sortByTitle(library);
let formattedResult = sortedLibrary.map(item => {
    return `{ author: "${item.author}", title: "${item.title}", libraryID: ${item.libraryID} }`;
});

console.log(formattedResult);
