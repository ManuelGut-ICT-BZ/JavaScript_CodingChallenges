
function countAllLettersInText(text, letterSetObject){    
    for(let letter in letterSetObject){
        letterSetObject[letter]= countLetterInText(letter, text);
    }
    console.log(letterSetObject);
    return letterSetObject;
}


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
  const assert = require("assert");
  countAllLettersInText("In mir kommt der Buchstabe 'M' fünfmal vor.", letterSetObject);
  