function countAllLettersInText(text, letterSetObject){    
  const textLowerCase = text.toLowerCase();
  const result = {};

  for(let letter in letterSetObject){
      result[letter] = countLetterInText(letter, textLowerCase);
  }
  return result;
}

function countLetterInText(letter, text) {
  const letterLowerCase = letter.toLowerCase();
  let counter = 0;

  for (let char of text) {
      if (char === letterLowerCase) {
          counter++;
      }
  }
  return counter;
}

const letterSetObject = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
  ä: 0,
  ö: 0,
  ü: 0,
  ß: 0
};

// Testing
console.log(countAllLettersInText("In mir kommt der Buchstabe 'M' fünfmal vor.", letterSetObject));
