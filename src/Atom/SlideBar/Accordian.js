import Accordion from 'react-bootstrap/Accordion';
import style from "./Accordian.module.css"

function Accordian() {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="1">
      <Accordion.Header><h4>Welcome to Learn JavaScript</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
        <Accordion.Header><h4>Introduction</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
        <Accordion.Header><h4>Conditionals</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
        <Accordion.Header><h4>Functions</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
        <Accordion.Header><h4>Scope</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
        <Accordion.Header><h4>Arrays</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
        <Accordion.Header><h4>Loops</h4></Accordion.Header>
        <Accordion.Body>
   <ul>
      <li>Lesson</li>
      <li>projects</li>
      <li>Quiz</li>
      <li>Articles</li>
      <li>Lessss</li>
      <li>Lesson</li>
   </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;