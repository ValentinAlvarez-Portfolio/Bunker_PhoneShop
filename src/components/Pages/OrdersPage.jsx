import React, { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext/LoginContext.jsx'
import { CheckoutContext } from '../../context/CheckoutContext/CheckoutContext.jsx'
import Orders from '../Orders/Orders.jsx'


const OrdersPage = () => {

      const { currentUser } = useContext(LoginContext)

      const { getOrdersByUserId } = useContext(CheckoutContext)

      useEffect(() => {

            currentUser && getOrdersByUserId(currentUser.id)

      }, [currentUser])

      return (
            <>
                  <Orders />
            </>
      )
}

export default OrdersPage