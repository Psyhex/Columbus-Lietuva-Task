function createArray(length, min, max) {
    let array = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNumber);
    }
    return array;
}
const arrayLength = 100;
const minNumber = 0;
const maxNumber = 1000;

const randomNumberArray = createArray(arrayLength, minNumber, maxNumber);

console.log(randomNumberArray);

function findNumbers(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return { min, max };
}

const result = findNumbers(randomNumberArray);
console.log("Smallest number is: " + result.min);
console.log("Largest number is: " + result.max);