
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

//Part 3:
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
 console.log(newstring);