
function executeFunction(fnPara) {
    console.log("Executing the passed function:");
    fnPara();
}

function sampleFunction() {
    console.log("Hello from the sample function!");
}

executeFunction(sampleFunction);
