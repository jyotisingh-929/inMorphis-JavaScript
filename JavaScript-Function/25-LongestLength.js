function Longest_Country_Name(countries) {
    let longestCountry = '';

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestCountry.length) {
            longestCountry = countries[i];
        }
    }

    return longestCountry;
}

let countries = ["Australia", "Germany", "United States of America"];
let longestCountryName = Longest_Country_Name(countries);
console.log("Longest country name:", longestCountryName);
