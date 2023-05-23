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
const maxNumber = 150;

const randomNumberArray = createArray(arrayLength, minNumber, maxNumber);

console.log(randomNumberArray);

function findSameNumbers(array) {
    let sameNumbers = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && !sameNumbers.includes(array[i])) {
                sameNumbers.push(array[i]);
            }
        }
    }
    return sameNumbers;
}
console.log(findSameNumbers(randomNumberArray));