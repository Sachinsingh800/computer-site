
import style from "./IdCard.module.css"
import barcode from "../../Image/Barcode.png"
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function IdCard() {
  const myDivRef = useRef(null);
  const handleDownload = () => {
    const element = document.getElementById('myDiv');
    
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('myPage.pdf');
    });
  };
  



    let user = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className={style.main} >
        <div className={style.container} ref={myDivRef} id="myDiv">
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
    <button className={style.btn} onClick={handleDownload}>Download Page as PDF</button>
    </div>
  )
}

export default IdCard
