function longestPalindrome(str) {
    let maxLength = 0;
    let longestPal = '';

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < str.length; i++) {
        let oddPal = expandAroundCenter(str, i, i);
        let evenPal = expandAroundCenter(str, i, i + 1);

        if (oddPal.length > maxLength) {
            maxLength = oddPal.length;
            longestPal = oddPal;
        }

        if (evenPal.length > maxLength) {
            maxLength = evenPal.length;
            longestPal = evenPal;
        }
    }

    return longestPal;
}

let str = 'bananas';
let longestPalindromicSubstring = longestPalindrome(str);
console.log("Longest palindromic substring:", longestPalindromicSubstring);
