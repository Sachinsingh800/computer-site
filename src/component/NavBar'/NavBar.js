import React from 'react'
import style from "./NavBar.module.css"




function NavBar() {



  return (
    <nav>
      <ul className={style.nav_links}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li className={style.dropdown}>
          <a href='#'>Services</a>
          <ul className={style.dropdown_content}>
            <li><a href='#'>Service 1</a></li>
            <li><a href='#'>Service 2</a></li>
            <li><a href='#'>Service 3</a></li>
          </ul>
        </li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
