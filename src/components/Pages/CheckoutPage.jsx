import React, { useState } from 'react'
import Checkout from '../Checkout/Checkout.jsx'
import Payment from '../Checkout/Payment/Payment.jsx'
import Cart from '../Checkout/Cart/Cart.jsx'
import Shipping from '../Checkout/Shipping/Shipping.jsx'

const CheckoutPage = (props) => {

      const [isPayment, setIsPayment] = useState(false);
      const [isShipping, setIsShipping] = useState(false);
      const [isCart, setIsCart] = useState(false);

      return (
            <>
                  <Cart />
                  <Shipping />
                  <Payment />
            </>
      )
}

export default CheckoutPage