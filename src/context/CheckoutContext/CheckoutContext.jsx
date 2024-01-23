import React, { createContext, useState } from 'react'
import { getOrderById, getOrdersByUId, create, } from '../../utils/orders.js'

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {

      const [order, setOrder] = useState(null)

      const [orders, setOrders] = useState(null)

      const [cardInstallments, setCardInstallments] = useState(1)

      const [activeSection, setActiveSection] = useState('cart')


      const getOrderByOrderId = async (id) => {

            try {

                  const order = await getOrderById(id)

                  setOrder(order)

            } catch (error) {

                  console.log(error)

            }

      }

      const getOrdersByUserId = async (uid) => {

            try {

                  const { existingOrders, message } = await getOrdersByUId(uid)

                  console.log(message)

                  const orders = existingOrders

                  setOrders(orders)

            } catch (error) {

                  console.log(error)

            }

      }

      const createOrder = async (order) => {

            try {

                  const { orderPayload, id, message } = await create(order)

                  setOrder(orderPayload)

            } catch (error) {

                  console.log(error)

            }

      }

      return (

            <CheckoutContext.Provider value={{
                  order,
                  orders,
                  activeSection,
                  cardInstallments,
                  setCardInstallments,
                  getOrderByOrderId,
                  getOrdersByUserId,
                  createOrder,
                  setActiveSection
            }}>
                  {children}
            </CheckoutContext.Provider>

      )

}