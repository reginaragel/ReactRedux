import React from "react";
import { useSelector } from "react-redux";
import { deleteCustomer } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

const CustomerView=()=>{
  
     const customers=useSelector((state)=>state.customers);
     const dispatch=useDispatch();

    const deleteHandler=(index)=>{
          dispatch(deleteCustomer(index));
    }

    return(
        <div>
            <h3>Customer List</h3>
            <ul>
                {
                    customers.map((customer,index)=><li>{customer}
                    <button onClick={()=>deleteHandler(index)}>Delete</button></li>)
                }
            </ul>
        </div>
    )
}
export default CustomerView