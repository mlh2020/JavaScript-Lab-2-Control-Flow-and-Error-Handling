/**
 * 
 * 
 * Growth Control System
 * 
 * 
 */

/**
 * Part One
 */

//Formula for calculating area
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

//Information given
let plantCount = 20;
let growthPerWeek = plantCount * 2;
let minSpacePerPlant = 0.8;

//Factors to influence plant decision
let pruneTime = Math.floor(area * 0.8);
let monitorTime = Math.floor(area * 0.5); 


//Different amount of weeks to test
//let numOfWeeks = 1;
//let numOfWeeks = 2;
let numOfWeeks = 3;


let endPlantCount = plantCount * Math.pow(2, numOfWeeks);
console.log(endPlantCount);



if (endPlantCount > pruneTime) {
    console.log("Prune");
} else if (endPlantCount > monitorTime && endPlantCount <= pruneTime) {
    console.log("Monitor");
} else if (endPlantCount < monitorTime) {
    console.log("Plant");
} 

/**
 * Part Two
 */
//Algebra notes + brainstorming
//newArea = PI * radius * radius;
//newArea / PI = radius * radius;
//Math.sqrt(newArea / PI) = radius;

let newPlantCount = 100;
let newNumOfWeeks = 10;
let newEndPlantCount = newPlantCount * Math.pow(2, newNumOfWeeks);

const newArea = newEndPlantCount * minSpacePerPlant;
const newRadius = Math.sqrt(newArea / PI);
const addSpaceReq = newArea - area;

console.log(Math.floor(newRadius));
console.log(Math.floor(addSpaceReq));

/**
 * Part Three
 * 
 */

try {
    if (endPlantCount > pruneTime) {
        throw "Nope";
    }
} catch (error) {
    console.log(error);
}

//Feel free to correct me if I'm wrong!
