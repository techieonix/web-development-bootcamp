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

HTTP - HyperText Transfer Protocol
Transfer protocol is a language that allows computers to talk to each other across the internet.

The purpose of HTTP is for client computers to connect with server side.

HTTP Request Vocabulary:
1. GET - When you want to request a resource from the server like HTML website or data from database.
2. POST - Sending resource to the server like sending email and password to signup.
3. PUT - When you want to replace a resource and update a reource completely.
4. PATCH - When you want to patchup a resource and update some part of resource. 
5. DELETE - Deletes resource from server or database. This is a request from a client side computer to the server side computer saying that there is something that needs to be deleted.

Adding HTTP Request to a server:
import express from "express";
import app = express();
app.get("/", (req, res) => {   //trying to make a GET request to the root which is the homepage
    res.send("Hello World!)";
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

req - Request
res - Response
rawHeaders are basically a value of key/value pairs that come from where the request originated.

https://dev.to/sylwiavargas/how-to-properly-close-a-port-2p36

nodemon index.js - With this command, we don't have to stop and restart server everytime when we make changes.

-g means we want to install something globally, means we want to use it in other projects as well.

/destination is the endpoint. Destination can be any page like About or Contact.

404 is a HTTP Standard Status Response Code.

HTTP Response Status Codes:
1. Informational Responses (100-199)
2. Successful Responses (200-299)
3. Redirection Responses (300-399)
4. Client Error Responses (400-499)
5. Server Error Responses (500-599)

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

A POST Request is usually made in the form of HTML forms.

https://www.postman.com/downloads/
https://web.postman.co/

res.send - sends a response.
res.sendStatus - sends the status code.