import React ,{useState ,useEffect} from 'react'
import style from "./DashBoardPages.module.css"
import axios from 'axios';
import { CourseData } from '../../Atom/SlideBar/CoursesData/CoursesData';
import Graph from '../../Atom/SlideBar/Graph/Graph';

export  function StudentDetails({search}) {
  
    const [data,setData] = useState([])
   
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
  <br/>
  <h3>Name:<span>{item.name}</span></h3>
  <h3>Email:<span>{item.email}</span></h3>
  <h3>Dob:<span>{item.dob}</span></h3>
  <h3>Father Name:<span>{item.fatherName}</span></h3>
  <h3>Mother Name:<span>{item.motherName}</span></h3>
  <h3>Course:<span>{item.course}</span></h3>
  <h3>Gender:<span>{item.gender}</span></h3>
  <h3>Address:<span>{item.address}</span></h3>
  <h3>Adhar No:<span>{item.adharNo}</span></h3>
  <h3>Mobile:<span>{item.mobile}</span></h3>
  <h3>Parent Contact No:<span>{item.parentContact}</span></h3>
      
  </div>

  )}
  </div>
  )
}



export  function Courses() {
 
  return (
    <div className={style.box}>
        {CourseData.map((item)=>
        
        <div className={style.container}>
        <h1>{item.name}</h1>
        <h3>{item.para}</h3>
        </div>
        
        )}
               
  </div>
  )
}





export  function Results({search}) {
    const [data,setData] = useState([])
 
   
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
    <div className={style.box}>
         
    {data
    //   .filter((elem) => {
    //     return elem?.name.toLowerCase().includes(Search.toLowerCase());
    //   })
    .map((item)=>
  <div className={style.container}>
          <img className={style.img}
    src={`https://server-bu32.onrender.com/api/userImages/${item.image}`}
  />
  <br/>

  <h3>Name:<span>{item.name}</span></h3>
  <h3>email:<span>{item.email}</span></h3>
  <h3>Dob:<span>{item.dob}</span></h3>
  <h3>course:<span>{item.course}</span></h3>
  <h3 className={style.Graph}> <Graph /></h3>

      
  </div>

  )}
  </div>
  )
}


export  function Certificate() {
 
  return (
    <div className={style.box}>
          <div className={style.container}>
          <h1>Certificate</h1>
          </div>
       
  </div>
  )
}