import React, { useState, useContext } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
import { Link } from 'react-router-dom'
import { Container, Box, Typography, TextField, Button, useTheme } from '@mui/material'

const Register = () => {

      const theme = useTheme()

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
            phone: "",
            password: "",
            confirm_password: "",
            address: {
                  country: ""
            }
      })

      const handleForm = (e) => {

            e.preventDefault()

            register(user).then(() => {

                  message && console.log(message)

                  error && console.log(error)

            })

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

            const addressValues = ["country"]

            if (addressValues.includes(e.target.name)) {

                  const address = { ...user.address, ...values }

                  setUser({ ...user, address })

                  return

            }

            setUser({ ...user, ...values })

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
                              Registro de usuario
                        </Typography>
                        <form onSubmit={handleForm} style={{
                              width: '40%',
                              fontFamily: theme.typography.fontFamily.regular,
                              fontSize: '0.85rem'
                        }}>
                              <TextField
                                    required
                                    id='first_name'
                                    name='first_name'
                                    label='Nombre'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.first_name}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    required
                                    id='last_name'
                                    name='last_name'
                                    label='Apellido'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.last_name}
                                    fullWidth
                                    margin="normal"
                              />

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
                                    id='age'
                                    name='age'
                                    label='Edad'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.age}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    required
                                    id='phone'
                                    name='phone'
                                    label='Teléfono'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.phone}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    required
                                    id='country'
                                    name='country'
                                    label='País'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.address.country}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    required
                                    id='password'
                                    name='password'
                                    label='Contraseña'
                                    type='password'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.password}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    required
                                    id='confirm_password'
                                    name='confirm_password'
                                    label='Confirmar contraseña'
                                    type='password'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.confirm_password}
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

                                    {message &&
                                          <Typography
                                                fontFamily={theme.typography.fontFamily.regular}
                                                sx={{
                                                      marginTop: '1rem',
                                                      marginLeft: '1rem'
                                                }}
                                          >{message}
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
                                                marginLeft: "24%",
                                                marginTop: "1.5rem",
                                          }}
                                    >
                                          Si ya tienes una cuenta,
                                    </Typography>

                                    <Link to="/login">
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
                                                      Inicia sesión
                                                </Typography>
                                          </Button>
                                    </Link>

                              </Box>

                        </form>
                  </Box>

                  {isLoading && <p>Loading...</p>}

                  {isError && <p>{error}</p>}



            </Container>
      )
}

export default Register