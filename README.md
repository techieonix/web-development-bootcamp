# web-development-bootcamp

The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

https://getbootstrap.com/

Bootstrap is an external CSS framework.
Bootstrap contains pre-made CSS files.
It has a 12 column layout system.
Mobile first approach.

CDN - Content Delivery Network

Put this link in head tag:

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

Put this link just before the end of body tag if we want functionality like clickable buttons and dropdown menus etc.

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

Bootstrap 12-column Layout System:
It has a div with a class container. This is the starting point.
Next is another div which has a class row which has items with class col that will be laid out using the column system.
Container class has different widths based on screen sizes.

Out of 12 columns:
col-6 will be taking 6/12 col divs.
col-4 will be taking 4/12 col divs.
col-2 will be taking 2/12 col divs.
Else it adjusts all the col divs into equal sizes on 100% width. They can be =<12.

In a single div we can have multiple breakpoints e.g. col-sm-12 col-md-8 col-lg-4.

https://appbrewery.github.io/bootstrap-layout/

Exercise 1:
<!-- Modify the HTML code for the purple boxes below so it behaves like the green ones. -->
  <div class="row">
    <div class="col-xl-6">50% desktop, 100% mobile</div>
    <div class="col-xl-6">50% desktop, 100% mobile</div>
  </div>

Exercise 2:
  <!-- Modify the HTML below to make the blue boxes behave like the red ones. -->
  <div class="row">
    <div class="col-lg-6 col-sm-12 col-10">Column 1</div>
    <div class="col-lg-3 col-sm-6 col-10">Column 2</div>
    <div class="col-lg-3 col-sm-6 col-10">Column 3</div>
  </div>

Exercise 3:
<!-- Modify the HTML below to make the indigo boxes behave like the blue ones. -->
  <div class="row">
    <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-6 col-sm-12">Column 1</div>
    <div class="col-xxl-11 col-xl-10 col-lg-8 col-md-6 col-sm-12">Column 2</div>
  </div>


<html lang="en" data-bs-theme="dark"> - For Dark Mode Website