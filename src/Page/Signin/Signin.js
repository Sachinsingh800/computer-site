import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Signin.module.css"
import { useNavigate } from 'react-router-dom';


function Signin() {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(null)

const navigate = useNavigate()

    function NavigateToSignup(){
      navigate("/Signup")
  }

    async function submit(e){
      e.preventDefault();
      try{
      const res= await axios.post("http://localhost:8000/api/login",{email,password})
      console.log(res)
      localStorage.setItem("user",JSON.stringify(res.data))
      alert(res.data.message)
      navigate("/")
      }catch(error){
       console.log(error.message)
      }
    }

  return (
    <>
    <div className={style.main}>
      
    <Form  className={style.form}>
     
    <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

  

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" name='password' />
      </Form.Group>




      <Button onClick={submit} variant="primary" type="submit">
        Login
      </Button>
      <br/>
      <h6 onClick={NavigateToSignup}>Register</h6>
    </Form>
    </div>
    </>
  );
}

export default Signin;