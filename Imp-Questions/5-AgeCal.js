function calculateAge(birthYear, currentYear) {
    const age1 = currentYear - birthYear;
    const age2 = age1 - 1;
    console.log(`You are either ${age1} or ${age2}`);
}

calculateAge(1990, 2024);
calculateAge(1985, 2024);
calculateAge(2000, 2024);

// Bonus: 
function calculateAgeWithCurrentYear(birthYear) {
    const currentYear = new Date().getFullYear();
    const age1 = currentYear - birthYear;
    const age2 = age1 - 1;
    console.log(`You are either ${age1} or ${age2}`);
}

calculateAgeWithCurrentYear(1990);
calculateAgeWithCurrentYear(1985);
calculateAgeWithCurrentYear(2000);
