
//Part1: FizzBuzz Problem
let num;
for (let num = 1; num <= 100; num++) 
    {
        if (num%3 == 0 && num%5 == 0) 
        {
        console.log(`Number ${num} is divisible by 3 & 5 Print FizzBuzz....`);
        } 
        else if (num%3 == 0) 
        {
        console.log(`Number ${num} is divisible by 3 Print Fizz....`);
        } 
        else if (num%5 == 0) 
        {
        console.log(`Number ${num} is divisible by 5 Print Buzz....`);
        } 
        else  
        {
        console.log(`THis Number is not divisible by 3 & 5 : ${num}`);
        } 
       
    }

/*Part 3:
const str="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz,Master,58\n98,Bill,Doctor's Assistant,26";

let newstring = "";
for (let i = 0; i < str.length; i++) 
    {
    if (str[i] == "\n") {
        console.log(newstring);
        newstring = "";
    } else {
        newstring += str[i];
    }
    }
 console.log(newstring);*/

 //// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

//  Variables
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0; // Counter variable

// Loop through string, for loop to have access to the index
for (let i = 0; i < csvStr.length; i++) {
  if (csvStr[i] == ",") {
    // If comma
    commas++; // Add to comma counter
  } else if (csvStr[i] == "\n") {
    // If new line
    console.log(cell1, cell2, cell3, cell4); // print new line

    // Clear previous data for new row
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // for all chars
    if (commas == 0) {
      // put in the appropriate cell, based on commas
      cell1 += csvStr[i];
    } else if (commas == 1) {
      cell2 += csvStr[i];
    } else if (commas == 2) {
      cell3 += csvStr[i];
    } else {
      cell4 += csvStr[i];
    }
  }

  // If last char in string print final cells
  if (csvStr.length - 1 == i) {
    console.log(cell1, cell2, cell3, cell4);
  }
}

//  How can I tell when a cell ends? commas!!!