import React from 'react'
import style from "./NavBar.module.css"
import DropDownButton from '../DropDownButton/DropDownButton'



function NavBar() {
    const about="about"
    const course="course"
    const studenZone="student Zone"
    const gallery="gallery"
    const contact="contact"


  return (
    <ul className={style.options_bar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFNo2ukeIkBiER4aEghSpZetYIkQmViASt7HQ85h8Lg&usqp=CAU&ec=48665701" alt='logo'/>
          <li>Home</li>
          <li><DropDownButton about={about} /></li>
          <li><DropDownButton course={course} /></li>
          <li><DropDownButton studenZone={studenZone} /></li>
          <li><DropDownButton gallery={gallery} /></li>
          <li><DropDownButton contact={contact} /></li>
          <li>Download</li>
          <li>Faculties</li>
      

    </ul>
  )
}

export default NavBar
