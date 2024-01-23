import React, { createContext, useState, useContext } from 'react'
import { getByUserId, create, update, calculateTotals } from '../../utils/carts.js'
import { LoginContext } from '../LoginContext/LoginContext.jsx';
import { checkSession } from '../../utils/users.js';
import { doc, updateDoc } from "firebase/firestore";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

      const { currentUser, setCurrentUser, setAuthenticated, isAuthenticated, needCart } = useContext(LoginContext)

      const [cart, setCart] = useState(null)

      const [totalPrice, setTotalPrice] = useState(0)

      const [isEmpty, setIsEmpty] = useState(true)

      const [isError, setIsError] = useState(false)

      const [isLoading, setIsLoading] = useState(false)

      const [error, setError] = useState(null)

      const [message, setMessage] = useState(null)

      const notUserMessage = "Debe estar logueado para ver el carrito"

      const notItemMessage = "Debe seleccionar un producto"

      const getCartByUserId = async (uid) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (!currentUser.id && !uid) throw new Error("No se recibió el id del usuario")

                  const idUsuario = uid ? uid : currentUser.id

                  const { existingCart, message } = await getByUserId(idUsuario)

                  if (!existingCart) throw new Error(message)

                  const { totalQuantity, totalPrice } = calculateTotals(existingCart.cartItems)

                  setIsEmpty(existingCart.cartItems.length === 0)

                  setCart({
                        ...existingCart,
                        cartTotal: totalPrice,
                        cartQuantity: totalQuantity
                  })

                  setMessage(message)



            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(7, toString.length)

                  setIsError(true)

                  setError(errorMessage)

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

      const addItem = async (item, quantity) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (!isAuthenticated) throw new Error(notUserMessage)

                  if (!item) throw new Error(notItemMessage)

                  const { existingCart, message } = await getByUserId(currentUser.id)

                  if (!existingCart) throw new Error(message)

                  const itemToAdd = {
                        code: item.code,
                        title: item.title,
                        color: item.color,
                        price: item.price,
                        thumbnails: item.thumbnails,
                        discount: item.discount,
                        oldPrice: item.oldPrice,
                        id: item.id,
                        stock: item.stock, //A eliminar de acá
                        quantity: quantity
                  }

                  const existItem = existingCart.cartItems.find(cartItem => cartItem.code === itemToAdd.code)

                  if (existItem) {

                        const updatedProduct = {
                              ...existItem,
                              quantity: existItem.quantity + quantity
                        }

                        const updatedCart = {
                              ...existingCart,
                              cartItems: existingCart.cartItems.map(cartItem => cartItem.code === itemToAdd.code ? updatedProduct : cartItem)
                        }

                        const { totalQuantity, totalPrice } = calculateTotals(updatedCart.cartItems)

                        const newCart = {
                              ...updatedCart,
                              cartTotal: totalPrice,
                              cartQuantity: totalQuantity
                        }

                        const { cartPayload, message } = await update(newCart)

                        setIsEmpty(false)

                        setCart(cartPayload)

                        setMessage(message)

                  } else {

                        const updatedCart = {
                              ...existingCart,
                              cartItems: [...existingCart.cartItems, itemToAdd]
                        }

                        const { totalQuantity, totalPrice } = calculateTotals(updatedCart.cartItems)

                        const newCart = {
                              ...updatedCart,
                              cartTotal: totalPrice,
                              cartQuantity: totalQuantity
                        }

                        const { cartPayload, message } = await update(newCart)

                        setIsEmpty(false)

                        setCart(cartPayload)

                        setMessage(message)

                  }

            } catch (error) {

                  setIsError(true)

                  setError(error)

            } finally {

                  setIsLoading(false)

            }

      }

      const increaseQuantity = async (productId) => {
            if (currentUser) {

                  const productIndex = cart.cartItems.findIndex((item) => item.id === productId);


                  if (productIndex >= 0) {

                        const updatedCartItems = [...cart.cartItems];
                        updatedCartItems[productIndex].quantity += 1;

                        const updatedCart = {
                              ...cart,
                              cartItems: updatedCartItems
                        };


                        const { cartPayload, message } = await update(updatedCart);

                        const { totalPrice, totalQuantity } = calculateTotals(cartPayload.cartItems);

                        setCart({
                              ...cartPayload,
                              cartTotal: totalPrice,
                              cartQuantity: totalQuantity
                        });

                        setMessage(message);
                  }
            }
      };

      const decreaseQuantity = async (productId) => {
            if (currentUser) {

                  const productIndex = cart.cartItems.findIndex((item) => item.id === productId);


                  if (productIndex >= 0) {

                        const updatedCartItems = [...cart.cartItems];
                        updatedCartItems[productIndex].quantity -= 1;

                        const updatedCart = {
                              ...cart,
                              cartItems: updatedCartItems
                        };


                        const { cartPayload, message } = await update(updatedCart);

                        const { totalPrice, totalQuantity } = calculateTotals(cartPayload.cartItems);

                        setCart({
                              ...cartPayload,
                              cartTotal: totalPrice,
                              cartQuantity: totalQuantity
                        });

                        setMessage(message);
                  }
            }
      };

      const deleteItem = async (item) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (!isAuthenticated) throw new Error(notUserMessage)

                  if (!item) throw new Error(notItemMessage)

                  const { existingCart, message } = await getByUserId(currentUser.id)

                  if (!existingCart) throw new Error(message)

                  const existingItem = existingCart.cartItems.find(cartItem => cartItem.code === item.code)

                  if (!existingItem) throw new Error(notItemMessage)

                  const updatedCart = {

                        ...existingCart,

                        cartItems: existingCart.cartItems.filter(cartItem => cartItem.code !== item.code)

                  }

                  const { totalQuantity, totalPrice } = calculateTotals(updatedCart.cartItems)

                  setTotalPrice(totalPrice)

                  const newCart = {

                        ...updatedCart,

                        cartTotal: totalPrice,

                        cartQuantity: totalQuantity

                  }

                  const reponse = await update(newCart)

                  setIsEmpty(false)

                  setCart(reponse.cartPayload)

                  setMessage(reponse.message)

            } catch (error) {

                  setIsError(true)

                  setError(error)

            } finally {

                  setIsLoading(false)

            }

      }

      const clearCart = async () => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (!isAuthenticated) throw new Error(notUserMessage)

                  const { existingCart, message } = await getByUserId(currentUser.id)

                  if (!existingCart) throw new Error(message)

                  const updatedCart = {
                        ...existingCart,
                        cartItems: []
                  }

                  const { totalQuantity, totalPrice } = calculateTotals(updatedCart.cartItems)

                  const newCart = {
                        ...updatedCart,
                        cartTotal: totalPrice,
                        cartQuantity: totalQuantity
                  }

                  const response = await update(newCart)

                  setIsEmpty(true)

                  setCart(response.cartPayload)

                  setMessage(response.message)

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
                  setCart,
                  totalPrice,
                  isEmpty,
                  isError,
                  isLoading,
                  error,
                  message,
                  setMessage,
                  setError,
                  getCartByUserId,
                  createCart,
                  addItem,
                  increaseQuantity,
                  decreaseQuantity,
                  deleteItem,
                  clearCart,
            }}>

                  {children}

            </CartContext.Provider>

      )


};
