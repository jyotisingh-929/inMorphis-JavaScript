function text_truncate(str, length = 100, ending = '...') {
    if (str.length > length) {
        return str.substring(0, length) + ending;
    } else {
        return str;
    }
}
console.log(text_truncate('We are doing JS string exercises.'));          // Output: "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19));      // Output: "We are doing JS ..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // Output: "We are doing !!"
