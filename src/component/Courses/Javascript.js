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
        <div className={style.box3}>
           <div>
            <h1>About this Course</h1>
            <p>You interact with JavaScript code all the time — you just might not realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.</p>
           </div>
           <div className={style.innerbox3}>
            <h1>Skills you'll gain</h1>
            <ul>
               <li>Build core programming concepts</li>
               <li>Learn object-oriented concepts</li>
               <li>Read and write JavaScript</li>
            </ul>
           </div>
        </div>
    </div>
    </>
  )
}

export default Javascript
