function isHTML(value) {
    // Regular expression to match HTML tags
    const htmlPattern = /<([A-Za-z][A-Za-z0-9]*)(\s+[^>]*)?(\/>|>(.*?)<\/\1\s*>|>)/;

    return htmlPattern.test(value);
}
console.log(isHTML("<p>Hello, world!</p>")); // Output: true
console.log(isHTML("<div><h1>Title</h1><p>Paragraph</p></div>")); // Output: true
console.log(isHTML("<p>This is <strong>bold</strong> and <em>italic</em>.</p>")); // Output: true
console.log(isHTML("Hello, world!")); // Output: false (no HTML tags)
console.log(isHTML("<")); // Output: false (incomplete tag)
console.log(isHTML("")); // Output: false (empty string)
