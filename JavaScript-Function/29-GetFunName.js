function getFunctionName(fn) {
    return fn.name;
}

function sampleFunction() {
    console.log("Hello from sampleFunction!");
}

let result = getFunctionName(sampleFunction);
console.log("Function name:", result); 
