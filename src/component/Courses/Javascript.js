import React from 'react'
import style from "./Javascript.module.css"
import NavBar from '../NavBar\'/NavBar'
import { BsBarChartFill } from 'react-icons/bs';
import { BiTimeFive} from 'react-icons/bi';
import { TbCertificate} from 'react-icons/tb';
import { LuBookOpenCheck} from 'react-icons/lu';

function Javascript() {
  return (
    <>     
       <NavBar/>
    <div className={style.main}>
        <div className={style.box1}>
            <p>Course</p>
        <h1> Learn JavaScript</h1>
        <p>Learn how to use JavaScript - a powerful and flexible programmimg language for adding website interactivity</p>
        <h6>4.5 <span>⭐⭐⭐⭐⭐</span></h6>
        <button>Start</button>
        </div>
        <div className={style.box2}>
          <ul>
            <li>
               <span><BsBarChartFill /></span> 
                <p>Skill level</p>
                <h4>Beginner</h4>
            </li>
            <li>
               <span><BiTimeFive /></span> 
                <p>Time to complete</p>
                <h4>Approx. 20 hours</h4>
            </li>
            <li>
               <span><TbCertificate /></span> 
                <p>Certificate of completion</p>
                <h4>Included with paid plans</h4>
            </li>
            <li>
               <span><LuBookOpenCheck /></span> 
                <p>Prerequisites</p>
                <h4>None</h4>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Javascript
