let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array) {
    return [...array]
        .sort((a, b) => (a.length - b.length))
        .pop();
}

findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.

words.map(function(element) {
    return element.length;
})

// - Create a new array that only contains word with atleast one vowel.

words.filter(function(element) {
    if (element.includes("a") ||
        element.includes("e") ||
        element.includes("o") ||
        element.includes("i") ||
        element.includes("u")) {
        return true;
    } else { return false; }
})

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// words.findIndex((word) => { return word === "rhythm"; })

// - Create a new array that contians words not starting with vowel.

words.filter(function(element) {
    if (element.includes("a") ||
        element.includes("e") ||
        element.includes("o") ||
        element.includes("i") ||
        element.includes("u")) {
        return false;
    } else { return true; }
})

// - Create a new array that contianse words not ending with vowel


function endWithoutVowel(word) {
    if (word.endsWith("a") ||
        word.endsWith("e") ||
        word.endsWith("i") ||
        word.endsWith("o") ||
        word.endsWith("u")) {
        return false;
    } else {
        return true;
    }
}


words.filter(endWithoutVowel);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(array) {
    return array.reduce((acc, b) => (acc + b), 0)
}

let sum = sumArray(numbers);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

numbers.map((number) => (num * 3))

// - Create a new array that contains only even numbers

function findEven(num) {
    return num % 2 === 0;
}

numbers.filter(findEven);

// - Create  a new array that contains only odd numbers.

function findOdd(num) {
    return num % 2 !== 0;
}

numbers.filter(findOdd);

// - Create a new array that should have true for even number and false for odd numbers.

numbers.map(function(num) {
    return num % 2 === 0;
})

// - Sort the above number in assending order.

let assendingOrder = [...numbers].sort((a, b) => (a - b))

// - Does sort mutate the original array?

``
`js

Sort mutates the original array and that's why we should clone it.

`
``

// - Find the sum of the numbers in the array.

array.reduce((acc, b) => (acc + b), 0)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers.

function averageNumbers(array) {
    return sum / array.length
}

averageNumbers(numbers);

let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
];


// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


let sumOfLengths = strings.reduce((acc, b) => (acc + b.length), 0)

function averageWordLength(word2) {
    return sumOfLengths / word2.length;
}