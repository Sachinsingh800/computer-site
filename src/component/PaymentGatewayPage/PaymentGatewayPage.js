import React ,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import style from "./PaymentGatewayPage.module.css"


const PaymentGatewayPage = () => {
  const [show,setShow] = useState(JSON.parse(localStorage.getItem("verified"))) 
  const navigate= useNavigate()

  const handleToken = (token) => {
    // Handle the payment token
    console.log(token);
    setShow(true)
    navigate("/")
  };

  return (
    <div className={style.main}>
     <div>
      <h2>Cashfree</h2>
      <h3>Do Not Close This Window (Or Click The Back Button)</h3>
      <img className={style.img} src={"https://media.giphy.com/media/EopV0wKH3USE9F7fhe/giphy.gif"} />
     <StripeCheckout
        stripeKey="pk_test_51NE6LASGUNfgBx8bKMHBk8JUukvByC2DAkS9jxHkzLjmmrTEzPPIKIS1SqDEVIbaTwVWPd0GXFSa2Wp8Nevje2aZ00wMgEeknC"
        token={handleToken}
        amount={1000000} // Amount in cents
        name="Example Store"
        description="Purchase"
      >
        <button className={style.btn} >Pay Now</button>
      </StripeCheckout>
     </div>
      
    </div>
  );
};

export default PaymentGatewayPage;
