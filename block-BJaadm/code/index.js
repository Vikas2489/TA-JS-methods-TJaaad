let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let personName = persons.map((array) => {
    return array.sex;
})

// Create an array peopleGrade and store the value of grade key from persons array

let personGrade = persons.map((array) => {
    return array.grade;
})

// Create an array peopleSex and store the value of sex key from persons array

let personSex = persons.map((array) => {
    return array.sex;
})

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let peopleNamee = persons.map((element) => {
    return element.name;
})

let filteredName = peopleNamee.filter(function(elementt) {
    return elementt.startsWith("J") || elementt.startsWith("P");
})

filteredName.forEach((ele) => (console.log(ele)))


// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let peopleNamee = persons.map((element) => {
    return element.name;
})

let filteredNames = peopleNamee.filter(function(Namee) {
    if (Namee.startsWith("A") || Namee.startsWith("C")) {
        return Namee;
    }
})

filteredNames.forEach((ele) => (console.log(ele.length)))


// Log all the filtered male ('M') in persons array

persons.filter(function(element) {
    if (element.sex === "M") {
        return (element);
    }
})

// Log all the filtered female ('F') in persons array

let allFemale = persons.filter(function(element) {
    if (element.sex === "F") {
        return (element);
    }
})

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let females = allFemale.filter((element) => {
    return element.name.startsWith("C") || element.name.startsWith("J")
})

females.forEach((w) => (console.log(w)))

// Log all the even numbers from peopleGrade array

function findEven(num) {
    return num % 2 === 0;
}

let evenNUmbers = persons.filter((element) => {
    return findEven(element.grade);
})

evenNUmbers.forEach((c) => console.log(c.grade))

// Find the first name that starts with 'J' in persons array and log the object

persons.filter(function(element) {
    if (element.name === element.name.indexOf("J")) {
        console.log(element);
    }
})

// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array

// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array