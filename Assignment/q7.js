/* Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate". */

let temperature = 25;

let weatherCondition = temperature > 30 ? "Hot" : "Moderate";

console.log(`current weather condition is : ${weatherCondition}`);