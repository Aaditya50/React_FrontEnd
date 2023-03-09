import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uservalidation from "../uservalidation"
import "../Styles/Login.css";

function AssignCentre()
{
    const [user,setUser]=useState({
        "userid":"",
        "orderid":"",
    })
    const history=useHistory()
    const [submitted,setSubmitted]=useState(false)
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmitted(true)      
    }

    useEffect(()=>{
       
        if( submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/assignCentre",user)
            .then(resp=>{
                console.log(resp)
                alert("Assigned successfully")
                history.push("/assigncentre")
            })
            .catch(error=>console.log("Error",error))            
        }
    },[submitted])
    return (
        <div className="container">
            <div className="card shadow bg-transparent mt-3 text-black">
        <div className="card-body">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h4 className="text-center p-2">
                       <b>Assign Center Form</b>
                    </h4>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label"><b>Service center Id</b></label>
                        <div className="col-sm-8">
                        
                            <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label"><b>Order id</b></label>
                        <div className="col-sm-8">
                            <input type="text" name="orderid" value={user.orderid} onChange={handleInput} className="form-control" />
                        </div>                        
                    </div>
                    
                    
                    <button className="btn btn-primary float-right">Assign Now</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default AssignCentre;
