function case_insensitive_search(str, searchStr) {
    const lowerStr = str.toLowerCase();
    const lowerSearchStr = searchStr.toLowerCase();

    if (lowerStr.includes(lowerSearchStr)) {
        return "Matched";
    } else {
        return "Not Matched";
    }
}
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));    
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));    
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));   
