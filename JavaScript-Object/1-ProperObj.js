let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function listProperties(obj) {
    let properties = [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            properties.push(key); // Push each key into the array
        }
    }

    return properties.join(',');
}

let result = listProperties(student);
console.log(result);  // Output: name,sclass,rollno
