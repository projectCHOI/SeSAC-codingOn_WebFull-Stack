// Number and string type comparison using typeof
let numberType = typeof 123; // "number"
let stringType = typeof "";  // "string"

// Display the first output line
console.log(`"${numberType}" isn't "${stringType}" data type.`);

// Array and null type checks using typeof
let arrayType = typeof [];   // "object" due to array
let nullType = typeof null;  // "object" due to null

// Display the second output line
console.log(`typeof를 array나 null에 사용하면 "${arrayType}" 결과를 얻을 수 있습니다.`);


// 엥
let number = 10
let string = "안녕"
let array = [1, 2, 3]

console.log(`${typeof number} isn't ${typeof string} data type.`)
console.log(`typeof 를 array이나 null 에 사용하면, ${typeof array}결과를 얻을 수 있습니다.`)