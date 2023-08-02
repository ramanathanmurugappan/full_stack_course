# cascading style sheet - CSS

>## Styles
>There are three ways to insert CSS:
>
>1. **Inline:** By using the `style` attribute in HTML elements.
>2. **Internal:** By using a `<style>` block in the `<head>` section of the HTML file.
>3. **External:** By linking to an external CSS file.
>
>| Inline | Internal| External |
>|:----------:|:----------:|:----------:|
>| inside the html content(`<body>`) | inside html but on `<head>` tag separated from `<body>` | on different file from html like `style.css` or `index.css`  |
>| size will be larger take more data load html |  size will be larger take more data load html | size will be small and take less data to load html (developer and company prefer this)|
>| [inline.htm](./inline.htm)| [internal.htm](./internal.htm)| html - [external.htm](./external.htm), css - [style.css](./style.css)|
>
>**Example**
>```css
>/* Inline */
><p style="color: red;">This is an inline style.</p>
>
>/* Internal */
><style>
>p {
>    color: blue;
>}
></style>
>
>/* External */
>/* In your .css file */
>p {
>    color: green;
>}
>```
>**Note:** 
>
>Inline styles have the highest priority, and will override external and internal styles and browser defaults.
>

>## Comments
>CSS comments begin with `/*` and end with `*/`. They are not displayed in the user's browser but they are visible in the source code. Comments can be used to leave notes or explanations about the CSS code.
>
>**Example**
>```css
>/* This is a comment */
>p {
>    color: red;
>}
>```
>**Note:** 
>
>CSS comments can be multiline. They are often used to explain the code, and may help when you edit the source code at a later date.



>## CSS selector
>
>| Selector | Symbol | Description | Example |
>|:----------:|:----------:|:----------:|:----------:|
>| Element | (none) | Selects HTML elements based on the element name. It applies the style to all elements of that type. | `p { color: red; }` |
>| ID | `#` | Selects an HTML element based on an id attribute. The id should be unique within a page, so the style is applied to at most one element per page. | `#myId { color: blue; }` |
>| Class | `.` | Selects HTML elements based on a class attribute. Multiple elements can have the same class, so the style can be applied to multiple elements on a page. | `.myClass { color: green; }` |
>
>**Note:** CSS selectors are case sensitive. They are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more. The specificity of the selector determines which styles are applied if there are conflicts. Inline styles have the highest specificity, followed by ID selectors, class selectors, and finally element selectors.

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


## Flex




pending box modelling

css
scss
dcss
hcss
