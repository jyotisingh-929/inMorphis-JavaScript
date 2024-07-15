function convertToFahrenheit(celsius) {
    let cToF = (9 / 5) * celsius + 32;
    console.log(`${celsius} \xB0C is ${cToF} \xB0F`);
}
function convertToCelsius(fahrenheit) {
    let fToC = (fahrenheit - 32) * (5 / 9);
    console.log(`${fahrenheit} \xB0F is ${fToC} \xB0C`);
}
convertToFahrenheit(60);
convertToCelsius(45);
