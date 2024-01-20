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
            setMessage,
            setError,
            currentUser,
      } = useContext(LoginContext)

      const {
            createCart,
      } = useContext(CartContext)

      const [user, setUser] = useState({
            email: "",
            password: "",
      })

      useEffect(() => {

            if (!hasRun.current && currentUser && currentUser.id) {

                  const result = createCart()

                  hasRun.current = true;

            }

            loginMessage && console.log(loginMessage)

            loginError && console.log(loginError)

            loginError && setError(null)

            loginMessage && setMessage(null)

      }, [currentUser && (loginMessage || loginError)]);

      const handleForm = (e) => {

            e.preventDefault()

            login(user)

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

                  {currentUser && <p>El usuario {currentUser.email}, ha iniciado sesión correctamente</p>}

            </>
      )
}

export default Login