let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Print object before deleting rollno property
console.log("Before deletion:");
console.log(student);

// Delete rollno property
delete student.rollno;

// Print object after deleting rollno property
console.log("\nAfter deletion:");
console.log(student);
