const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let roseN = 50;
let lilyN = 20;
let tulipN = 120;

let roseTotal = rosePrice * roseN;
let lilyTotal = lilyPrice * lilyN;
let tulipTotal = tulipPrice * tulipN;

let total = roseTotal + lilyTotal + tulipTotal;

//---------------------------------------------------------------------------------------------------------------------//

console.log("Rose - unit price: " + rosePrice + ", quantity: " + roseN + ", value: " + roseTotal);
console.log("Lily - unit price: " + lilyPrice + ", quantity: " + lilyN + ", value: " + lilyTotal);
console.log("Tulip - unit price: " + tulipPrice + ", quantity: " + tulipN + ", value: " + tulipTotal);

console.log("Total: " + total);

