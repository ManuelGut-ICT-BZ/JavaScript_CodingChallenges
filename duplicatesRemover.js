function removeDuplicates(array) {
  arrayWithoutDuplicates = [];
  array.forEach((element) => {
    if (!arrayWithoutDuplicates.includes(element)) {
      arrayWithoutDuplicates.push(element);
    }
  });
  console.log(arrayWithoutDuplicates.toString());
  return arrayWithoutDuplicates;
}

// Testing
const assert = require("assert");
assert([1, 2, 3, 4, 5].toString() === removeDuplicates([1, 2, 3, 3, 4, 4, 5]).toString());
assert(["Hallo,Welt"].toString() === removeDuplicates(["Hallo", "Hallo", "Welt"]).toString());
assert(!(["Hallo,Welt"].toString() === removeDuplicates(["Hallo", "schöne", "Hallo", "Welt"]).toString()));
