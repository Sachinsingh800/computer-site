import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Image from "../../Image/logo.gif"
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
 
    left: false,
 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",paddingLeft:"20px",height:"100vh"}}>
      <Link to={"/"} style={{textDecoration:"none",color:"black"}}><h4>Home</h4></Link> 
      <h4>About</h4>
     <Link to={"/Profile"} style={{textDecoration:"none",color:"black"}}><h4>Profile</h4></Link> 
      <h4>Course</h4>
      <h4>Student Zone</h4>
      <h4>Gallery</h4>
      <h4>Contact</h4>
      <h4>Download</h4>
      <h4>Faculties</h4>
      <h4>Accounts</h4>
      <h4>Mobile</h4>
      <h4>Payment</h4>
      <h4>Complaints</h4>
      <h4>Supports</h4>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img style={{height:"40px"}} src={Image} alt="logo"/></Button>
       
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
