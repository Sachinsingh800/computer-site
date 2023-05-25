import React ,{ useState} from 'react'
import "./SlideBar.css"
import logo from "../../Image/book.webp"

function SlideBar() {
  
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

  return (
    <div>
    <button onClick={toggleMenu}><img className="logo"  src={logo} alt="logo"/></button>
    <div className={`menu ${isOpen ? 'open' : ''}`}>
     <div  className='ToggleMenu'>
      <h2 onClick={toggleMenu} id='x'>❌</h2>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Course</h1>
      <h1>Student Zone</h1>
      <h1>Gallery</h1>
      <h1>Contact</h1>
      <h1>Download</h1>
      <h1>Faculties</h1>
     </div>
    </div>
  </div>
  )
}

export default SlideBar
