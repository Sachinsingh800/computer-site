
import './App.css';
import HomePage from './Page/HomePage/HomePage';
import RegisterUserHome from './Page/RegisterUserHome/RegisterUserHome';
import NavBar from './component/NavBar/NavBar';
import {user} from "./Recoil"
import { useRecoilValue } from 'recoil';

function App() {
const show = useRecoilValue(user)
  return (
    <div className="App">
      <NavBar />
      {show ? <RegisterUserHome />  :<HomePage /> }
   

    </div>
  );
}

export default App;
