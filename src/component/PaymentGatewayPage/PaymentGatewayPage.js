import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import {user} from "../../Recoil"
import { useRecoilState } from 'recoil';

const PaymentGatewayPage = () => {
  const [show,setShow]=useRecoilState(user)
  const navigate= useNavigate()

  const handleToken = (token) => {
    // Handle the payment token
    console.log(token);
    setShow(true)
    navigate("/")
  };

  return (
    <div>
      <h1>Payment Gateway</h1>
      <StripeCheckout
        stripeKey="pk_test_51NE6LASGUNfgBx8bKMHBk8JUukvByC2DAkS9jxHkzLjmmrTEzPPIKIS1SqDEVIbaTwVWPd0GXFSa2Wp8Nevje2aZ00wMgEeknC"
        token={handleToken}
        amount={1000} // Amount in cents
        name="Example Store"
        description="Purchase"
      >
        <button >Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default PaymentGatewayPage;
