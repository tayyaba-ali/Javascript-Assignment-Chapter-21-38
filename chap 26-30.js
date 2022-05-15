// ----------- Chapter 26-30 Maths Methods ----------

// Task 1
// Write a program that takes a positive integer from user & display the following in your browser a. number b. round off value of the number c. floor value of the number d. ceil value of the number.

// var num = +prompt("Enter number: ");
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// document.write('Number :'+num+'<br>')
// document.write('Round off value :'+round+'<br>')
// document.write('Floor value :'+floor+'<br>')
// document.write('ceil value :'+ceil+'<br>')

//Task 2
// Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

//  var num = +prompt("Enter number: ");
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// document.write('Number :'+num+'<br>')
// document.write('Round off value :'+round+'<br>')
// document.write('Floor value :'+floor+'<br>')
// document.write('ceil value :'+ceil+'<br>')

//Task 3
//Write a program that displays the absolute value of a number. 

// var num=+prompt('Enter number :');
// var abs=Math.abs(num);
// document.write('The absolute value of '+num+'  is '+abs)

// Task 4
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 

// var randomNo=Math.random()*6;
// var floor=Math.floor(randomNo);
// document.write('random die value : '+floor)


// Task 5
// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

// var coinValue=Math.random()*3;
// var floor=Math.floor(coinValue);
// console.log(floor)
// if(coinValue<2){
//     document.write(floor+'<br>'+' random coin value : Tails')
// }
// else{
//     document.write(floor+'<br>'+' random coin value : Heads')
// }


// Task 6
// Write a program that shows a random number between 1 and 100 in your browser. 

// var random=Math.random()*100;
// var ceil=Math.ceil(random);
// document.write('random number between 1 and 100:'+ceil)


// Task 7
// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser

// var weight=prompt('Enter your weight in kilogramas');
// var parse=parseFloat(weight);
// document.write('The weight of userr is '+parse.toFixed(1)+' kilograms')

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// var randomNo=Math.ceil((Math.random()*10));
// document.write(randomNo)
// var userInput=prompt('Enter a number in between 1 and 10');
// if(userInput===randomNo){
//     alert('Congratulations  you entered the same number')
// }
// else{
//     alert('Try Again')
// }

//----------End of Chap 26-30