# JAVA Script

## Type
- Inline
- Internal
- External


## variable delclartion
Variables are containers for storing data (storing data values).
- let 
    - variable can be declared only once in the entire program
    - Variables defined with let can not be redeclared.
    - Variables defined with let must be declared before use.
    - Variables defined with let have block scope.
- var
    > variable can be declared multiple times in the entire program
- const 
    - only one cannot be changed
    - Variables defined with const cannot be Redeclared.
    - Variables defined with const cannot be Reassigned.
    - Variables defined with const have Block Scope.

- The var keyword is used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- If you want your code to run in older browsers, you must use var.

## Datatypes - [datatype.htm](./datatype.htm)

| Datatype | Description| Example |
|:----------:|:----------:|:----------:|
| Numbers |max 50677|```let a=4;```|
| string |  alpha numeric  | ```let name="Ram96";```|
| Bigint| greater than 50677|```let t=true;```|
| Boolean | true or false |  ```const classes={name:"Ram",course:"FSD"}``` |
| undefined | multiple datatype| |
| null | null value | |
| symbol | special character||
| object | array matrix list |   |

- The Object Datatype

    - The object data type can contain:

        1. An object
        2. An array
        3. A date



## JavaScript Identifiers

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like a and b) or more descriptive names (stock, add, height).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _.
- Names are case sensitive .
- Reserved words(Key Words) cannot be used as names.

## Print
Print the value in html webpage 

```html
<script>
    //number
    let a=4;
    //string
    let name="Ram96";
    //Boolean
    let t=true;
    //object
    const classes={name:"Ram",course:"FSD"}
    // Array object:
    const item = ["turf", "bimo", "dragon"];
    // Date object:
    const dates = new Date("2023-05-16");

    //print
    document.write(a,"<br>"); //"<br> is used to print next output in next line below equalvant to "/n" in python
    document.write(name,"<br>");
    document.write(t,"<br>"); 
    document.write(classes,"<br>"); 
    document.write(item,"<br>");
    document.write(dates,"<br>");
</script>

```

## Function - [function.htm](./function.htm)
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

```html
// Function is called, the return value will end up in y
let y = myFunction(3, 2);

function myFunction(x, y) {
// Function returns the product of x and y
  return x * y;
}
```

examplle
```html
<script>
    //normal function
    function normal_function(){
        document.write("normal function","<br>");
    }
    normal_function();

    // variable delaration function
    const const_function=()=>{
    document.write("ariable delaration function","<br>");
    }
    const_function();

    //single line function
    const single_line_function=()=>document.write("single line function","<br>");
    single_line_function();

    //single line function_2
    let single_line_function_2=()=>document.write("single line function let","<br>");
    single_line_function_2();

    console.log("heloaghdfjdg");

</script>

```