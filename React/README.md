# React
- React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
- React is a tool for building UI components.


## first install node.js in system from the link [here](https://nodejs.org/en/download)

follow the command in cmd or terminal
```shell
npm install -g npm
brew install node
npm install -g npm@9.6.6
```

install react
```shell
npm install -g create-react-app
```
To uninstall run this command: 
```shell
npm uninstall -g create-react-app
```

To install react latest
```shell
npm i react@latest react-dom@latest
```
create react project 
```shell
npx create-react-app first_project
```

If Above code Not working 

```shell
cd /usr/local/bin
sudo npx create-react-app /Users/ram/Desktop/code/git/full_stack_course/React/react_reboot
```
Run the React Application

```shell
npm start
```

## Function

```javascript
import React from 'react';
const  Greet=()=>{
    return(<>
    <h1>Hello</h1>
    <h2>Hello</h2>
    </>
    )
}

export default Greet;
```


return type of constructor is void 

sudo chown -R ram /Users/ram/Desktop/code/git/full_stack_course/React

chmod -R 755 /Users/ram/Desktop/code/git/full_stack_course/React



