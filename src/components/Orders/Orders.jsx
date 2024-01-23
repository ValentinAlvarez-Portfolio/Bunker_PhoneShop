import React, { useState, useEffect, useContext } from 'react'
import { CheckoutContext } from '../../context/CheckoutContext/CheckoutContext.jsx'

const Orders = () => {

      const { orders } = useContext(CheckoutContext)

      const ordersArray = orders ? Object.values(orders) : null

      console.log(orders)

      return (
            <>

                  <h2>Ordenes completadas</h2>

                  {ordersArray !== null ? ordersArray.map((order) => {

                        return (

                              <div key={order.id}>

                                    <h3>Orden N° {order.id}</h3>

                                    <h3>Productos </h3>

                                    {order.items.map((item) => {

                                          return (

                                                <div key={item.id}>

                                                      <h4>{item.title}</h4>

                                                      <h4>{item.quantity}</h4>

                                                </div>

                                          )

                                    }

                                    )}

                                    <h3>Envío</h3>

                                    <ul>
                                          <li>{order.buyer.shippingAddress.country}</li>
                                          <li>{order.buyer.shippingAddress.city}</li>
                                          <li>{order.buyer.shippingAddress.location}</li>
                                          <li>{order.buyer.shippingAddress.street}</li>
                                          <li>{order.buyer.shippingAddress.number}</li>
                                    </ul>

                                    <h3>Pago</h3>

                                    <h4>Cuotas: {order.installments}</h4>
                                    <h4>Precio de cada cuota: {order.installmentsPrice}</h4>

                                    <h3>Total: {order.total}</h3>

                                    <hr />

                              </div>

                        )
                  }

                  ) : <h3>No hay ordenes completadas</h3>}



            </>
      )
}

export default Orders