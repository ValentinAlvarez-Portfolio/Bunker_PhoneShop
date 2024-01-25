import React, { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
import { CartContext } from '../../../context/CartContext/CartContext.jsx'
import { TextField, useTheme, Box, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {

      const theme = useTheme()

      const {
            login,
            message: loginMessage,
            error: loginError,
            isLoading: loginIsLoading,
            isError: loginIsError,
            needCart,
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

            if (currentUser && currentUser?.id) {
                  createCart().then(() => {

                        cartMessage && console.log(cartMessage)

                        cartError && console.log(cartError)

                  }).catch(() => {

                        cartError && console.log(cartError)

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

                  }).catch(() => {

                        cartError && console.log(cartError)

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


            }).catch(() => {

                  loginMessage && console.log(loginMessage)

                  loginError && console.log(loginError)

            })

      }

      const handleChange = (e) => {

            let value = e.target.value

            if (e.target.name === "email") {

                  value = value.toLowerCase()

            }

            setUser({ ...user, [e.target.name]: value })

      }

      const styledLogin = {

            styledBox: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '2px',
                  padding: '3rem',
                  boxShadow: "4px 7px 8px 2px #8b9198",
                  marginBottom: '5rem',
                  marginTop: '5rem',
                  paddingTop: '5rem',
                  paddingBottom: '5rem',
            },

            styledTitle: {
                  color: theme.palette.primary.main,
                  fontSize: '2rem',
                  mb: '1.5rem',
                  mt: '1.5rem',
            },

            styledBoxButton: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '80%',
                  ml: '10%',
            },

            styledButton: {
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  fontSize: '0.9rem',
                  mt: '1rem',
                  height: '2.5rem',
                  borderRadius: '0px'
            }

      }

      return (
            <Container
                  maxWidth="md"
                  style={{
                        padding: 0,
                  }}
            >

                  <Box
                        sx={styledLogin.styledBox}
                  >
                        <Typography
                              fontFamily='bold'
                              sx={styledLogin.styledTitle}
                        >
                              Inicio de sesión
                        </Typography>
                        <form onSubmit={handleForm} style={{
                              width: '40%',
                              fontFamily: theme.typography.fontFamily.regular,
                              fontSize: '0.85rem'
                        }}>
                              <TextField
                                    required
                                    id='email'
                                    name='email'
                                    label='Email'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.email}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    required
                                    id='password'
                                    name='password'
                                    label='Password'
                                    type='password'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.password}
                                    fullWidth
                                    margin="normal"
                              />
                              <Box
                                    sx={styledLogin.styledBoxButton}
                              >
                                    <Button
                                          type="submit"
                                          variant="contained"
                                          sx={styledLogin.styledButton}
                                    >
                                          <Typography
                                                fontFamily={'semiBold'}
                                          >
                                                Enviar
                                          </Typography>
                                    </Button>

                              </Box>

                              <Box
                                    sx={{
                                          ...styledLogin.styledBoxButton,
                                          width: '100%',
                                    }}
                              >



                                    {loginMessage &&
                                          <Typography
                                                fontFamily={
                                                      theme.typography.fontFamily.regular
                                                }
                                                sx={{
                                                      marginTop: '1rem',
                                                      marginLeft: '1rem',
                                                      color: theme.palette.primary.dark,
                                                }}
                                          >{loginMessage}
                                          </Typography>}

                              </Box>

                              <Box
                                    sx={{
                                          ...styledLogin.styledBoxButton,
                                          width: '100%',
                                          marginLeft: '0%',
                                    }}
                              >
                                    <Typography
                                          fontFamily={'semiBold'}
                                          sx={{
                                                color: theme.palette.info.light,
                                                marginLeft: "19%",
                                                marginTop: "1.5rem",
                                          }}
                                    >
                                          ¿Aún no tienes una cuenta?
                                    </Typography>

                                    <Link to="/register">
                                          <Button
                                                variant="contained"
                                                sx={{
                                                      width: '100%',
                                                      backgroundColor: theme.palette.primary.dark,
                                                      borderRadius: '0',
                                                      marginTop: '0.5rem',
                                                      ':hover': {
                                                            backgroundColor: theme.palette.primary.light,
                                                      }
                                                }}
                                          >
                                                <Typography
                                                      fontFamily={'semiBold'}
                                                      sx={{
                                                            color: 'white'
                                                      }}
                                                >
                                                      Regístrate
                                                </Typography>
                                          </Button>
                                    </Link>

                              </Box>

                        </form>
                  </Box>

                  {loginIsLoading && <p>Loading...</p>}

                  {loginIsError && <p>{loginError}</p>}

            </Container>
      )
}

export default Login