# web-development-bootcamp
The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

https://expressjs.com/

Node.js is not a framework, it is a runtime environment.
Runtime environment means it allows us to run javascript on the computer.

Express.js is a javacript framework that allows us to run backend. It allows us to use javascript and node to create backend.

A simple backend can consist of application and a server computer.

Creating an express server:
1. Create directory.
2. Create index.js file.
3. Initialize NPM.
4. Install the Express package.
5. Write server application in index.js.
6. Start server.

Creating a basic server:
import express from "express";
import app = express();   //creating app using express object
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

listen is a method in which we specify two things. First is the port which is the location of server where we listen for requests from client side. Second is a callback function that triggers when server is setup.

To run server, we use command node appName.js.

localhost is when we don't have a server on internet and instead, we want to host our server locally.
We can access it with localhost:portNumber.

A port is like a bunch of doors on a server computer, and each of these doors have an address.

To see which ports are currently listening for interactions from outside, we use command "netstat -ano | findstr "LISTENING"".