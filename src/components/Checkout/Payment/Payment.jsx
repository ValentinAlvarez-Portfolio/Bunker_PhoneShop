import React, { useState, useContext, useEffect } from 'react'

import { Container, Box, Typography, TextField, Button, MenuItem, useTheme } from '@mui/material'

import Checkout from '../Checkout.jsx';

import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx';

import { CheckoutContext } from '../../../context/CheckoutContext/CheckoutContext.jsx';

const Payment = (props) => {

      const theme = useTheme();

      const { currentUser, update, message, error } = useContext(LoginContext)

      const { setActiveSection, cardInstallments, setCardInstallments } = useContext(CheckoutContext)

      useEffect(() => {

            if (!currentUser || !currentUser.address || !currentUser.address.country || !currentUser.address.city || !currentUser.address.street || !currentUser.address.number || !currentUser.address.location) {

                  alert("Debe completar los datos de envío para continuar")

                  setActiveSection('shipping')

            }

      }, [currentUser])

      const [cardData, setCardData] = useState({

            cardNumber: '',
            cardHolderName: '',
            cardExpirationDate: '',
            cardSecurityCode: '',

      });

      const handleSubmit = (e) => {

            e.preventDefault();

            const paymentData = {

                  ...cardData,

            }

            const newUser = { ...currentUser, paymentData: { ...paymentData } }

            update(newUser).then(() => {

                  message && console.log(message)

                  error && console.log(error)

            })

      };

      const handleChange = (e) => {

            let value = e.target.value;

            if (e.target.name === "cardHolderName") {

                  value = value.charAt(0).toUpperCase() + value.slice(1)

            }

            if (e.target.name === "cardNumber" || e.target.name === "cardSecurityCode" || e.target.name === "cardInstallments") {

                  value = Number(value)

            }

            setCardData({ ...cardData, [e.target.name]: value })
      }

      const styledPayment = {

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
                        sx={styledPayment.styledBox}
                  >
                        <Typography
                              fontFamily='bold'
                              sx={styledPayment.styledTitle}
                        >
                              Información de Pago
                        </Typography>
                        <form onSubmit={handleSubmit} style={{
                              width: '100%',
                              fontFamily: theme.typography.fontFamily.regular,
                              fontSize: '0.85rem',
                        }}>
                              <TextField
                                    value={cardData.cardNumber}
                                    name="cardNumber"
                                    label="Número de tarjeta"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={cardData.cardHolderName}
                                    name="cardHolderName"
                                    label="Nombre del titular de la tarjeta"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={cardData.cardExpirationDate}
                                    name="cardExpirationDate"
                                    label="Fecha de vencimiento"
                                    fullWidth
                                    required
                                    margin="normal"
                                    onChange={handleChange}
                              />
                              <TextField
                                    value={cardData.cardSecurityCode}
                                    name="cardSecurityCode"
                                    label="Código de seguridad"
                                    fullWidth
                                    required
                                    margin="normal"
                                    onChange={handleChange}
                              />
                              <TextField
                                    select
                                    value={cardInstallments}
                                    name="installments"
                                    label="Cuotas"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={(e) => setCardInstallments(e.target.value)}
                              >
                                    <MenuItem value={1}>1 cuota</MenuItem>
                                    <MenuItem value={3}>3 cuotas</MenuItem>
                                    <MenuItem value={6}>6 cuotas</MenuItem>
                                    <MenuItem value={10}>10 cuotas</MenuItem>
                                    <MenuItem value={12}>12 cuotas</MenuItem>
                              </TextField>
                              <Box
                                    sx={styledPayment.styledBoxButton}
                              >
                                    <Button
                                          type="submit"
                                          variant="contained"
                                          sx={styledPayment.styledButton}
                                    >
                                          <Typography
                                                fontFamily={'semiBold'}
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
                        </form>
                  </Box>
            </Checkout>
      )
}

export default Payment