import React, { createContext, useState, useContext } from 'react'
import { getByUserId, create } from '../../utils/carts.js'
import { LoginContext } from '../LoginContext/LoginContext.jsx';

export const CartContext = createContext({

      cart: null,

      cartItems: [],

      cartTotal: 0,

      cartQuantity: 0,

      isError: false,

      isLoading: false,

      error: null,

      message: null,

      setMessage: () => { },

      setError: () => { },

      getCartByUserId: () => { },

      createCart: () => { },

      addItem: () => { }

})

export const CartProvider = ({ children }) => {

      const { currentUser, isAuthenticated, needCart } = useContext(LoginContext)

      const [cart, setCart] = useState(null)

      const [cartItems, setCartItems] = useState([])

      const [cartTotal, setCartTotal] = useState(0)

      const [cartQuantity, setCartQuantity] = useState(0)

      const [isError, setIsError] = useState(false)

      const [isLoading, setIsLoading] = useState(false)

      const [error, setError] = useState(null)

      const [message, setMessage] = useState(null)

      const notUserMessage = "Debe estar logueado para ver el carrito"

      const notItemMessage = "Debe seleccionar un producto"

      const getCartByUserId = async () => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (!currentUser.id) throw new Error(notUserMessage)

                  const { cart, message } = await getByUserId(currentUser.id)

                  if (!cart) throw new Error(message)

                  setCart(cart)

                  setCartItems(cart.items)

                  setCartTotal(cart.total)

                  setCartQuantity(cart.quantity)

            } catch (error) {

                  setIsError(true)

                  setError(error)

            } finally {

                  setIsLoading(false)

            }

      }

      const createCart = async () => {

            setIsLoading(true)

            setIsError(false)

            setMessage(null)

            setError(null)

            try {

                  if (!currentUser.id) throw new Error(notUserMessage)

                  if (!needCart) throw new Error("Ya tiene un carrito")

                  const response = await create(currentUser.id)

                  if (!response.cartPayload) throw new Error(message)

                  setCart(response.cartPayload)

                  setMessage(response.message)

            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(7, toString.length)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  setIsLoading(false)

            }

      }

      const addItem = async (item, quantity, uid) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (!uid) throw new Error(notUserMessage)

                  if (!item) throw new Error(notItemMessage)

                  const { cart } = await getByUserId(uid)

                  if (!cart) throw new Error("No se encontró el carrito, intente loguearse nuevamente")


            } catch (error) {

                  setIsError(true)

                  setError(error)

            } finally {

                  setIsLoading(false)

            }

      }


      return (

            <CartContext.Provider value={{
                  cart,
                  cartItems,
                  cartTotal,
                  cartQuantity,
                  isError,
                  isLoading,
                  error,
                  message,
                  setMessage,
                  setError,
                  getCartByUserId,
                  createCart,
                  addItem
            }}>

                  {children}

            </CartContext.Provider>

      )


};
