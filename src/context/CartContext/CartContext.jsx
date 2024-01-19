import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext({
      cart: [],
      totalPrice: 0,
      totalQuantity: 0
})

export const CartProvider = ({ children }) => {

      const [cart, setCart] = useState([])
      const [totalPrice, setTotalPrice] = useState(0)
      const [totalQuantity, setTotalQuantity] = useState(0)


      const addProduct = (product, quantity) => {

            const existingItem = cart.find(i => i.product._id === product._id)

            if (!existingItem) {


                  setCart(prev => [...prev, { product, quantity, totalProductPrice: product.price * quantity }])
                  setTotalPrice(prev => prev + (product.price * quantity)
                  )
                  setTotalQuantity(prev => prev + quantity)


                  alert(`Se agregó ${quantity} ${product.title} al carrito`)


            } else {

                  const newCart = cart.map(i => {
                        if (i.product._id === product._id) {

                              setTotalPrice(prev => prev + (product.price * quantity))
                              setTotalQuantity(prev => prev + quantity)

                              return { ...i, quantity: i.quantity + quantity, totalProductPrice: i.totalProductPrice + (product.price * quantity) }

                        } else {
                              return i
                        };
                  })

                  setCart(newCart)

            }


      }

      const removeItem = (productId) => {

            const deletedProduct = cart.find(i => i.product._id === productId)
            const newCart = cart.filter(i => i.product._id !== productId)

            setCart(newCart)
            setTotalPrice(prev => prev - (deletedProduct.product.price * deletedProduct.quantity))
            setTotalQuantity(prev => prev - deletedProduct.quantity)


      }

      const clearCart = () => {

            setCart([])
            setTotalPrice(0)
            setTotalQuantity(0)

      }

      return (
            <>
                  <CartContext.Provider value={{
                        cart,
                        totalPrice,
                        totalQuantity,
                        addProduct,
                        removeItem,
                        clearCart
                  }}>

                        {children}

                  </CartContext.Provider>
            </>
      )
}

export default CartContext