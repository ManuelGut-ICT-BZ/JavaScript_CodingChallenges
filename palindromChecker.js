function isPalindrom(word) {
  wordArray = word.toLowerCase().split("");
  wordReversedArray = wordArray.toReversed();

  console.log(`${wordArray.toString()} | ${wordReversedArray.toString()}`);
  return wordArray.toString() === wordReversedArray.toString();
}

// Testing
const assert = require("assert");
assert(isPalindrom("Anna"));
assert(isPalindrom("Level"));
assert(!isPalindrom("Halloh"));
