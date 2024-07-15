function sumOfSquares(vector) {
    let sum = 0;
    
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i] * vector[i];
    }
    
    return sum;
}

var numericVector = [1, 2, 3, 4, 5];

var result = sumOfSquares(numericVector);

console.log("Sum of squares:", result); 