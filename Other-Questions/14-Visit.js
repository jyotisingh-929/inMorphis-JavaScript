// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to check if a cookie exists
function cookieExists(cookieName) {
    return getCookie(cookieName) !== "";
}

// Function to update visit information
function updateVisitInfo() {
    const visitCountElement = document.getElementById('visitCount');
    const lastVisitTimeElement = document.getElementById('lastVisitTime');

    let visitCount = parseInt(getCookie('visitCount')) || 0;
    visitCount++;
    setCookie('visitCount', visitCount, 365); // Cookie expires in 1 year

    visitCountElement.textContent = `You have visited ${visitCount} time(s)!`;

    const now = new Date();
    const lastVisitFormatted = `Last visited on: ${now.toLocaleString()}`;
    setCookie('lastVisit', lastVisitFormatted, 365); // Update last visit cookie
    lastVisitTimeElement.textContent = lastVisitFormatted;
}

// Call updateVisitInfo function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitInfo);
