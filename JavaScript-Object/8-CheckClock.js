function printTime() {
    let now = new Date();
    let hours = ('' + now.getHours()).padStart(2, '0');
    let minutes = ('' + now.getMinutes()).padStart(2, '0');
    let seconds = ('' + now.getSeconds()).padStart(2, '0');
    
    console.log(`"${hours}:${minutes}:${seconds}"`);
}
setInterval(printTime, 1000);
