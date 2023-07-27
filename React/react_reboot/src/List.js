import React from 'react';
const  Fruit=(props)=>{
    return<li>{props.name}</li>;
};
const  App=()=>{
    const fruits=[
        {id:1,name:"apple"},
        {id:2,name:"banana"},
    ];
    return(
        <>
        <ul>
            {fruits.map((n)=><Fruit name={n.name}/>)}
        </ul>
        </>
    );


}

export default App;