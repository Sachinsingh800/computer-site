import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Page/Signup/Signup';
import Signin from './Page/Signin/Signin';
import Profile from './Page/Profile/Profile';
import Java from './component/Courses/Java/Java';
import Javascript from './component/Courses/Javascript/Javascript';
import Python from './component/Courses/Python/Python';
import StudentForm from './component/StudentForm/StudentForm';
import RegisterUserHome from './Page/RegisterUserHome/RegisterUserHome';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Java",
    element: <Java />,
  },
  {
    path: "/Javascript",
    element: <Javascript />,
  },
  {
    path: "/Python",
    element: <Python />,
  },
  {
    path: "/Form",
    element: <StudentForm />,
  },
  {
    path: "/RegisterUserHome",
    element: <RegisterUserHome />,
  },
]);
root.render(
  <React.StrictMode>
     <RecoilRoot>
     <RouterProvider router={router} />
     </RecoilRoot>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
