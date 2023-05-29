import React from "react";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "../../Atom/SlideBar/TemporaryDrawer";

function NavBar() {
  const user=JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()


  function logout(){
    localStorage.clear()
    navigate("/Signin")
  }

function navigateToProfile(){
  navigate("/Profile")
}
  function navigateToSignin(){
    navigate("/Signin")
  }
  return (
    <nav>
      <ul className={style.nav_links}>
         <span className={style.logo}><TemporaryDrawer /></span>
        <li>
          <a href="/">Home</a>
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
        <li>
       {
            user ?  
            <>
                 <li className={style.dropdown}>
                 <img  className={style.userImg}
              src={`https://server-bu32.onrender.com/api/userImages/${user?.userData?.image}`}
            />
          <ul className={style.dropdown_contents}>
            <li>
            <span onClick={navigateToProfile}>Profile</span> 
            </li>
            <li>
            <span onClick={logout}>Signout</span> 
            </li>
          </ul>
        </li>
         
  
      </>
      :  <span onClick={navigateToSignin}>Signin</span>
       }
  
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
