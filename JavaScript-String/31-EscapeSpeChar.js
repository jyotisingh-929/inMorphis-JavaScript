function escape_html(str) {
    let escapedString = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;');
    return escapedString;
}

function escape_html_in_array(arr) {
    return arr.map(item => escape_html(item));
}
let strings = ['PHP & MySQL', '3 > 2', '<script>alert("Hello")</script>'];
let escapedStrings = escape_html_in_array(strings);
console.log(escapedStrings);
