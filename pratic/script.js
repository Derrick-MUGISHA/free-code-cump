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


function getMillisecondsBetween(date1, date2) {
    // Convert both dates to milliseconds
    const time1 = date1.getTime();
    const time2 = date2.getTime();
    
    // Subtract one time from the other to get the difference
    const difference = Math.abs(time1 - time2);
    
    // Return the difference
    return difference;
}

// Correctly initializing the dates
const date1 = new Date("Wed Mar 02 2005 12:01:15 GMT+0200");
const date2 = new Date("Wed Mar 02 2005 12:00:05 GMT+0200");

// Calling the function to get the difference
const difference = getMillisecondsBetween(date1, date2);

console.log(difference); // Output: 70000




function sumMath(a, b) {
  return Math.abs(a - b);
}

console.log(sumMath(1, 2));


function getMonthOfTheYear(date) {
    const months = [
       "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
   ];

   const monthNumber = date.getMonth();

   const monthName = months[monthNumber];

return monthName;
   
}

const myDate = new Date("Wed Dec 25 2024 18:15:00 GMT+0200");

console.log(getMonthOfTheYear(myDate));


function getDevelopers(employees) {

    const developers = employees.filter(employee => employee.job === "developer");
    
    return developers;
    
}

const employees = [
    { age: 28, job: "developer", name: "Alice" },
    { age: 35, job: "designer", name: "Bob" },
    { age: 42, job: "manager", name: "Charlie" },
    { age: 31, job: "developer", name: "David" }
];

const result = getDevelopers(employees);
console.log(result);
