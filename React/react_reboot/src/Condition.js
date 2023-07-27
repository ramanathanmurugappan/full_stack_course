import React from 'react';
const  Himsg=()=>{
    return<h1>Hello Guys</h1>;
}
const Byemsg=()=>{
    return<h1>Bye everyone</h1>
}
const Message=(props)=>{
    const ismsg=props.msg;
    if (ismsg){
        return<Himsg/>;
    }
    else{
        return<Byemsg/>;
    }
}
export default Message;