function longestUniqueSubstring(str) {
    let longest = '';
    let current = '';

    for (let char of str) {
        let index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}

let str = 'abcabcbb';
let longestSubstring = longestUniqueSubstring(str);
console.log("Longest substring without repeating characters:", longestSubstring);
