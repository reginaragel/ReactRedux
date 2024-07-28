import React, { useState } from 'react';

import {addCustomer} from './slices/CustomerSlice';
import { useDispatch } from 'react-redux';
const CustomerAdd=()=>{

    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    // const [customers,setCustomers]=useState([]);

    const addingCustomer=()=>{
        if(input){
            // setCustomers((prevCustomer)=>[...prevCustomer,input]);
            // console.log(customers)
            dispatch(addCustomer(input))
            console.log(input)
            
            setInput("");
        }
    }
    return(
        <>
         <div>
            <h3>Adding Customer</h3>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addingCustomer}>Add</button>
        </div>
        
        </>
       
    )
}
export default CustomerAdd