># **HTML5** Notes

HTML5 is the latest version of HTML and it's widely used in designing web pages. It's a markup language used to structure and present content on the web. The primary extensions to HTML in HTML5 are technologies to enable websites to become more application-like.

>## **File format is .html or .htm**
HTML5 does not require a special file extension. The .htm or .html file extension is sufficient.

>## **HTML is not case sensitive**
HTML is not case sensitive. However, best practices suggest using lowercase for consistency and readability.

# Content

- [Basic HTML file](#basic-html-file)
- [Formatting](#formatting)
- [Headings](#headings)
- [Tags](#tags)
- [Image](#image)
- [Form](#form)
    - [text,mobile_number,email](#textmobile_numberemail)
    - [Radio,Checkbox and alert button](#radiocheckbox-and-alert-button)
    - [File](#file)
    - [Date,color and background style](#datecolor-and-background-style)
- [Comments](#comments)
- [Lists](#lists)
- [Links](#links)
- [Tables](#tables)
- [Canvas](#canvas)

>## Basic HTML file
> The <!DOCTYPE html> declaration helps with the proper rendering and functioning of web documents in compliant browsers.
> **Example**
>```html
><!DOCTYPE html>
><html>
>    <body>
>        lorem25
>    </body>
><html>
>```
>**Output**
>
>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, atque. 
>

>## Formatting
> HTML provides tags like `<br>` for line breaks and `<hr>` for horizontal lines. These tags don't need closing tags.
> **Example**
>```html
><html>
>    <body>
>        ipsum dolor sit, amet consectetur adipisicingLorem <br>elit. Fugit non, necessitatibus, quis assumenda<hr> incidunt iste est molestias enim earum dolor sequi? Temporibus hic quia fuga quis dolores rerum, officia delectus tempore molestias, minima deleniti suscipit. Nobis earum dolores odit a necessitatibus suscipit sed assumenda, aperiam qui obcaecati debitis repellendus nihil.
>    </body>
><html>
>```
>**Output**
>
>ipsum dolor sit, amet consectetur adipisicingLorem <br>elit. Fugit non, necessitatibus, quis assumenda<hr> incidunt iste est molestias enim earum dolor sequi? Temporibus hic quia fuga quis dolores rerum, officia delectus tempore molestias, minima deleniti suscipit. Nobis earum dolores odit a necessitatibus suscipit sed assumenda, aperiam qui obcaecati debitis repellendus nihil.

>## Headings
> HTML headings are defined with `<h1>` to `<h6>` tags, where `<h1>` defines the most important heading, and `<h6>` defines the least important heading.
> **Example**
>```html
><html>
>    <body>
>        <h1>hello guys</h1>
>        <h2>hello guys</h2>
>        <h3>hello guys</h3>
>        <h4>hello guys</h4>
>        <h5>hello guys</h5>
>        <h6>hello guys</h6>
>    </body>
></html>
>```
>**Output**
>
><h1>hello guys</h1>
><h2>hello guys</h2>
><h3>hello guys</h3>
><h4>hello guys</h4>
><h5>hello guys</h5>
><h6>hello guys</h6>

>## Tags
> The `<div>`, `<span>` and `<article>` tags provide ways to structure your HTML document. The `<div>` tag defines a division or a section in an HTML document, `<span>` tag is used to group inline-elements in a document, and the `<article>` tag specifies independent, self-contained content.
> **Example**
>```html
><html>
>    <body>
>        <div>
>            <article>
>                <h2>Google Chrome</h2>
>                <p>Google Chrome is a web browser developed by <span style="color:green;font-weight:bold">Google</span>, released in 2008. Chrome is the world's most popular web browser today!</p>
>            </article>
>        </div>
>    </body>
><html>
>```
>**Output**
><hr>
><div>
>    <article>
>        <h2>Google Chrome</h2>
>        <p>Google Chrome is a web browser developed by <span style="color:green;font-weight:bold">Google</span>, released in 2008. Chrome is the world's most popular web browser today!</p>
>    </article>
></div>
><hr>

>## Image
> The `<img>` tag is used to embed an image in an HTML page. The `src` attribute specifies the path to the image to be displayed, `alt` attribute specifies an alternative text to be used, if the image cannot be displayed.
> **Example** 
>```html
><html>
>    <body>
>    <img src="image.jpeg" alt="myphoto">
>    <img src="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg" alt="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg" alt="image">
>    </body>
></html>
>```
>**Output**
>
> The actual output of this example would depend on the content of the images at the provided `src` URLs.
>
><img src="image.jpeg" alt="myphoto"><br>
><img src="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg" alt="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg" alt="image">

>## Form
> The `<form>` tag is used to create an HTML form for user input. The `<input>` element is the most used form element. An `<input>` element can be of different types, depending on the `type` attribute.
>

>**Text, Number, Email**
> **Example**
>```html
><html>
>    <body>
>        enter your name:
>            <input type="text" name="t1"/><br>
>        enter your mobile number:
>        <input type="number" name="t2"/><br>
>        enter your email:
>        <input type="email" name="t3"/><br>
>        <input type="submit" /><br>
>    </body>
></html>
>```
>**Output**
>
> The actual output of this example would be form fields that a user can interact with.
>enter your name:
><input type="text" name="t1"/><br>
>enter your mobile number:
><input type="number" name="t2"/><br>
>enter your email:
><input type="email" name="t3"/><br>
><input type="submit" /><br>


>**Radio, Checkbox, Alert Button**
> **Example**
>```html
><html>
>    <body>
>        B<input type="radio" name="r1"/>
>        G<input type="radio" name="r1"/>
>        O<input type="radio" name="r1"/>
>
>        football<input type="checkbox" name="m1"/>
>        basketball<input type="checkbox" name="m2"/>
>        volleyball<input type="checkbox" name="m3"/>
>
>        <input type="button" onClick="alert('hello ramnath')" value="popup"/>
>        <input type="reset" value="Reset"/>
>        <input type="submit" />
>    </body>
>
>
></html>
>```
>**Output**
> The actual output of this example would be form fields that a user can interact with.
>
>- **File**
> **Example**
>```html
><html>
>    <body>
>        <input type="file" name="file"/><br>
>        <input type="submit" />
>    </body>
></html>
>```
>**Output**
> The actual output of this example would be form fields that a user can interact with.
>
>- **Date, Color, Background Style**
> **Example**
>```html
><html>
>    <body>
>        <input type="month" name="month"/><br>
>        <input type="date" name="date"/><br>
>        color<input type="color" name="color"/>
>        <br>
>        <p style="background:green" > hello</p>
>    </body>
></html>
>```
>**Output**
> The actual output of this example would be form fields that a user can interact with and a paragraph with green background.

>## Comments
> HTML comments are not displayed in the browser, but they can help document your HTML source code.
> **Example**
>```html
><html>
>    <body>
>        <!-- This is a comment -->
>        <p>This is a paragraph.</p>
>    </body>
><html>
>```
>**Output**
><hr>
><p>This is a paragraph.</p>
><hr>

>## Lists
> HTML offers three ways for specifying lists: Unordered lists (`<ul>`), Ordered lists (`<ol>`) and Definition lists (`<dl>`).
> **Example**
>```html
><html>
>    <body>
>        <h3>Unordered list:</h3>
>        <ul>
>            <li>Coffee</li>
>            <li>Tea</li>
>            <li>Milk</li>
>        </ul>
>        <h3>Ordered list:</h3>
>        <ol>
>            <li>Coffee</li>
>            <li>Tea</li>
>            <li>Milk</li>
>        </ol>
>        <h3>Definition list:</h3>
>        <dl>
>            <dt>Coffee</dt>
>            <dd>A hot beverage made from coffee beans.</dd>
>            <dt>Tea</dt>
>            <dd>A hot beverage made from tea leaves.</dd>
>            <dt>Milk</dt>
>            <dd>A cold beverage made from milk.</dd>
>        </dl>
>    </body>
><html>
>```
>**Output**
><hr>
><h3>Unordered list:</h3>
><ul>
>    <li>Coffee</li>
>    <li>Tea</li>
>    <li>Milk</li>
></ul>
><h3>Ordered list:</h3>
><ol>
>    <li>Coffee</li>
>    <li>Tea</li>
>    <li>Milk</li>
></ol>
><h3>Definition list:</h3>
><dl>
>    <dt>Coffee</dt>
>    <dd>A hot beverage made from coffee beans.</dd>
>    <dt>Tea</dt>
>    <dd>A hot beverage made from tea leaves.</dd>
>    <dt>Milk</dt>
>    <dd>A cold beverage made from milk.</dd>
></dl>
><hr>

>## Links
> The HTML `<a>` tag defines a hyperlink. It's used to link from one page to another.
> **Example**
>```html
><html>
>    <body>
>        <a href="https://www.google.com">Visit Google</a>
>    </body>
><html>
>```
>**Output**
><hr>
><a href="https://www.google.com">Visit Google</a>
><hr>

>## Tables
> The HTML `<table>` tag is used to display data in tabular form (row * column). It can also be used for arranging data (content) in rows and columns format.
> **Example**
>```html
><html>
>    <body>
>        <table style="width:100%">
>            <tr>
>                <th>Firstname</th>
>                <th>Lastname</th> 
>                <th>Age</th>
>            </tr>
>            <tr>
>                <td>Jill</td>
>                <td>Smith</td>
>                <td>50</td>
>            </tr>
>            <tr>
>                <td>Eve</td>
>                <td>Jackson</td>
>                <td>94</td>
>            </tr>
>        </table>
>    </body>
><html>
>```
>**Output**
><hr>
><table style="width:100%">
>    <tr>
>        <th>Firstname</th>
>        <th>Lastname</th> 
>        <th>Age</th>
>    </tr>
>    <tr>
>        <td>Jill</td>
>        <td>Smith</td>
>        <td>50</td>
>    </tr>
>    <tr>
>        <td>Eve</td>
>        <td>Jackson</td>
>        <td>94</td>
>    </tr>
></table>
><hr>

>## Canvas
> The HTML `<canvas>` tag is used to draw graphics, on the fly, on a web page. The graphic above is created with the `<canvas>` element, with JavaScript, on the fly.
> **Example**
>```html
><html>
>    <body>
>        <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
>        </canvas>
>        <script>
>            var c = document.getElementById("myCanvas");
>            var ctx = c.getContext("2d");
>            ctx.fillStyle = "#FF0000";
>            ctx.fillRect(0, 0, 80, 100);
>        </script>
>    </body>
><html>
>```
>**Output**
> The actual output of this example would be a 200x100 pixel canvas with a red rectangle that is 80 pixels wide and 100 pixels tall. The rendering is performed by JavaScript, so it's not possible to illustrate the output in this text format.
