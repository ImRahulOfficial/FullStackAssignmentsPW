/* Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.  */


let num = 10;

let sum = 0;
let i = 1;

do {
    sum += i;
    i++;
}while (i <= num);

console.log("sum of given integer is : " + sum);