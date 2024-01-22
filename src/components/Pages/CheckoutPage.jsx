import React, { useState, useEffect, useContext } from 'react'
import Checkout from '../Checkout/Checkout.jsx'
import Payment from '../Checkout/Payment/Payment.jsx'
import Cart from '../Checkout/Cart/Cart.jsx'
import Shipping from '../Checkout/Shipping/Shipping.jsx'
import { CheckoutContext } from '../../context/CheckoutContext/CheckoutContext.jsx'
import CartSections from '../Checkout/Cart/CartNavbar/CartSections/CartSections.jsx'

const CheckoutPage = () => {

      const { activeSection } = useContext(CheckoutContext)

      console.log(activeSection)

      return (
            <>
                  {activeSection === 'cart' && <Cart />}
                  {activeSection === 'shipping' && <Shipping />}
                  {activeSection === 'payment' && <Payment />}
            </>
      );
};

export default CheckoutPage