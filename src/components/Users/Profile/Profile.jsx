import React, { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
import { Link } from 'react-router-dom'
import { Container, Box, Typography, TextField, Button, useTheme } from '@mui/material'

const Profile = () => {

      const theme = useTheme()

      const {
            isLoading,
            isError,
            message,
            error,
            currentUser,
            update,
            logout
      } = useContext(LoginContext)

      const [user, setUser] = useState({
            first_name: "",
            last_name: "",
            age: 0,
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

            update(user)

      }

      const handleChange = (e) => {

            let value = e.target.value

            if (e.target.name === "first_name" || e.target.name === "last_name" || e.target.name === 'country' || e.target.name === 'city' || e.target.name === 'location' || e.target.name === 'street') {

                  value = value.charAt(0).toUpperCase() + value.slice(1)

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
                              Perfíl
                        </Typography>
                        <form onSubmit={handleForm} style={{
                              width: '40%',
                              fontFamily: theme.typography.fontFamily.regular,
                              fontSize: '0.85rem'
                        }}>
                              <TextField
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
                                    id='city'
                                    name='city'
                                    label='Ciudad'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.address.city}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    id='location'
                                    name='location'
                                    label='Localidad'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.address.location}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    id='street'
                                    name='street'
                                    label='Calle'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.address.street}
                                    fullWidth
                                    margin="normal"
                              />

                              <TextField
                                    id='number'
                                    name='number'
                                    label='Número'
                                    variant='outlined'
                                    onChange={handleChange}
                                    value={user.address.number}
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

                        </form>
                  </Box>

                  {isLoading && <p>Loading...</p>}

                  {isError && <p>{error}</p>}



            </Container>
      )
}

{/* <h2>Profile</h2>

                  {isLoading && <p>Loading...</p>}

                  <form onSubmit={handleForm}>

                        <label htmlFor="first_name">First Name</label>
                        <input type="text" placeholder={currentUser ? currentUser.first_name : 'Nombre'} name='first_name'
                              onChange={handleChange}
                        />

                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" placeholder={currentUser ? currentUser.last_name : 'Apellido'} name='last_name'
                              onChange={handleChange}
                        />

                        <label htmlFor="age">Age</label>
                        <input type="number" placeholder={currentUser ? currentUser.age : 'Edad'} name='age'
                              onChange={handleChange}
                        />

                        <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder={currentUser ? currentUser.phone : 'Teléfono'} name='phone'
                              onChange={handleChange}
                        />

                        <label htmlFor="country">País</label>
                        <input type="text" placeholder={currentUser && currentUser.address.country ? currentUser.address.country : 'País'} name='country'
                              onChange={handleChange}
                        />

                        <label htmlFor="city">Ciudad</label>
                        <input type="text" placeholder={currentUser && currentUser.address.city ? currentUser.address.city : "Ciudad"} name='city'
                              onChange={handleChange}
                        />

                        <label htmlFor="location">Localidad</label>
                        <input type="text" placeholder={currentUser && currentUser.address.location ? currentUser.address.location : "Localidad"} name='location'
                              onChange={handleChange}
                        />

                        <label htmlFor="street">Calle</label>
                        <input type="text" placeholder={currentUser && currentUser.address.street ? currentUser.address.street : "Calle"} name='street'
                              onChange={handleChange}
                        />

                        <label htmlFor="number">Número</label>
                        <input type="text" placeholder={currentUser && currentUser.address.number ? currentUser.address.number : "Número"} name='number'
                              onChange={handleChange}
                        />

                        <button type="submit">Update</button>

                  </form>

                  {message && <p>{message}</p>}

                  {isError && <p>{error}</p>} */}


export default Profile