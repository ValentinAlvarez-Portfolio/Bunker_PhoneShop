import React, { useState, useContext, useEffect, useRef } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
import { CartContext } from '../../../context/CartContext/CartContext.jsx'

const Login = () => {

      const hasRun = useRef(false);

      const {
            login,
            message: loginMessage,
            error: loginError,
            isLoading: loginIsLoading,
            isError: loginIsError,
            needCart,
            setMessage,
            setError,
            currentUser,
      } = useContext(LoginContext)

      const {
            message: cartMessage,
            setMessage: setCartMessage,
            setError: setCartError,
            error: cartError,
            isLoading: cartIsLoading,
            getCartByUserId,
            createCart,
      } = useContext(CartContext)

      const [user, setUser] = useState({
            email: "",
            password: "",
      })

      useEffect(() => {

            if (currentUser && currentUser.id) {
                  createCart().then(() => {

                        cartMessage && console.log(cartMessage)

                        cartError && console.log(cartError)

                  }).catch((err) => {

                        err && console.log(err)

                  }).finally(() => {

                        !cartIsLoading && setCartError(null) && setCartMessage(null)

                  })
            }

      }, [currentUser]);

      useEffect(() => {

            if (!needCart) {
                  getCartByUserId().then(() => {

                        cartMessage && console.log(cartMessage)

                        cartError && console.log(cartError)

                  }).catch((err) => {

                        err && console.log(err)

                  }).finally(() => {

                        !cartIsLoading && setCartError(null) && setCartMessage(null)

                  })
            }

      }, [needCart]);

      const handleForm = (e) => {

            e.preventDefault()

            login(user).then(() => {

                  loginMessage && console.log(loginMessage)

                  loginError && console.log(loginError)


            }).catch((err) => {

                  err && console.log(err)

            })

      }

      const handleChange = (e) => {

            let value = e.target.value

            setUser({ ...user, [e.target.name]: value })

      }

      return (
            <>
                  <h2>Login</h2>

                  <form onSubmit={handleForm}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name='email'
                              onChange={handleChange}
                        />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name='password'
                              onChange={handleChange}
                        />

                        <button type="submit">Login</button>
                  </form>

                  {loginIsLoading && <p>Loading...</p>}

                  {loginIsError && <p>{loginError}</p>}

                  {loginMessage && <p>{loginMessage}</p>}

            </>
      )
}

export default Login