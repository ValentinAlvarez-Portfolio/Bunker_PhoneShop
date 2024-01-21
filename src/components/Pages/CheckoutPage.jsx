import React, { useState } from 'react'
import Checkout from '../Checkout/Checkout.jsx'
import Payment from '../Checkout/Payment/Payment.jsx'
import Cart from '../Checkout/Cart/Cart.jsx'

const CheckoutPage = (props) => {

      const [isPayment, setIsPayment] = useState(false);
      const [isShipping, setIsShipping] = useState(false);
      const [isCart, setIsCart] = useState(false);

      return (
            <>
                  <Cart />
                  <Payment />
            </>
      )
}

export default CheckoutPage