function computeSumAndProduct(arr) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];      
        product *= arr[i];  
    }

    return { sum: sum, product: product };
}
var integersArray = [1, 2, 3, 4, 5];
var result = computeSumAndProduct(integersArray);
console.log("Sum:", result.sum);         
console.log("Product:", result.product); 
