import React, { createContext, useState } from 'react'
import { registerUser, loginUser, getUserByEmail, getUserById, updateUser } from '../../utils/users.js'


export const LoginContext = createContext({

      currentUser: null,

      isAuthenticated: false,

      isError: false,

      isLoading: false,

      error: null,

      message: null,

      login: () => { },

      register: () => { },

      logout: () => { },

      update: () => { },

})

export const LoginProvider = ({ children }) => {

      const [currentUser, setCurrentUser] = useState(null)

      const [isError, setIsError] = useState(false)

      const [isLoading, setIsLoading] = useState(false)

      const [error, setError] = useState(null)

      const [message, setMessage] = useState(null)

      const [isAuthenticated, setAuthenticated] = useState(false)

      const login = async (user) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { userPayload } = await getUserByEmail(user)

                  console.log(userPayload)

                  if (!userPayload.id) throw new Error("El email ingresado, no existe");

                  const { userLogged, message } = await loginUser(user)

                  if (!userLogged) throw new Error("La contraseña ingresada, es incorrecta");

                  console.log(userPayload, userLogged, message)

                  setMessage(message)

                  setCurrentUser({
                        ...userPayload,
                  });

                  setAuthenticated(true)


            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(7, toString.length)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);

            };

      }
      const register = async (userData) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  if (userData.password !== userData.confirm_password) throw new Error("Las contraseñas no coinciden")

                  const { userPayload, message } = await registerUser(userData)

                  setMessage(message)

                  setCurrentUser(userPayload)

            } catch (error) {

                  const toString = error.toString()

                  setIsError(true)

                  setError(toString)

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);

            };

      }

      const update = async (userData) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { userPayload } = await getUserById(currentUser.id)

                  const { newUser, message } = await updateUser(userPayload, userData)

                  setMessage(message)

                  setCurrentUser({
                        ...newUser,
                  });

            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(9, toString.length - 2)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);


            };

      }

      const logout = () => {

            setAuthenticated(false);

            setCurrentUser(null)

      }


      return (

            <LoginContext.Provider value={{
                  currentUser,
                  isAuthenticated: isAuthenticated,
                  isError,
                  isLoading,
                  error,
                  message,
                  login,
                  register,
                  logout,
                  update,
            }}>

                  {children}

            </LoginContext.Provider>

      )

}
