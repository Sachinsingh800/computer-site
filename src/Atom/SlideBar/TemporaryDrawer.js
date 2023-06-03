import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Image from "../../Image/logo.gif"
import { Link } from 'react-router-dom';
import {FaHome } from 'react-icons/fa';
import {FcAbout } from 'react-icons/fc';
import {CgProfile } from 'react-icons/cg';
import {BiBook } from 'react-icons/bi';
import {IoIosWoman } from 'react-icons/io';
import {FcGallery} from 'react-icons/fc';
import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {FaCloudDownloadAlt} from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md';
import {FaMobileAlt} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';
import {GoIssueReopened} from 'react-icons/go'
import {BiSupport} from 'react-icons/bi'
import style from "./TemporaryDrawer.module.css"
import SlideBarAccordian from './SlideBarAccordian';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {
  const navigate=useNavigate()
  const Java="java"
  const Javascript="Javascript"
  const Python="Python"
  const course="Course"
  const Student="Student Zone"
  const Enquiry="Online Enquiry"
  const Verfication="Student Verification"
  const login="Student login"
  const Certificate="Certificate Verifiaction"
  const id="id Card"

  function toJava(){
    navigate("/Java")
 }
 function toJavascript(){
    navigate("/Javascript")
 }
 function toPython(){
    navigate("/Python")
 }
 function OnlineEnquiryFcn(){
    navigate("/Form")
 }
 function StudentLoginFcn(){
    navigate("/Signin")
 }
 function CertificateVerificationFcn(){
    // navigate("/")
 }
 function idFcn(){
    // navigate("/Form")
 }
 function  StudentVerificationFcn(){
    navigate("/StudentVerification")
 }
  const [state, setState] = React.useState({
 
    left: false,
 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={style.opt} style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",paddingLeft:"20px",height:"100vh"}}>
      <Link to={"/"} className={style.Link}><h4><FaHome/>Home</h4></Link> 
      <Link to={"/AboutUs"} className={style.Link}><h4><FcAbout />About</h4></Link> 
     <Link to={"/Profile"} className={style.Link}><h4><CgProfile/>Profile</h4></Link> 
      <h4><BiBook/><SlideBarAccordian
       Java={Java} 
       Javascript={Javascript} 
       Python={Python}
       toJava={toJava}
        toJavascript={toJavascript}
         toPython={toPython}
       course={course}
      
      /> </h4>

      <h4><IoIosWoman/><SlideBarAccordian
           Student={Student}
           Enquiry={Enquiry}
          Verfication={Verfication}
           login={login}
           id={id}
           Certificate={Certificate}
           OnlineEnquiryFcn={OnlineEnquiryFcn}
           StudentLoginFcn={StudentLoginFcn}
           CertificateVerificationFcn={CertificateVerificationFcn}
           StudentVerificationFcn={StudentVerificationFcn}
           idFcn={idFcn}
      /> </h4>
         <Link to={"/Gallery"} className={style.Link}> <h4><FcGallery/>Gallery</h4></Link> 
         <Link to={"/ContactUs"} className={style.Link}><h4><MdOutlinePermContactCalendar/>Contact</h4></Link> 
      <h4><FaCloudDownloadAlt/>Download</h4>
      <h4><HiUserGroup/>Faculties</h4>
      <h4><MdOutlineAccountBalanceWallet/>Accounts</h4>
      <h4><FaMobileAlt/>Mobile</h4>
      <h4><MdPayment/>Payment</h4>
      <h4><GoIssueReopened/>Complaints</h4>
      <h4><BiSupport/>Supports</h4>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img style={{height:"40px"}} src={Image} alt="logo"/></Button>
       
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
