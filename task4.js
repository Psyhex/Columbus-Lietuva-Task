function countLetters(string) {
    let vowelCount = 0;
    let consonantCount = 0;
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (letter.match(/[a-ząęėįųū]/i)) {
            if (letter.match(/[aeiouąęėįųū]/i)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    return [vowelCount, consonantCount];
}

const inputString = "Programuotojo ar tiesiog bet kokio IT specialisto profesija taps vis labiau įprasta.";
const [vowels, consonants] = countLetters(inputString);

console.log("Vowel cout: ", vowels);
console.log("Consonant count: ", consonants);