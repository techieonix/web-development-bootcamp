# web-development-bootcamp
The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

https://www.npmjs.com/
https://nodejs.org/

A framwork provides pre-built components and structures that can be used to build an application.

Node.js is not basically a framework. It is an asynchronous event-driven Javascript runtime,
It is designed to build scalable network applications.

Asynchronous means it does not have to everything sequentially.
Event driven means it can free up the resources and when the event is triggered, it runs the code.

Node uses V8 engine that is written in C and C++. It powers the chrome browser.

Node.js allows us to build web apps using javascript.
It allows for easy scaling of apps. it is fast and non-blocking.

Node REPL: Node Read Evaluate Print Loop. It is like a runtime environment where we can put in user inputs in form of code. The inputs are read by the computer and evaluated line by line, and the results are returned to the user.
To initiate node REPL, we have to write a command "node".

We can write a javascript file using node and use node to run the entire file by writing command "node fileName.js", e.g. node index.js. Make sure you are in the right directory where the code is.

The file system is a native node module that allows us to access the local storage.

fs.writeFile(file, data[, options], callback)
fs.readFile(path[, options], callback)

NPM - Node Package Manager
We can initialize an NPM project using command "npm init".
To install an NPM package, we write command "npm install packageName".
We can install more than one package in single command by writing "npm install packageName1 packageName2 packageName3 ...".

CJS - Common JS. This method uses require keyword to get hold of node modules or NPM modules.
ESM - EcmaScript. This method uses import keyword.
We can change this by writing type which is CJS by default to change to module (ESM).

package.json is a configuration file.