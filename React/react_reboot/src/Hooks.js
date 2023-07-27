import React,{useState} from 'react'
// const Apps=()=>{
//     const [count,setCount] =useState(0);
//     return(
//         <>
//         <h1>Count={count}</h1>
//         <button type="button" onMouseOver={()=>setCount(count+1)}>Click</button>
//         {/* <button  onClick={()=>setCount(0)}>Reset</button> */}
//         </>
//     )
// }


// const Colorchange = () => {

//   const [backgroundColor, setBackgroundColor] = useState('black');

//   return(
//     <div style={{backgroundColor}}>
//      <button onClick={()=>setBackgroundColor('blue')}>Click</button>
//     </div>
//     )

// }


const Colorchange = () => {

  const [count, setcount] = useState(0);

  const Counter=()=>{
    setcount(count+1);
  }
  const Change_background=()=>{
    if (count <5){
      return "purple" 
    } else if (count <10){
      return "red" 
    }else if (count <15){
      return "blue" 
    }else if (count <20){
      return "green" 
    }else if (count <25){
      return "yellow" 
    }
  }
  return(
    <div style={{
      backgroundColor:Change_background(),
      height:'100vh',
      width:'100%'}}>
     <button onClick={Counter}>Click</button>
     <button onClick={()=>setcount(0)}>reset</button>
     <h1>count={count}</h1>
    </div>
    )

}


export default Colorchange;
