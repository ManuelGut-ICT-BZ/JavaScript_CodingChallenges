function countLetterInText(letter, text) {
  const letterLowerCase = letter.toLowerCase();
  const textLowerCase = text.toLowerCase();
  let counter = 0;
  const splittedText = textLowerCase.split("");
  splittedText.forEach((element) => {
    if (element === letterLowerCase) {
      counter++;
    }
  });
  console.log(`Der Buchstabe ${letter} kommt ${counter} mal vor.`);
  return counter;
}

// Testing
const assert = require("assert");
assert(5 === countLetterInText('m', "In mir kommt der Buchstabe 'M' fünfmal vor."));
assert(1 === countLetterInText('q', "In mir kommt der Buchstabe 'q' einmal vor."));
