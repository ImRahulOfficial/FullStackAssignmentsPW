/* Q1 Writ a program that grads studnts basd on thir marks
 If gratr than 90 thn A Grad
 If btwn 70 and 90 thn a B grad
 If btwn 50 and 70 thn a C grad
 Below 50 thn an F grade */

let marks = 98;

if(marks >= 90){
    console.log("A grad");
}
else if(marks >= 70 && marks < 90){
    console.log("B grad");
}
else if(marks >= 50 && marks < 70){
    console.log("C grad");
}
else{
    console.log("F grad");
}
