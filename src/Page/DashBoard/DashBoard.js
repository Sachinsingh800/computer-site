import React from 'react'
import NavBar from '../../component/NavBar/NavBar'
import style from "./DashBoard.module.css"

function DashBoard() {
  return (
    <>
      <NavBar/>
    <div className={style.main}>
      
      <h1>DashBoard</h1>
    </div>
    </>
  )
}

export default DashBoard
