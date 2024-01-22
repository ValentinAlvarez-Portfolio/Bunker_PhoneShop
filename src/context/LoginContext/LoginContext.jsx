import React, { createContext, useState, useContext } from 'react'
import { registerUser, loginUser, getUserByEmail, getUserById, updateUser, logoutUser, checkSession } from '../../utils/users.js'
import { getByUserId } from '../../utils/carts.js'


export const LoginContext = createContext({

      currentUser: null,

      isError: false,

      isLoading: false,

      error: null,

      message: null,

      isAuthenticated: false,

      needCart: false,

      login: () => { },

      register: () => { },

      logout: () => { },

      checkUserSession: () => { },

      update: () => { },

      setMessage: () => { },

      setError: () => { },

      setAuthenticated: () => { },

})

export const LoginProvider = ({ children }) => {

      const [currentUser, setCurrentUser] = useState({})

      const [isError, setIsError] = useState(false)

      const [isLoading, setIsLoading] = useState(false)

      const [error, setError] = useState(null)

      const [message, setMessage] = useState(null)

      const [isAuthenticated, setAuthenticated] = useState(false)

      const [createCart, setCreateCart] = useState(false)

      const notSamePasswordMessage = "Las contraseñas no coinciden"

      const login = async (user) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { userPayload, message } = await getUserByEmail(user)

                  if (!userPayload.id) throw new Error(message);

                  const response = await loginUser(user)

                  if (!response.userLogged) throw new Error("La contraseña ingresada, es incorrecta");

                  localStorage.setItem("user", JSON.stringify(userPayload))

                  const { existingCart, message: cartMessage } = await getByUserId(userPayload.id)

                  setCreateCart(!existingCart)

                  setMessage(response.message)

                  setCurrentUser(userPayload);


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

                  if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|gmail)\.(?:|com|es)+$/i.test(userData.email) === false) throw new Error("El email ingresado no es válido")

                  if (userData.password.length < 8) throw new Error("La contraseña debe tener al menos 8 caracteres")

                  if (userData.password !== userData.confirm_password) throw new Error(notSamePasswordMessage)

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

      const logout = async () => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const response = await logoutUser()

                  setMessage(response.message)

                  setCurrentUser(null)

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

            }


      }

      const checkUserSession = () => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { userPayload, message, logged } = checkSession()

                  if (!logged) throw new Error(message)

                  setMessage(message)

                  setCurrentUser(userPayload)

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

            }

      }


      return (

            <LoginContext.Provider value={{
                  currentUser,
                  isError,
                  isLoading,
                  error,
                  message,
                  isAuthenticated,
                  needCart: createCart,
                  login,
                  register,
                  logout,
                  checkUserSession,
                  update,
                  setMessage,
                  setError,
                  setAuthenticated,
            }}>

                  {children}

            </LoginContext.Provider>

      )

}
