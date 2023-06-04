import React, { useState } from 'react'
import style from './Admin.module.css'
import { Link,useNavigate } from 'react-router-dom'

export  default function  Admin() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
        try{
           const res= await fetch("https://server-bu32.onrender.com/api/admin",{
               method:"post",
               body:JSON.stringify({email,password}),
               headers:{
                   "Content-Type":"application/json"
               }
           })  
           const data=await res.json()
      
           if(data.userData.is_admin===1){
             alert(data.message)
             localStorage.setItem("User",JSON.stringify(data))
             localStorage.setItem("Admin",JSON.stringify({Admin:true}))

             navigate('/DashBoard')
           }else{
             alert(data.message)
           }
           
        }catch(error){
         console.log(error.message)
        }
  
   }  
  return (
    <div className={style.container}>
    <form onSubmit={submitForm} >
    
      <h2>Admin SignIn</h2>
        <input type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter your email ' autoComplete='off'/>
        <input type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter your password ' autoComplete='off'/>
        <button type='submit'>Sign Up</button>
        <Link to="/register">If you don't have acoount ? Register</Link>
    </form>
</div>
  )
}