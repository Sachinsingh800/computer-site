import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

function DropDownButton(props) {

  return (
    <MDBDropdown >
    <MDBDropdownToggle  style={{backgroundColor:"transparent" , boxShadow:"none",color:"black"}}>{props.about}{props.course}{props.studenZone}{props.gallery}{props.contact}</MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem link>home</MDBDropdownItem>
      <MDBDropdownItem link>Another action</MDBDropdownItem>
      <MDBDropdownItem link>Something else here</MDBDropdownItem>
      <MDBDropdownItem link>Something else here</MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
  )
}

export default DropDownButton
