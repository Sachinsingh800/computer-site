import React  from "react";
import style from "./VerifiedProfile.module.css";
import NavBar from "../../component/NavBar/NavBar";
import { CgProfile } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { MdPayment } from 'react-icons/md';
import { GoIssueReopened } from 'react-icons/go';
import {BiSupport } from 'react-icons/bi';

const VerifiedProfile= () => {
  let user = JSON.parse(localStorage.getItem("admissionfrom"));
  console.log(user,"imgae check")

  return (
    <div className={style.home}>
        <NavBar />
        <div className={style.rightBar}>
            <h3>My Dashboard</h3>
             <h5 ><CgProfile/>Accounts</h5>
             <h5><ImMobile/>Mobile</h5>
             <h5><MdPayment/>Payment</h5>
             <h5><GoIssueReopened/>Complaints</h5>
             <h5><BiSupport/>Supports</h5>
        </div>
    <div className={style.container}>
      
        <img className={style.Profilebg} src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg" />
      
      <img className={style.img}
          src={`https://server-bu32.onrender.com/api/userImages/${user?.data.studentDetails?.image}`}
      />
      <div className={style.ProfileData}>
      <h3>My profile</h3>
      <ul >
  
        <li>
            <div className={style.info}>
            <h5>Name</h5>
            {user?.data?.studentDetails?.name}
            </div>
            </li>
        <li>
            <div className={style.info}>
            <h5>Gender</h5>
            {user?.data?.studentDetails?.gender}
            </div>
            </li>
        <li>
        <div className={style.info}>
            <h5>Email id</h5>
            {user?.data?.studentDetails?.email}
            </div>
            </li>
        <li>
        <div className={style.info}>
            <h5>Phone No</h5>
            {user?.data?.studentDetails?.mobile}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>Address</h5>
            {user?.data?.studentDetails?.address}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>Adhar No</h5>
            {user?.data?.studentDetails?.adharNo}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>course</h5>
            {user?.data?.studentDetails?.course}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>Date of birth</h5>
            {user?.data?.studentDetails?.dob}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>Father-Name</h5>
            {user?.data?.studentDetails?.fatherName}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>Mother-Name</h5>
            {user?.data?.studentDetails?.motherName}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h5>Parent Contact No</h5>
            {user?.data?.studentDetails?.parentContact}
            </div>
          
            </li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default VerifiedProfile;