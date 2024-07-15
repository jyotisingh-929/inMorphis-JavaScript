function humanize_format(number) {
    if (typeof number === 'undefined') {
        return '';
    }

    // Determine the suffix based on the last digit of the number
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return number + 'th';
    }

    switch (lastDigit) {
        case 1:
            return number + 'st';
        case 2:
            return number + 'nd';
        case 3:
            return number + 'rd';
        default:
            return number + 'th';
    }
}
console.log(humanize_format());  
console.log(humanize_format(1));  
console.log(humanize_format(8));  
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 