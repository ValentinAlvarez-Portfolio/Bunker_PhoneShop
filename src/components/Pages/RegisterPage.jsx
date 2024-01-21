import React, { useState } from 'react'
import Login from '../Users/Login/Login.jsx'
import Register from '../Users/Register/Register.jsx'
import { Link } from 'react-router-dom'
import { Button, useTheme, Typography } from '@mui/material'

const RegisterPage = () => {

      const theme = useTheme();

      return (
            <>

                  <Register />

                  <hr />

                  <Typography
                        fontFamily={'semiBold'}
                        sx={{
                              color: theme.palette.primary.main,
                              marginLeft: "0.5rem",
                        }}
                  >
                        Si ya tienes una cuenta,
                  </Typography>

                  <Link to="/login">
                        <Button
                              variant="contained"
                              sx={{
                                    width: '10%',
                                    color: theme.palette.primary.main,
                                    borderRadius: '0',
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

            </>
      )
}

export default RegisterPage