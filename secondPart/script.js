// create students array
var students = [
    {
        firstName: "anas",
        lastName: "AQrabawi",
        address: "denmark",
        telephone: "86543463",
        postCode: "1050",
        course: "Javascript",
        grade: 72
    },
    {
        firstName: "samara",
        lastName: "sallam",
        address: "denmark",
        telephone: "24584534",
        postCode: "1050",
        course: "Javascript",
        grade: 82
    },
    {
        firstName: "zoe",
        lastName: "zou",
        address: "cph",
        telephone: "3456789",
        postCode: "1050",
        course: "Javascript",
        grade: 88
    },
    {
        firstName: "Marco ",
        lastName: "De Cara",
        address: "dk",
        telephone: "456789567",
        postCode: "1050",
        course: "Javascript",
        grade: 61.5
    },
    {
        firstName: "Krishna",
        lastName: "rana",
        address: "dk",
        telephone: "85625657",
        postCode: "1050",
        course: "Javascript",
        grade: 64
    },
    {
        firstName: "Sajid",
        lastName: "nazir",
        address: "denmark",
        telephone: "36585635",
        postCode: "1050",
        course: "Javascript",
        grade: 87.5
    },
    {
        firstName: "Haretha",
        lastName: "Al Shikh",
        address: "Dk",
        telephone: "3464573",
        postCode: "1050",
        course: "Javascript",
        grade: 70
    }
];

// Get students grades in a new array
var getGrades = [];
for (var i = 0; i < students.length; i++) {
    getGrades.push(students[i].grade);
}
console.log(getGrades);


// find the avarage 
var gradesAvg = 0;
for (let i = 0; i < getGrades.length; i++) {
    gradesAvg = gradesAvg + getGrades[i] / getGrades.length;
}
console.log("The average class grade is: " + gradesAvg.toFixed(2));



// Find highest and lowest grades
var lowestGrade = Math.min(...getGrades);
var highestGrade = Math.max(...getGrades);

for (var i = 0; i < students.length; i++) {
    if (students[i].grade === lowestGrade) {
        console.log(students[i].firstName + " has the lowest grade (" + lowestGrade + ")");
    } else if (students[i].grade === highestGrade) {
        console.log(students[i].firstName + " has the highest grade (" + highestGrade + ")");
    } else {
        console.log();
    }
}