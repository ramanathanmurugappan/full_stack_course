import React from 'react';
const  Props=(props)=>{
    return(<>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    </>
    )
}

const  Props2=({name,age})=>{
    return(<>
    <h1>{name}</h1>
    <h2>{age}</h2>
    </>
    )
}

//export default Props; // can only import only one function from a singlr js file 