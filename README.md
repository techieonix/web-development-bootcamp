# web-development-bootcamp

The Complete 2024 Web Development Bootcamp course from Udemy by Dr. Angela Yu

CSS stands for Cascading Style Sheets

CSS is of 3 types:

1. Inline <tag style='css' />
2. Internal <style> css </style>
3. External <link href='style.css'>

css selector {
property: value
}

.class

#id

css selector [attribute] {
property: value
}

attribute is true or false. It can be set in HTML as well as CSS.

* is a universal selector.

1px = 1/96 inch
1pt = 1/72 inch
1em = 100% of parent
1rem = 100% of root

Font Properties are:
1. Font size
2. Font weight
3. Font family (fonts.google.com)

border: thickness style color
width: top right bottom left

Cascade: First it sees external CSS then internal CSS then inline CSS.

1. Position: The lower down the file, the rule is more important.
2. Specificity: Element selector is least specific. Next level is class selector. Next is attribute selector. Most specific is ID selector.
3. Type: External, Internal and Inline in order. The inline has more importance, then internal and then external.
4. Importance: !important keyword.


Combining selectors:

1. Group - Apply to both selectors
selector, selector {
    property, value;
}

2. Child - Apply to direct child of left side
parent > child {
    property, value;
}

3. Descendant - Apply to a descendant on left side
selector selector {
    property, value;
}

4. Chaining - Apply where all selectors are true
selectorselector {
    property, value;
}

5. Combining combiners
selector selectorselector {
    property, value;
}


Positions:
1. Static
2. Relative
3. Absolute
4. Fixed

Z-index - default 0 on every component


Dipslay:
1. Inline
2. BLock
3. Inline Block


Floats:
1. Left
2. Right

Clear: to make it free from float.


Responsivesness:
1. Media Queries
@media (max or min-width: width) {
    selector {
        peoperty: value;
    }
}
@media (max or min-width: width) and (max or min-width: width) {
    selector {
        peoperty: value;
    }
}
@media screen (orientation: landscape) {
    selector {
        peoperty: value;
    }
}
2. CSS Grid
3. CSS Flexbox
4. External Frameworks e.g. Bootstrap