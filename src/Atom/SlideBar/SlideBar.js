import React ,{ useState} from 'react'
import "./SlideBar.css"
import logo from "../../Image/logo.gif"
import { Link } from 'react-router-dom';

function SlideBar() {
  
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

  return (
    <div className="main">
    <button id='btn' onClick={toggleMenu}><img className="logo"  src={logo} alt="logo"/></button>
    <div className={`menu ${isOpen ? 'open' : ''}`}>
     <div  className='ToggleMenu'>
      <h3 onClick={toggleMenu} id='x'>❌</h3>
     <Link to={"/"}><h2>Home</h2></Link> 
      <h2>About</h2>
     <Link to={"/Profile"}><h2>Profile</h2></Link> 
      <h2>Course</h2>
      <h2>Student Zone</h2>
      <h2>Gallery</h2>
      <h2>Contact</h2>
      <h2>Download</h2>
      <h2>Faculties</h2>
      <h2>Accounts</h2>
      <h2>Mobile</h2>
      <h2>Payment</h2>
      <h2>Complaints</h2>
      <h2>Supports</h2>
     </div>
    </div>
  </div>
  )
}

export default SlideBar
