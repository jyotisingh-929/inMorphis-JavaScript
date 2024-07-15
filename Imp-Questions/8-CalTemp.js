function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
}
console.log("Celcius To Fahrenheit");
celsiusToFahrenheit(25);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-10);

console.log("Fahrenheit To Celcius");
fahrenheitToCelsius(77);
fahrenheitToCelsius(32);
fahrenheitToCelsius(-4);
