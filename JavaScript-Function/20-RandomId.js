function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    
    for (let i = 0; i < length; i++) {
        // Pick a random character from the character list
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    
    return result;
}

let randomId = generateRandomId(10);
console.log("Generated ID:", randomId);
