function protect_email(email) {
    // Split the email address into local and domain parts
    let parts = email.split('@');
    
    // Ensure there are two parts (local and domain)
    if (parts.length === 2) {
        let local = parts[0];
        let domain = parts[1];
        
        // Mask characters in the local part of the email
        let maskedLocal = local.substring(0, Math.min(local.length, 5)) + '...';
        
        // Concatenate masked local part and domain part
        return maskedLocal + '@' + domain;
    } else {
        // Return original email if it doesn't match expected format
        return email;
    }
}

// Test case
console.log(protect_email("robin_singh@example.com")); // Output: "robin...@example.com"
console.log(protect_email("john.doe123@company.co.uk")); // Output: "john....@company.co.uk"
console.log(protect_email("emailwithoutat.com")); // Output: "emailwithoutat.com" (no change)
