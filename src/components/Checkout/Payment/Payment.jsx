import React, { useState } from 'react'

import { Container, Box, Typography, TextField, Button, MenuItem, useTheme } from '@mui/material'

import Checkout from '../Checkout.jsx';

const Payment = (props) => {

      const theme = useTheme();

      const [cardNumber, setCardNumber] = useState("");
      const [cardHolderName, setCardHolderName] = useState("");
      const [cardExpirationDate, setCardExpirationDate] = useState("");
      const [cardSecurityCode, setCardSecurityCode] = useState("");
      const [cardInstallments, setCardInstallments] = useState("");

      const handleSubmit = (e) => {

            e.preventDefault();

            const paymentData = {

                  cardNumber,
                  cardHolderName,
                  cardExpirationDate,
                  cardSecurityCode,

            }

      };

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
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                              <TextField
                                    value={cardNumber}
                                    name="cardNumber"
                                    label="Número de tarjeta"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={(e) => setCardNumber(e.target.value)}
                              />
                              <TextField
                                    value={cardHolderName}
                                    name="cardHolderName"
                                    label="Nombre del titular de la tarjeta"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={(e) => setCardHolderName(e.target.value)}
                              />
                              <TextField
                                    value={cardExpirationDate}
                                    name="expirationDate"
                                    label="Fecha de expedición"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={(e) => setCardExpirationDate(e.target.value)}
                              />
                              <TextField
                                    value={cardSecurityCode}
                                    name="securityCode"
                                    label="Código de seguridad"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    onChange={(e) => setCardSecurityCode(e.target.value)}
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
                                                Pagar
                                          </Typography>
                                    </Button>
                              </Box>
                        </form>
                  </Box>
            </Checkout>
      )
}

export default Payment