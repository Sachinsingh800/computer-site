import Accordion from 'react-bootstrap/Accordion';



function SlideBarAccordian(props) {
   

  return (
    <Accordion defaultActiveKey="0">
  
      <Accordion.Item style={{outline:"none",border:"none"}} eventKey="1">
      <Accordion.Header style={{outline:"none",border:"none"}}><h4>Course</h4></Accordion.Header>
        <Accordion.Body >
   <ul style={{outline:"none",border:"none",listStyle:"none"}}>
      <li onClick={props.toJavascript}>{props.Javascript}</li>
      <li onClick={props.toJava}>{props.Java}</li>
      <li onClick={props.toPython}>{props.Python}</li>

   </ul>
        </Accordion.Body>
        </Accordion.Item>

    

    </Accordion>
  );
}

export default SlideBarAccordian;