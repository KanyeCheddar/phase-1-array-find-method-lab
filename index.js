// code your solution here
/*
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
*/

const record =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]


function isW(season) {
    return season.result === "W";
}

function superbowlWin(record) {
    const isChampion = record.find(isW);
    if(isChampion) {
        return isChampion.year;
    } else {
        return isChampion;
    }
}

console.log(superbowlWin(record))
