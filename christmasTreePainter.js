function paintChristmasTree(thicknessTrunk, thicknessTreeBase) {
  paintTreeTop(thicknessTreeBase);
  paintTrunk(thicknessTrunk, thicknessTreeBase);
}

function paintTreeTop(thicknessTreeBase) {
  let string = "";
  let thicknessCounter = 1;
  for (let i = 0; i < thicknessTreeBase; i += 2) {
    for (let j = 0; j < (thicknessTreeBase - thicknessCounter) / 2; j++) {
      string = `${string} `;
    }
    for (let j = 0; j < thicknessCounter; j++) {
      string = `${string}#`;
    }
    if (i < thicknessTreeBase - 1) {
      string = `${string}\n`;
    }
    thicknessCounter += 2;
  }
  console.log(string);
}

function paintTrunk(thicknessTrunk, thicknessTreeBase) {
  let string = "";
  for (let i = 0; i < 1.5 * thicknessTrunk; i++) {
    for (let k = 0; k < (thicknessTreeBase - thicknessTrunk) / 2; k++) {
      string = `${string} `;
    }
    for (let j = 0; j < thicknessTrunk; j++) {
      string = `${string}#`;
    }
    string = `${string}\n`;
  }
  console.log(string);
}

paintChristmasTree(3, 21);



/* Simpler with repeat method on String

function paintChristmasTree(thicknessTrunk, thicknessTreeBase) {
  paintTreeTop(thicknessTreeBase);
  paintTrunk(thicknessTrunk, thicknessTreeBase);
}

function paintTreeTop(thicknessTreeBase) {
  let tree = "";
  let thicknessCounter = 1;
  
  for (let i = 0; i < thicknessTreeBase; i += 2) {
    tree += " ".repeat((thicknessTreeBase - thicknessCounter) / 2);
    tree += "#".repeat(thicknessCounter);
    tree += "\n";
    thicknessCounter += 2;
  }
  
  console.log(tree);
}

function paintTrunk(thicknessTrunk, thicknessTreeBase) {
  let trunk = "";
  
  for (let i = 0; i < Math.ceil(1.5 * thicknessTrunk); i++) {
    trunk += " ".repeat((thicknessTreeBase - thicknessTrunk) / 2);
    trunk += "#".repeat(thicknessTrunk);
    trunk += "\n";
  }
  
  console.log(trunk);
}

paintChristmasTree(3, 21);

*/
