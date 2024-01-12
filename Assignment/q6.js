/* Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%. */

let paymentMethods = "paypal";

switch (paymentMethods) {
    case "credit":
        console.log("Processing fees for credit card payment is : 2% ");
        break;

    case "debit":
        console.log("Processing fees for debit card payment is : 1.5% ");
        break;

    case "paypal":
        console.log("Processing fees for PayPal payment  is : 3% ");
        break;

    default:
        console.log("Not Valid Payment Methods");
}