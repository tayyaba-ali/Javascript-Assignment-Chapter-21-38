
// ----------- Chapter 35-38 Functions ----------

// Task 1
// Write a function that displays current date & time in your browser.

// function tellTime(){
//     var today= new Date();
//     document.write(today);
// }
// tellTime()

// function greetUser(){
//    var firstName=prompt('Write your first name');
//    var secondName=prompt('Write your second name');
//    alert('Hello '+firstName+' '+secondName)
// }
// greetUser();


// Task 3
// Write a function that adds two numbers (input by user) and returns the sum of two numbers. 

// function sum(){
//     var firstNum=+prompt('Enter first number');
//     var secondNum=+prompt('Enter Second number');
//     var result=firstNum+secondNum;
//     alert('The sum of '+firstNum+' and '+secondNum+' is '+result)
// }
// sum();

// Task 4
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser

// function calculator(num1,opera,num2){
//     if(opera==='+'){
//         var result= num1+num2;
//         alert(result)
//     }
//     else if(opera==='-'){
//         var result= num1-num2;
//         alert(result)
//     }
//     else if(opera==='*'){
//         var result= num1*num2;
//         alert(result)
//     }
//     else if(opera==='/'){
//         var result= num1/num2;
//         alert(result)
//     }
//     else{
//         alert('Invalid Operator')
//     }
// }
// var firstNumber=+prompt('Enter first number');
// var operator=prompt('Enter operator');
// var secondNumber=+prompt('Enter Second number');
// calculator(firstNumber,operator,secondNumber);


// Task 5
// Write a function that squares its argument. 

// function square(num){
//     var square=num**2;
//     alert(square)
// }
// var number=+prompt('Enter number to be square')
// square(number);

// Task 6
// Write a function that computes factorial of a number

// function factorial(){
// var n = +prompt('enter n')
// var fact = 1;
// if (n === 1 || n === 0) {
// }
// else {
//     for (var i = n; i >= 1; i--) {
//         fact = fact * i
//     }
// }
// document.write(fact)
// }
// factorial()

// Task 7
// Write a function that take start and end number as inputs & display counting in your browser.

// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + '<br>');
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);

// Task 8
// Write a nested function that computes hypotenuse of a right angle triangle. 
// function calculateHypotenuse(base,perpendicular){







// Task 9
// Write a function that calculates the area of a rectangle.      A = width * height

// function areaCalculate(width,height){
//     var A=width*height;
//     return A;
// }
// var width=+prompt('Enter width of triangle');
// var height=+prompt('Enter height of triangle');
// var result=areaCalculate(width,height);
// document.write(result)

// Task 10
// Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(string) {
//       var check = '';
//       for (var i = string.length - 1; i >= 0; i--) {
//             check += string[i]
//       }
//       if (string === check) {
//             alert(string + ' is a plindrome word')
//       }
//       else {
//             alert(string + ' is  not a plindrome word')

//       }
// }
// var str = prompt('Write any word')
// palindrome(str);

// Task 11
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(){
    var first
}



var str=prompt('Write words to uppercase');
uppercase(str)
