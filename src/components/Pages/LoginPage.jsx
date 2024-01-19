import React, { useState } from 'react'
import Login from '../Users/Login/Login.jsx'
import Register from '../Users/Register/Register.jsx'

const LoginPage = () => {

      const [isRegistering, setIsRegistering] = useState(false)

      return (
            <>
                  {isRegistering ? <Register /> : <Login />}

                  <hr />

                  <button onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Login' : 'Register'}</button>
            </>
      )
}

export default LoginPage