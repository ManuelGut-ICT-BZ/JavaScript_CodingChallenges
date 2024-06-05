function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  return word1.toLowerCase().split("").sort().toString() == word2.toLowerCase().split("").sort().toString();
}

// Testing
const assert = require("assert");
assert(isAnagram("Listen", "Silent"));
assert(isAnagram("Elbow", "Below"));
assert(!isAnagram("Hello", "Hallo"));
assert(!isAnagram("Hello", "Hello "));
