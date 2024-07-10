function createSeries(startValue, endValue, numberForSerie){
    result = [];
    for(let i = startValue; i <= endValue; i++){
        if(i % numberForSerie === 0){
            result.push(i);
        }
    }
    return result;
}


// Testing
const assert = require("assert");
assert(createSeries(0, 10, 3).toString() == [ 0, 3, 6, 9].toString());
assert(createSeries(9,28,5).toString() == [10,15,20,25].toString());


function createSeriesRecursive(startValue, endValue, numberForSerie, result = []) {
    console.log(startValue);
    if (startValue >= endValue) {
        return result;
    }
    if (startValue % numberForSerie === 0) {
        result.push(startValue);
    }
    // Korrigierter rekursiver Aufruf mit Rückgabe
    return createSeriesRecursive(startValue + 1, endValue, numberForSerie, result);
}

// Testen der Funktion
console.log(createSeriesRecursive(9, 100, 10)); // sollte [10, 20, 30, 40, 50, 60, 70, 80, 90] zurückgeben
