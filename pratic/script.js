function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

const numbers = [17, 42, 9, 31, 56]; 


console.log(doubleNumbers(numbers));

function everyNPositions(message, step) {
    if (step <= 0 || message.length === 0) {
        return "";
    }
    let result = "";
    for (let i = 0; i < message.length; i++) {
        if (i % step === 0) {
            result += message[i];
        }
    }
    return result;
}

const message = "Which framework should I choose?";

const step = 6;

console.log(everyNPositions(message, step));

function getLongestString(arrayOfStrings) {
    if (arrayOfStrings.length === 0) {
       return "";
   }
   let longest = arrayOfStrings[0];
   for (let i = 1; i < arrayOfStrings.length; i++) {
       if (arrayOfStrings[i].length > longest.length) {
           longest = arrayOfStrings[i];
       }
   }
   return longest;
}
const arrayOfStrings = [  
   "Montgomery",   
   "Juneau",   
   "Phoenix",   
   "Little Rock",   
   "Sacramento",   
   "Denver",   
   "Washington, D.C.",   
   "Hartford"  
];  

console.log(getLongestString(arrayOfStrings));

function mostRepetitions(string1, string2, letter) {
    const count1 = string1.split(letter).length - 1; 
   const count2 = string2.split(letter).length - 1; 
   return count1 >= count2 ? string1 : string2;
}

string1 = "Los Angeles",

string2 = "Texas",

letter = "s"

console.log( mostRepetitions(string1, string2, letter));