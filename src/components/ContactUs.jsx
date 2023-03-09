import React, { Component } from 'react';
import { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function ContactUs(){

    const [contact,setContact]=useState({
        "email":"",
        "thoughts":"",
    })
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()
    const handleInput=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmitted(true)      
    }
    useEffect(()=>{
       
        if( submitted){
            console.log(contact)
            axios.post("http://localhost:8080/api/contactus",contact)
            .then(resp=>{
                console.log(resp)
                alert("Your Email Saved successfully")
                history.push("/contactus")
            })
            .catch(error=>console.log("Error",error))            
        }
    },[submitted])

    return (
            <div className="text-center mt-5 mb-5 ml-5 mr-5 px-5 bg-warning">
                <div>
                    <h1> Contact Us </h1>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Email Address</label>
                        <input type="text" name="email" value={contact.email} onChange={handleInput} className="form-control" placeholder="type your email here"/>
                     </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Valuable Thoughts</label>
                        <input type="text" name="thoughts" value={contact.thoughts} onChange={handleInput} className="form-control" placeholder="Enter your thoughs here" />
                    </div>
                    <div>
                        <button className="btn btn-warning btn-lg ">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        );
}


export default ContactUs;