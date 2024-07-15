const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

function calculateAverage(students) {
    let totalMarks = 0;
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks;
    }
    return totalMarks / students.length;
}

function determineGrade(averageMarks) {
    if (averageMarks < 60) {
        return "F";
    } else if (averageMarks < 70) {
        return "D";
    } else if (averageMarks < 80) {
        return "C";
    } else if (averageMarks < 90) {
        return "B";
    } else {
        return "A";
    }
}

const averageMarks = calculateAverage(students);
console.log(`The average marks are ${averageMarks}`);

const grade = determineGrade(averageMarks);
console.log(`The corresponding grade is ${grade}`);
