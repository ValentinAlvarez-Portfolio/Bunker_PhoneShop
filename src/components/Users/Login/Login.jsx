import React, { useState, useContext } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'

const Login = () => {

      const {
            login,
            message,
            error,
            isLoading,
            isError,
            currentUser,
      } = useContext(LoginContext)

      const [user, setUser] = useState({
            email: "",
            password: "",
      })

      const handleForm = (e) => {

            e.preventDefault()

            login(user)

            message && console.log(message)

            error && console.log(error)

            console.log(currentUser)

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

                  {isLoading && <p>Loading...</p>}

                  {isError && <p>{error}</p>}

                  {currentUser && <p>{currentUser.email}</p>}

                  {message && <p>{message}</p>}
            </>
      )
}

export default Login