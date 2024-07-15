function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
}
calcCircumference(5);
calcCircumference(10);
calcCircumference(15);

calcArea(5);
calcArea(10);
calcArea(15);
