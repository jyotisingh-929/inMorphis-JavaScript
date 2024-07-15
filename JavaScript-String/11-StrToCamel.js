function camelize(input) {
    let words = input.split(' ');
    let camelCaseString = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (i === 0) {
            // First word should start with lowercase
            camelCaseString += word.toLowerCase();
        } else {
            // Subsequent words start with uppercase
            camelCaseString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }

    return camelCaseString;
}
console.log(camelize("JavaScript Exercises")); // Output: "javaScriptExercises"
console.log(camelize("JavaScript exercises")); // Output: "javaScriptExercises"
console.log(camelize("JavaScriptExercises")); // Output: "javaScriptExercises"
