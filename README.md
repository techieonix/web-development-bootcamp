# web-development-bootcamp
The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

Interpreted Languages:
1. Javascript
2. Python
3. Ruby

Compiled Languages:
1. Java
2. C/C++
3. Swift


To open console:
Three dots on top right -> More Tools -> Developer Tools
Sources has snippets to write js code.

  alert   ("Hello")  ;
function     msg    end

alert is used to show msg using a popup.
window.alert("msg");


Data Types:
1. String (string of characters always written with quotations)
2. Number
3. Boolean (true, false)

typeof(value) tells the data type pf the value.

prompt(msg) is same as alert or popup but it allows user to input something.

  var    myName =  "abc";
keyword   Name     Value

var is used to define a variable.
If we want to change the value inside var, we don't need to use var again. We can simply write name = new value.

Rules for defining variable:
1. Give variable meaningful names.
2. You can't use a keyword e.g. var as a variable name, instead you can include keyword in name, e.g. myvar.
3. Variable name cannot begin with a number. We can use them in the middle or at the end.
4. Variable names cannot have spaces.
5. Variable names can only contain letters, numbers, dollar sign and underscore. No other symbols.
6. Use camelcase. e.g. myName


a+b (String Concatenation)
string.length to find number of characters in a string.

string.slice is used to extract some part of the string.
string.slice(start position, end position) e.g. name.slice(0,3)

string.toUpperCase() - to make string uppercase.
string.toLowerCase() - to make string lowercase.
To capitalize first letter only:
1. Slice first letter and make it uppercase.
2. Slice rest string and make it lowercase.
3. Concatenate both.


Arithmatic Operations:
1. Add (+)
2. Subtract (-)
3. Multiply (*)
4. Divide (/)
5. Modulo (%) - Gives remainder of division.

Precedence: Multiply and divide first before add and subtract. Parentheses will be evaluated first if they exist.


x++ (x = x + 1) or (x += 1) - Increment
x-- (x = x - 1) or (x -= 1) - Decrement


Functions are used when you want to repeat a series of instructions, you put in inside a function and call it whenever you need.

Declaring a Function:
function funcName() {
  code
}

Calling a function:
funcName();


Function with parameters:
function funcName(parameter) {
  code
}

funcName(argument);


Function with outputs and return values:
function funcName(parameter) {
  code
  return something
}

var varName = funcName(argument);

Math.ceil(value)
Math.floor(value)
Math.round(value)
Math.pow(base, exponent)
Math.random()
Random number is always between 0 an 0.9 to 16 decimal places.
If we want to generate a certain range, we multiply random number by that number. e.g. Math.random() * 6 gives random numbers between 0-5.9 to 16 decimal places. If we want to include 6 too, we can floor the number after multiplying and add 1.


Control Flow: If Else Conditions:
if (condition) {
  code
} else if (condition) {
  code
} else {
  code
}

=== means left hand side is equal to right hand side.
!== means left hand side is not equal to right hand side.
> means is greater than.
< means is lesser than.
>= means is greater or equal to.
<= means is lesser or equal to.

=== and == both check for equality. The difference is that === also check for data type too, which means 1 is equal to "1". While == does not care about data type.


Comparators:
&& (AND)
|| (OR)
!(NOT)


Arrays:
var arrayName = [element1, element2, ...]
                    [0]      [1]     ...

array.length gives the number of elements in an array.
array.includes(elementName) checks if the particular element exists in that array.
array.push(value) adds the value to the array.
array.pop deletes the last element from the array.


While Loops:
while (something is true) {
  code
}