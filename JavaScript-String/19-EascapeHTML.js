function escapeHTML(html) {
    let escapedHTML = '';
    for (let i = 0; i < html.length; i++) {
        switch (html[i]) {
            case '<':
                escapedHTML += '&lt;';
                break;
            case '>':
                escapedHTML += '&gt;';
                break;
            case '&':
                escapedHTML += '&amp;';
                break;
            case '"':
                escapedHTML += '&quot;';
                break;
            case '\'':
                escapedHTML += '&#39;';
                break;
            default:
                escapedHTML += html[i];
        }
    }
    return escapedHTML;
}
console.log(escapeHTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
