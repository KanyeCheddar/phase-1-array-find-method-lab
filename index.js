// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

/*
function isCherries(fruit) {
    return fruit.name === "cherries";
  }

console.log(inventory.find(isCherries));

function isW(season) {
    return season.result === "W";
  }
*/

function superbowlWin(array) {
    for(const season of array) {
        if(season.result === "W") {
            return season.year;
        }
    }
}