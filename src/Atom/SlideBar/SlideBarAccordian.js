import Accordion from 'react-bootstrap/Accordion';



function SlideBarAccordian(props) {
   

  return (
    <Accordion defaultActiveKey="0">
  
      <Accordion.Item style={{outline:"none",border:"none"}} eventKey="1">
      <Accordion.Header style={{outline:"none",border:"none"}}><h4>{props.course}{props.Student}</h4></Accordion.Header>
        <Accordion.Body >
   <ul style={{outline:"none",border:"none",listStyle:"none"}}>
      <li onClick={props.toJavascript} >{props.Javascript}<span onClick={props.OnlineEnquiryFcn}>{props.Enquiry}</span></li>
      <li onClick={props.toJava}>{props.Java}<span onClick={props.StudentVerificationFcn}>{props.Verfication}</span></li>
      <li onClick={props.toPython}>{props.Python}<span onClick={props.StudentLoginFcn}>{props.login}</span></li>
      <li onClick={props.idFcn}>{props.id}</li>
      <li onClick={props.CertificateVerificationFcn}>{props.Certificate}</li>

   </ul>
        </Accordion.Body>
        </Accordion.Item>

    

    </Accordion>
  );
}

export default SlideBarAccordian;