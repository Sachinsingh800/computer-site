import React, { useState } from 'react'

function ResetPassword() {
    const [email,setEmail] = useState("")

    const sendLink=async(e)=>{
        e.preventDefault()
         const res =await fetch("http://localhost:8000/api/sendpasswordlink",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
         })
    }
  return (
    <div>
        <h1>enter your mail</h1>
        <input  onChange={(e)=>setEmail(e.target.value)} value={email}   />
        <button onClick={sendLink}>send</button>
    </div>
  )
}

export default ResetPassword