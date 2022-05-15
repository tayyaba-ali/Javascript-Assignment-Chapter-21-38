// ----------- Chapter 21-25 String Methods ----------

// Task 1
//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

// var firstName=prompt('Write your first name');
// var lastName=prompt('Write your last name');
// alert('Hello '+firstName+' '+lastName)

// Task 2
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var userMobile=prompt('Write your favourite mobile phone model');
// var length=userMobile.length;
// document.write('My favourite phone is :'+userMobile+'<br>'+'Length of string:'+length);


// Task 3
//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var word='Pakistani';
// var indexNo=word.indexOf("n");
// document.write('String :'+word+'<br>'+" Index of 'n' :"+indexNo);

// Task 4
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word='Hello World';
// var lastIndex=word.lastIndexOf('l');
// document.write('String :'+word+'<br>'+"  Last index of 'l' :"+lastIndex);

//Task 5
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word='Pakistani';
// var indexChar=word.charAt(3);
// document.write('String :'+word+'<br>'+"  Character at index 3 :"+indexChar);

//Task 6
// Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// alert('Hello '+firstName.concat(lastName))

//Task 7
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city='Hyderabad';
// var replace=city.replace('Hyder','Islam');
// document.write('City :'+city+'<br>'+'After replacement :'+replace)

//Task 8
//  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace=message.replace(/and/g,'&');
// document.write('Message :'+message+'<br>'+'After replacement :'+replace)

// Task 9
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// var num = Number(str);
// document.write("value: " + str + "<br>");
// document.write("Type: " + typeof(str) + "<br>");
// document.write("value: " + num + "<br>");
// document.write("Type: " + typeof(num) + "<br>");

//Task 10
// Write a program that takes user input. Convert and show the input in capital letters.

// var userInput=prompt('Please enter any word');
// var capital=userInput.toUpperCase();
// document.write('User input :'+userInput+'<br>'+'Upper Case :'+capital)

//Task 11
// Write a program that takes user input. Convert and show the input in title case.


// var userInput=prompt('Please enter any word');
// var firstChar=userInput.slice(0,1);
// firstChar=firstChar.toUpperCase();
// var otherChars=userInput.slice(1);
// otherChars=otherChars.toLowerCase();
// var titleCase=firstChar+otherChars;
// document.write('User Input :'+userInput+"<br>"+'Title case :'+titleCase );

// Task 12
// Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 

// var num=35.36;
// var str=num.toString();
// var dotIndex=str.indexOf('.');
// var result=str.slice(0,dotIndex)+str.slice(dotIndex+1);
// document.write('Number :'+str+'<br>'+'Result ' +result);

//Task 13
//Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// var userInput=prompt('Enter your name: ');
// var charCode;
// for(var i=0;i<userInput.length;i++){
//     charCode=userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }

// }

// Task 14
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("What do you want to order: ");
// userInput = userInput.toLowerCase();
// var check = false;
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false) {
//     document.write("We are sorry. " + userInput + " is not available in our bakery");
// }

// Task 15
// Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long.

// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;

//Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);

    //Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

    //Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

//Checking for Numbers
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

//Checking for first letter
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

//Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }


// Task 16
// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;

// var str='University of Karachi';
// var arr =str.split("");
// for(var i=0;i<str.length;i++){
//     document.write(arr[i]+'<br>')
// }

// Task 17
// Write a program to display the last character of a user input. 

// var userInput=prompt('Write any word');
// document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1])

// Task 18
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str='The quick brown fox jumps over the lazy dog';
// str =str.toLowerCase();
// var count=str.match(/the/g);
// var length=count.length;
// document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"'

// ---------------------------End of Chap 21-25