// code your solution here

const eyeOfAChampion = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

const bummySeason =  [ 
    { result: "N/A" }, 
    { result: "N/A" }, 
    { result: "N/A" } 
]

function isW(season) {
    return season.result === "W";
}

function superbowlWin(record) {
    const isChampion = record.find(isW);
    //debugger;
    if(isChampion) {
        return isChampion.year;
    } else {
        return isChampion;
    }
}

console.log(superbowlWin(eyeOfAChampion))
console.log(superbowlWin(bummySeason))

