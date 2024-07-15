function truncate_string(input, length) {
    let truncated = '';

    for (let i = 0; i < length && i < input.length; i++) {
        truncated += input[i];
    }

    return truncated;
}
console.log(truncate_string("Robin Singh", 8)); 
