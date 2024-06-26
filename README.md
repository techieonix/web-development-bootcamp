# web-development-bootcamp
The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

EJS - Embedded JavaScript

To pass something from our server to be rendered in an HTML file. This is done using templating.

In order to do separation of concerns, i.e. separating HTML(content) and CSS(styline) from JS(functionality), and separating frontend from backend, we need to use templating language. EJS, twig(for PHP), handlebars, pug and jinja(for python) are some of the templating languages.
EJS is the most common language used with node and express.

It is like having a little javascript modulebthat can run javascript code inside.
<% code %>

res.sendFile is only for static files.

res.render(fileName, JS object)
fileName is the file we want to render, and object passes properties and key/value pair.
The key must match the name we use in our destination rendered file.

EJS Tags:
<%= Variable %> - JS Output
<% console.log("Hello") %> - JS Execute, does not run anything on screen
<%- <h1>Hello</h1> %> - Render HTML
<%%  %%> - Escape the EJS tag, show <% or %>, used to display EJS tag
<%# This is a comment %> - Stop Execution
<%- include("<FIELNAME>") %> - Insert another EJS File

locals.varName is a way to access all variables that get sent over with res.render.
res.locals = {data: value}

If we add stylesheets in head sections of ejs file, it won't work. Because these files are static files.
For static files in node based backend, we create a folder named public and put all static files in that.
Public folder is on top of the project.

To tell express where our static files are located, we use the middleware
app.use(express.static("public"));

Once we tell express where public folder is, it will treat everything inside as a static file.

When we create stylesheet links, the href will be relative to the location of public folder.
public/styles/layout.css

The way file path works in node and express for dynamic files is different from static files.

Partials is when we add a repetitive part of code by writing it in a separate file and using EJS tag
<%- include("<FIELNAME>") %> 