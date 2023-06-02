import React from 'react'
import style from "./IdCard.module.css"
import barcode from "../../Image/Barcode.png"

function IdCard() {
    let user = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className={style.main}>
        <div className={style.container}>
    <div className={style.box1}>
      <img  className={style.img}  src={`https://server-bu32.onrender.com/api/userImages/${user?.studentData?.image}`} alt='dp' />
      <h4>{user?.studentData?.name}</h4>
    </div>
    <div className={style.box2}>
        <h5>Id No :  000000</h5>
        <h5>DOB :  {user?.studentData?.dob}</h5>
        <h5>Email  :  {user?.studentData?.email}</h5>
        <h5>Phone  :  {user?.studentData?.mobile}</h5>
    </div>
    <div className={style.box3}>
      <img className={style.barcode} src={barcode} alt='barCode'/>
    </div>
    </div>
    </div>
  )
}

export default IdCard
