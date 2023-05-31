import React from 'react'
import style from "./RegisterUserHome.module.css"
import CourseAccodian from '../../Atom/SlideBar/CourseAccodian'
import CourseVideo from '../../Atom/SlideBar/CourseVideo'



function RegisterUserHome() {
  return (
    <div className={style.main}>
      <div className={style.CourseAccodian}>
        <CourseAccodian />
      </div>
      <div className={style.container}>
       <CourseVideo />
      </div>
    </div>
  )
}

export default RegisterUserHome
