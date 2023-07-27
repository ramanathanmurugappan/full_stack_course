import React, { useState ,useEffect,useRef} from 'react';
// const App=()=>{
//     const [input,setinput]=useState(" ");
//     const count=useRef(0);
//     useEffect(()=>{
//         count.current=count.current+1;

//     });
//     return(<>
//     <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>;
//     <h1>word:-{count.current}</h1>
//     </>
//     );
// }

const App=()=>{
    const [input,setinput]=useState("");
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;

    });

    return(<>
    <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>;
    <h1>word:-{count.current}</h1>
    <button onClick={()=>count.current = 0}>reset</button>
    </>
    );
}

// const App = () => {
//     const [password, setpassword] = useState('');
//     const [isValid, setisvalid] = useState(true);
  
//     const Passwordcheck = (e) => {
//       const newpassword = e.target.value;
//       setpassword(newpassword);
//       setisvalid(newpassword.length >= 8);
//     };
  
//     const Submit = (e) => {
//     if (isValid) {
//         console.log('Password successfully created!');
//     } else {
//         console.log('Password must be at least 8 characters long.');
//     }
//     }
  
//     return (
//       <div>
//         <form onSubmit={Submit}>
//           <label>Password:
//             <input type="password" value={password} onChange={Passwordcheck}/>
//           </label>
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   };
  
// const App = () => {
// const [password, setpassword] = useState('');  
// const count=useRef();
//     useEffect(()=>{
//         if ((password.length) >=8){
//         console.log('Password successfully created!');
//     } else {
//         console.log('Password must be at least 8 characters long.');
//     }

//     });

// return (
//     <div>
//     <form >
//         <label>Password:
//         <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//     </form>
//     </div>
// );
// }

export default App;