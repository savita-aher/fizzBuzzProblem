
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

