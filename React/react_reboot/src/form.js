import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
const  Form=()=>{
    return(
    <>
    <div>
    <form>
            <label for="fname" >Enter the First Name</label>
            <input type="text" placeholder="Enter the first Name" /><br/>
            <label for="lname" >Enter the Last Name</label>
            <input type="text" placeholder="Enter the Last Name" /><br/>
            <label for="mobile" >Enter the Mobile Number</label>
            <input type="number" placeholder="Enter the Mobile Number-" /><br/>
            <input type="submit"/>
    </form>
    </div>
    <div>
    <Link to={"/crud"}>Crud</Link>
    </div>
    </>
    )
}

export default Form;





