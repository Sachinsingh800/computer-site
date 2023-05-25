import React from "react";
import style from "./NavBar.module.css";
import logo from "../../Image/book.webp"

function NavBar() {
  return (
    <nav>
      <ul className={style.nav_links}>
        <img className={style.logo}  src={logo} alt="logo"/>
        <li>
          <a href="#">Home</a>
        </li>

        <li className={style.dropdown}>
          <a href="#">About &#11167;</a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
          </ul>
        </li>

        <li className={style.dropdown}>
          <a href="#">Course &#11167;</a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
          </ul>
        </li>

        <li className={style.dropdown}>
          <a href="#">Student Zone &#11167;</a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
          </ul>
        </li>

        <li className={style.dropdown}>
          <a href="#">Gallery &#11167;</a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
          </ul>
        </li>

        <li className={style.dropdown}>
          <a href="#">Contact &#11167;</a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">Download</a>
        </li>

        <li>
          <a href="#">Faculties</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
