# cascading style sheet - CSS

##
- Inline
- Internal
- External
>Notes: inline style has the highest priority, and will override external and internal styles and browser defaults


| Inline | Internal| External |
|:----------:|:----------:|:----------:|
| inside the html cotent(`<body>`) | inside html but on `<head>` tag separated from `<body>` | on different file from html like `style.css` or `index.css`  |
| size will be larger take more data load html |  size will be larger take more data load html | size will be small and take less data to load html (developer and company prefer this)|
| [inline.htm](./inline.htm)| [internal.htm](./internal.htm)| html - [external.htm](./external.htm), css - [style.css](./style.css)|


>Notes: CSS comment is starts with /* and ends with */
```css
/* This is a comment */
```



## CSS selector
- Id -> `#` --> cannot be used more than 4 to 5 times of different tag like h1,h2,h3
- Class -> `.` --> can be used multiple times
- Tag

**example - [style.css](./style.css)**

id 

    in css
    #r1{color:green;}
    #r2{color:orange;}
    in html
    <p id="r1"> hello guys</p>
    <p id="r2"> hello guys</p>

class

    in css
    .r3{color:yellow;}
    .r4{color:gray;}
    .r5{color:violet;}
    in html
    <p class="r3"> hello guys</p>
    <p class="r4"> hello guys</p>
    <h1 class="r5"> hello guys</h1>

protocol

no protocol for id 

    in css
    p#r1{color:green;}-->wrong
    #r2{color:orange;}-->correct
    p.r4{color:gray;}
    h1.r5{color:violet;}


## Background
- color - [style.css](./style.css)
- image
- repeat
- position 
    - left center right
    - top middle bottom
    - 3*3 eg- "left bottom"

- attachment

## Borders
- dotted
- solid
- dashed
- double
- hidden
- groove

