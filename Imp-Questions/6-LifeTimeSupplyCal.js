function calculateSupplyWithFloat(age, amountPerDay) {
    const maxAge = 80; 
    const yearsRemaining = maxAge - age;
    const amountPerYear = amountPerDay * 365.25; // Include leap years in the calculation
    const totalAmount = Math.round(amountPerYear * yearsRemaining);
    
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

calculateSupplyWithFloat(25, 2.5);
calculateSupplyWithFloat(30, 1.2);
calculateSupplyWithFloat(40, 3.8);