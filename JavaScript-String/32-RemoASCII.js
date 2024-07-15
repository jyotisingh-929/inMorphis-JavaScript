function remove_non_ascii(str) {
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        // Check if the character is printable ASCII (32 to 126)
        if (charCode >= 32 && charCode <= 126) {
            cleanStr += str.charAt(i);
        }
    }
    return cleanStr;
}
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
