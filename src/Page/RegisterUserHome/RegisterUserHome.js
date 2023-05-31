import React from 'react'
import style from "./RegisterUserHome.module.css"
import CourseAccodian from '../../Atom/SlideBar/CourseAccodian'



function RegisterUserHome() {
  return (
    <div className={style.main}>
      <div className={style.CourseAccodian}>
        <CourseAccodian />
      </div>
      <div className={style.container}>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default RegisterUserHome
