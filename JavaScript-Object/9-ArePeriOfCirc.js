function calculateCircleArea(radius) {
    let area = Math.PI * radius * radius;
    return area.toFixed(2); // Round to 2 decimal places
}

function calculateCirclePerimeter(radius) {
    let perimeter = 2 * Math.PI * radius;
    return perimeter.toFixed(2); // Round to 2 decimal places
}
let radius = parseFloat(prompt("Enter the radius of the circle:"));

if (!isNaN(radius) && radius > 0) {
    let area = calculateCircleArea(radius);
    let perimeter = calculateCirclePerimeter(radius);
    
    console.log(`Area of the circle with radius ${radius} is: ${area}`);
    console.log(`Perimeter of the circle with radius ${radius} is: ${perimeter}`);
} else {
    console.log("Invalid input. Please enter a valid positive number for radius.");
}
