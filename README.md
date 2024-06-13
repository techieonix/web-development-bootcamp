# web-development-bootcamp

The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

https://jquery.com/
https://developers.google.com/speed/libraries#jquery
https://www.minifier.org/

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

Always place this link at the end of the body before <script src="index.js"></script>

jQuery is the library of JavaScript.
Instead of writing document.querySelector("h1") we can simply write jQuery("h1") or $("h1").
$ works exactly the same as document.querySelector.
for document.querySelectorAll(tagName) we use the same $(tagName).

If we put the JS and jQuery links inside the head tag, we will need to check if our jQuery library is ready, to make the code run perfectly, we write:
$(document).ready(function() {
    code
})
If we put the links at the end of the body tag, we don't need to use ready() method.

To manipulate style using jQuery, we simply use .css() method.
e.g. $(tagName).css(property, value)

We can check the value of a property using
console.log($(tagName).css(property))

Instead of using css() method in jQuery, if we want to add a CSS class from style.css, we can write
$(tagName).addClass(className)
To remove the class we use
$(tagName).removeClass(className)

We can add multiple classes using
$(tagName).addClass(className1 className2 ...)

To see if the element has a particular class, we use
$(tagName).hasClass(className)

We can change text of a tag using
$(tagName).text(newText)

If we want to add HTML as well, i.e. text and new tags, we write
$(tagName).html(<tag>text</tag>)

To manipulate attributes using jQuery, we use attr() method.
$(tagName).attr(attributeName, newValue)

A class is also an HTML attribute.
We can check all class that are currently applied to a tag using
$(tagName).attr("class")

We can add an event listener using jQuery usnig
$(tagName).eventType(function() {
    code
})
OR
$(tagName).on(eventType, function() {
    code
})

We can add an element before an element using
$(tagName).before(<tag>content</tag>)

We can add an element after an element using
$(tagName).after(<tag>content</tag>)

We can add an element before an element within that element using
$(tagName).prepend(<tag>content</tag>)

We can add an element after an element within that element using
$(tagName).append(<tag>content</tag>)

e.g.
<button>New</button> //Before
<h1>
  <button>New</button> //Prepend
  Hello
  <button>New</button> //Append
</h1>
<button>New</button> //After

To remove an element, we can write
$(tagName).remove()

hide() is an animation that hides the selected tag.
show() is an animation that shows the selected tag.
toggle() is an animation that toggles the selected tag.
We have many more animations like fadeIn(), fadeOut(), fadeToggle(), slideUp(), slideDown(), slideToggle() etc.

We can also define our custom animation using
$(tagName).animate({property: value})
In custom animation we can use only numeric values, e.g. opacity, margin and not color.
If we want to include percentage we can write it using quotation mmarks.

We can add multiple animations by chaining them e.g.
$(tagName).animation1().animation2().animate({property: value})