function string_parameterize(input) {
    // Convert the input string to lowercase and trim leading/trailing spaces
    let parameterized = input.toLowerCase().trim();
    
    // Replace spaces with hyphens
    parameterized = parameterized.replace(/\s+/g, '-');
    
    // Remove special characters using regex
    parameterized = parameterized.replace(/[^\w\s-]/g, '');
    
    return parameterized;
}

// Test case
console.log(string_parameterize("Robin Singh from USA.")); // Output: "robin-singh-from-usa"
console.log(string_parameterize("Hello World!!!")); // Output: "hello-world"
console.log(string_parameterize("This Is a Test-String.")); // Output: "this-is-a-test-string"
