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
]);
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
