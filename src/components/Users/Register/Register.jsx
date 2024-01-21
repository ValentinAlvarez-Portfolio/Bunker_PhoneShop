import React, { useState, useContext } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
const Register = () => {

      const {
            register,
            message,
            setMessage,
            error,
            setError,
            isLoading,
            isError,
      } = useContext(LoginContext)

      const [user, setUser] = useState({
            first_name: "",
            last_name: "",
            email: "",
            age: 0,
            password: "",
            confirm_password: "",
            phone: "",
            address: {
                  city: "",
                  location: "",
                  street: "",
                  number: ""
            },
      })

      const handleForm = (e) => {

            e.preventDefault()

            register(user).then(() => {

                  message && console.log(message)

                  error && console.log(error)

            })

            setError(null)
            setMessage(null)

      }

      const handleChange = (e) => {

            let value = e.target.value

            if (e.target.name === "first_name" || e.target.name === "last_name" || e.target.name === 'country') {

                  value = value.charAt(0).toUpperCase() + value.slice(1)

            }

            if (e.target.name === "email") {

                  value = value.toLowerCase()

            }

            if (e.target.name === "age") {

                  value = Number(value)

            }

            const values = { [e.target.name]: value }

            const addressValues = ["city", "location", "street", "number", "country"]

            if (addressValues.includes(e.target.name)) {

                  const address = { ...user.address, ...values }

                  setUser({ ...user, address })

                  return

            }

            setUser({ ...user, ...values })

      }



      return (
            <>
                  <h2>Register</h2>

                  <form onSubmit={handleForm}>

                        <label htmlFor="first_name">Nombre</label>
                        <input type="text" placeholder="Nombre" name='first_name'
                              onChange={handleChange}
                        />

                        <label htmlFor="last_name">Apellido</label>
                        <input type="text" placeholder="Apellido" name='last_name'
                              onChange={handleChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name='email'
                              onChange={handleChange}
                        />

                        <label htmlFor="age">Edad</label>
                        <input type="number" placeholder="Edad" name='age'
                              onChange={handleChange}
                        />

                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Contraseña" name='password'
                              onChange={handleChange}
                        />

                        <label htmlFor="confirm_password">Confirmar Contraseña</label>
                        <input type="password" placeholder="Confirmar Contraseña" name='confirm_password'
                              onChange={handleChange}
                        />

                        <label htmlFor="phone">Teléfono</label>
                        <input type="tel" placeholder="Teléfono" name='phone'
                              onChange={handleChange}
                        />

                        <label htmlFor="country">País</label>
                        <input type="text" placeholder="País" name='country'
                              onChange={handleChange}
                        />

                        <label htmlFor="city">Ciudad</label>
                        <input type="text" placeholder="Ciudad" name='city'
                              onChange={handleChange}
                        />

                        <label htmlFor="location">Localidad</label>
                        <input type="text" placeholder="Localidad" name='location'
                              onChange={handleChange}
                        />

                        <label htmlFor="street">Calle</label>
                        <input type="text" placeholder="Calle" name='street'
                              onChange={handleChange}
                        />

                        <label htmlFor="number">Número</label>
                        <input type="text" placeholder="Número" name='number'
                              onChange={handleChange}
                        />

                        <button type="submit">Registrarse</button>

                  </form>

                  {isLoading && <p>Loading...</p>}

                  {message && <p><strong>{message}</strong></p>}

                  {isError && <p><strong>{error}</strong></p>}
            </>
      )
}

export default Register