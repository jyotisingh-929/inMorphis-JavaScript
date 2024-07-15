function printRotateString(str) {
    let rotateString = str;

    setInterval(() => {
        rotateString = rotateString.slice(-1) + rotateString.slice(0, -1);
        console.log(rotateString);
    }, 1000);
}
printRotateString('w3resource');