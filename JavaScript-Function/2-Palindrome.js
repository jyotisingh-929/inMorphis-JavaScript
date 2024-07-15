function isPalindrome(str) {
   
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let reversedStr = cleanedStr.split('').reverse().join('');
   
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("madam"));         
console.log(isPalindrome("nurses run"));    
console.log(isPalindrome("hello"));  