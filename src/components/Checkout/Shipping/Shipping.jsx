import React, { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
import Checkout from '../Checkout.jsx';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';

const Shipping = () => {

      const theme = useTheme();

      const { currentUser, update, message } = useContext(LoginContext)

      const [address, setAddress] = useState({
            country: '',
            city: '',
            location: '',
            street: '',
            number: '',
      })

      let currentUserAddress = currentUser.address


      const handleSubmit = (e) => {

            e.preventDefault()

            const newUser = { ...currentUser, address }

            update(newUser)

      }

      const handleChange = (e) => {

            let value = e.target.value

            if (e.target.name === "country" || e.target.name === "city" || e.target.name === "location" || e.target.name === "street") {

                  value = value.charAt(0).toUpperCase() + value.slice(1)

            }

            setAddress({ ...address, [e.target.name]: value })

      }

      useEffect(() => {

            console.log(message)

      }, [message])

      const styledAddress = {

            styledBox: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '2px',
                  padding: '3rem',
                  boxShadow: '1px 2px 10px 0px #8b9198',
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
                  width: '30%',
                  ml: '35%',
            },

            styledButton: {
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  fontSize: '0.9rem',
                  mt: '1rem',
                  height: '2.75rem',
            }

      }

      return (
            <Checkout>
                  <Box
                        sx={styledAddress.styledBox}
                  >
                        <Typography
                              fontFamily='bold'
                              sx={styledAddress.styledTitle}
                        >
                              Datos de envío
                        </Typography>
                        <form onSubmit={handleSubmit} style={{
                              width: '100%',
                              fontFamily: theme.typography.fontFamily.regular,
                              fontSize: '0.85rem'
                        }}>
                              <TextField
                                    value={address.country}
                                    name="country"
                                    label={(currentUserAddress && currentUserAddress.country) ? currentUserAddress.country : 'País'}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={address.city}
                                    name="city"
                                    label={(currentUserAddress && currentUserAddress.city) ? currentUserAddress.city : 'Ciudad'}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={address.location}
                                    name="location"
                                    label={(currentUserAddress && currentUserAddress.location) ? currentUserAddress.location : 'Localidad'}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={address.street}
                                    name="street"
                                    label={(currentUserAddress && currentUserAddress.street) ? currentUserAddress.street : 'Calle'}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={address.number}
                                    name="number"
                                    label={(currentUserAddress && currentUserAddress.number) ? currentUserAddress.number : 'Número'}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <Box
                                    sx={styledAddress.styledBoxButton}
                              >
                                    <Button
                                          type="submit"
                                          variant="contained"
                                          sx={{
                                                width: "100%",
                                                borderRadius: "0",
                                                marginTop: "2rem",
                                                background: theme.palette.primary.dark,
                                                "&:hover": {
                                                      background: theme.palette.primary.main,
                                                },
                                          }}
                                    >
                                          <Typography
                                                fontFamily={'semiBold'}
                                                sx={{
                                                      color: "white",
                                                      fontSize: "0.95rem",
                                                }}
                                          >
                                                Enviar
                                          </Typography>
                                    </Button>
                                    {message && <Typography
                                          fontFamily={theme.typography.fontFamily.regular}
                                          sx={{
                                                marginTop: '1rem',
                                                marginLeft: '1rem'
                                          }}
                                    >
                                          {message}
                                    </Typography>
                                    }


                              </Box>

                              <Button
                                    variant="contained"
                                    sx={{
                                          width: "100%",
                                          borderRadius: "0",
                                          marginTop: "3rem",
                                          background: theme.palette.primary.main,
                                          "&:hover": {
                                                background: theme.palette.primary.dark,
                                          },
                                    }}
                                    onClick={() => setActiveSection('resume')}
                              >
                                    <Typography
                                          fontFamily={'semiBold'}
                                          sx={{
                                                color: "white",
                                                fontSize: "0.95rem",
                                          }}
                                    >
                                          Continuar
                                    </Typography>
                              </Button>

                        </form>
                  </Box>
            </Checkout>
      )
}

export default Shipping