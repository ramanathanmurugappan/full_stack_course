># **HTML5** notes
>## **format is .htm(new version html5) not .html(older version html<=4)**
>## **Not case sensitive**

# Content
- [Basic HTML file](#loream)
- [Formatting](#formatting)
- [Headings](#Headings)
- [Tag](#tag)
- [Image](#image)
- [Form](#form)
    - [text,mobile_number,email](#textmobile_numberemail)
    - [Radio,Checkbox and alert button](#radiocheckbox-and-alert-button)
    - [File](#file)
    - [Date,color and background style](#datecolor-and-background-style)

>## Loream
>### syntax
>lorem`<number of word that you want to print as a junk>`

**example**
```html
<html>
    <body>
        lorem25
    </body>
<html>
```
**output**
<hr>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis earum culpa architecto, soluta necessitatibus unde quas aperiam, cupiditate libero animi odio, numquam cumque cum!
<hr>

>## Heading
**example**
```html
<html>
    <body>
        <h1>hello guys</h1>
        <h2>hello guys</h2>
        <h3>hello guys</h3>
        <h4>hello guys</h4>
        <h5>hello guys</h5>
        <h6>hello guys</h6>
    </body>
</html>
```
**output**
<hr>
<html>
    <body>
        <h1>hello guys</h1>
        <h2>hello guys</h2>
        <h3>hello guys</h3>
        <h4>hello guys</h4>
        <h5>hello guys</h5>
        <h6>hello guys</h6>
    </body>
</html>
<hr>

> ## Formatting
> no closing tag required
>- `<br>` for new line don’t need closing tag
>- `<hr>` print line don’t need closing tag
**example**
```html
<html>
    <body>
        ipsum dolor sit, amet consectetur adipisicingLorem <br>elit. Fugit non, necessitatibus, quis assumenda<hr> incidunt iste est molestias enim earum dolor sequi? Temporibus hic quia fuga quis dolores rerum, officia delectus tempore molestias, minima deleniti suscipit. Nobis earum dolores odit a necessitatibus suscipit sed assumenda, aperiam qui obcaecati debitis repellendus nihil.
    </body>
<html>
```
**output**
<hr>
ipsum dolor sit, amet consectetur adipisicingLorem <br>elit. Fugit non, necessitatibus, quis assumenda<hr> incidunt iste est molestias enim earum dolor sequi? Temporibus hic quia fuga quis dolores rerum, officia delectus tempore molestias, minima deleniti suscipit. Nobis earum dolores odit a necessitatibus suscipit sed assumenda, aperiam qui obcaecati debitis repellendus nihil.
<hr>

> ## Tag

| `<div>` | `<span>`| `<article>` |
|:----------:|:----------:|:----------:|
| consume high memory | consume less memory than `<div>` | consume low memory than `<span>` |
| include heading,sub-heading,image and content |  includes sub-heading,image and content | includes sub-heading and content|
| exclude nothing | excludes heading| excludes images and heading |

**example**
```html
<html>
    <body>
        <div>
            <article>
                <h2>Google Chrome</h2>
                <p>Google Chrome is a web browser developed by <span style="color:green;font-weight:bold">Google</span>, released in 2008. Chrome is the world's most popular web browser today!</p>
            </article>
        </div>
    </body>
<html>
```
**output**
<hr>
<html>
    <body>
        <div>
            <article>
                <h2>Google Chrome</h2>
                <p>Google Chrome is a web browser developed by <span style="color:green;font-weight:bold">Google</span>, released in 2008. Chrome is the world's most popular web browser today!</p>
            </article>
        </div>
    </body>
<html>
<hr>

> ## Image
>syntax
> `<img src”include directory of photos or hyperlink to photo alt="name of the photo or link">`

**example** 
```html
<html>
    <body>
    <img src="image.jpeg" alt="myphoto">
    <img src="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg" alt="">
    </body>
</html>
```
**output**
<hr>
<html>
    <body>
    <img src="image.jpeg" alt="image">
    <br>
    <img src="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg" alt="http://4.bp.blogspot.com/-C7YvfKgvGcE/T4ez5LeotoI/AAAAAAAACjw/BYU1x71bN1I/s1600/Hdhut.blogspot.com+%252812%2529.jpg">
    </body>
</html>
<hr>

> ## Form
> `<form> </form>`is used to get input from user like login, registration, personal details and so on 

- ### text,mobile_number,email
    **example**
    ```html
    <html>
        <body>
            enter your name:
                <input type="text" name="t1"/><br>
            enter your mobile number:
            <input type="number" name="t2"/><br>
            enter your email:
            <input type="email" name="t3"/><br>
            <input type="submit" /><br>
        </body>
    </html>
    ```
    **output**
    <hr>
    <html>
    <body>
    enter your name:
    <input type="text" name="t1"/><br>
    enter your mobile number:
    <input type="number" name="t2"/><br>
    enter your email:
    <input type="email" name="t3"/><br>
    <input type="submit" />
    </body>
    </html>
    <hr>

- ###  Radio,Checkbox and alert button
    **example**
    ```html
    <html>
        <body>
            B<input type="radio" name="r1"/>
            G<input type="radio" name="r1"/>
            O<input type="radio" name="r1"/>

            football<input type="checkbox" name="m1"/>
            basketball<input type="checkbox" name="m2"/>
            volleyball<input type="checkbox" name="m3"/>

            <input type="button" onClick="alert('hello ramnath')" value="popup"/>
            <input type="reset" value="Reset"/>
            <input type="submit" />
        </body>
    </html>
    ```
    **output**
    <hr>
    <html>
    <body>
    B<input type="radio" name="r1"/>
    G<input type="radio" name="r1"/>
    O<input type="radio" name="r1"/>

    football<input type="checkbox" name="m1"/>
    basketball<input type="checkbox" name="m2"/>
    volleyball<input type="checkbox" name="m3"/>

    <input type="button" onClick="alert('hello ramnath')" value="popup"/>
    <input type="reset" value="Reset">
    <input type="submit" />
    </body>
    </html>
    <hr>

- ###  File
    vulnarable to hacking if file is inpued from html page it should in javascript or high level frontend language like angular or react

    **example**
    ```html
    <html>
        <body>
            <input type="file" name="file"/><br>
            <input type="submit" />
        </body>
    </html>
    ```
    **output**
    <hr>
    <html>
    <body>
    <input type="file" name="file"/><br>
    <input type="submit" /><br>
    </body>
    </html>
    <hr>

- ###  Date,color and background style
    There are 2486 different colors in html

    **example**
    ```html
    <html>
        <body>
            <input type="month" name="month"/><br>
            <input type="date" name="date"/><br>
            color<input type="color" name="color"/>
            <br>
            <p style="background:green" > hello</p>
        </body>
    </html>
    ```
    **output**
    <hr>
    <html>
    <body>
    <input type="month" name="month"/><br>
    <input type="date" name="date"/><br>
    color<input type="color" name="color"/><br>
    <p style="background:green" > lorem25</p>
    </body>
    </html>
    <hr>



reset button remainder
