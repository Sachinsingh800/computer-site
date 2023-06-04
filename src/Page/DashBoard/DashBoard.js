import React, { useEffect,useState } from 'react'
import NavBar from '../../component/NavBar/NavBar'
import style from "./DashBoard.module.css"
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { MdPayment } from 'react-icons/md';
import { GoIssueReopened } from 'react-icons/go';
import {BiSupport } from 'react-icons/bi';

function DashBoard() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")

  console.log(data )
  async function getData(){
    try {
      const res = await axios.get(
        "https://server-bu32.onrender.com/api/getFrom"

      );
     setData(res.data.userinfo)
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <NavBar/>
    <div className={style.main}>
    <div className={style.rightBar}>
    <input className={style.inputBox} placeholder='Search student here....'  value={search} onChange={(e)=>setSearch(e.target.value)} />
            <h3>My Dashboard</h3>
             <h5 ><CgProfile/>Accounts</h5>
             <h5><ImMobile/>Mobile</h5>
             <h5><MdPayment/>Payment</h5>
             <h5><GoIssueReopened/>Complaints</h5>
             <h5><BiSupport/>Supports</h5>
        </div>
        <div className={style.infoBox}>
    
          <div className={style.box}>
        {data
          .filter((elem) => {
            return elem?.name.toLowerCase().includes(search.toLowerCase());
          })
        .map((item)=>
      <div className={style.container}>
              <img className={style.img}
        src={`https://server-bu32.onrender.com/api/userImages/${item.image}`}
      />
      <h3>Name:<span>{item.name}</span></h3>
      <h3>email:<span>{item.email}</span></h3>
      <h3>Dob:<span>{item.dob}</span></h3>
      <h3>Father Name:<span>{item.fatherName}</span></h3>
      <h3>Mother Name:<span>{item.motherName}</span></h3>
      <h3>Dob:<span>{item.dob}</span></h3>
      <h3>course:<span>{item.course}</span></h3>
      <h3>Gender:<span>{item.gender}</span></h3>
      <h3>Address:<span>{item.address}</span></h3>
      <h3>Adhar No:<span>{item.adharNo}</span></h3>
      <h3>mobile:<span>{item.mobile}</span></h3>
      <h3>Parent Contact No:<span>{item.parentContact}</span></h3>
          
      </div>

      )}
      </div>
        </div>
  
    </div>
    </>
  )
}

export default DashBoard
