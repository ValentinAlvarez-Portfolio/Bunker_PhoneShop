import React, { useState, useEffect, useContext } from 'react'
import Checkout from '../Checkout/Checkout.jsx'
import Payment from '../Checkout/Payment/Payment.jsx'
import Cart from '../Checkout/Cart/Cart.jsx'
import Shipping from '../Checkout/Shipping/Shipping.jsx'
import { CheckoutContext } from '../../context/CheckoutContext/CheckoutContext.jsx'
import Resume from '../Checkout/Resume/Resume.jsx'

const CheckoutPage = () => {

      const { activeSection } = useContext(CheckoutContext)

      return (
            <>
                  {activeSection === 'cart' && <Cart />}
                  {activeSection === 'shipping' && <Shipping />}
                  {activeSection === 'payment' && <Payment />}
                  {activeSection === 'resume' && <Resume />}
            </>
      );
};

export default CheckoutPage