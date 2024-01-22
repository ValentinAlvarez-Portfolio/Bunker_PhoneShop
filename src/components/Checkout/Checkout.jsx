import React from 'react'
import { Container } from '@mui/material'
import CartSections from './Cart/CartNavbar/CartSections/CartSections.jsx'

const Checkout = (props) => {


      return (
            <>

                  <Container
                        maxWidth="xxl"
                        sx={{
                              marginTop: "4rem",
                        }}
                        style={{
                              padding: 0,
                        }}
                  >

                        <CartSections />

                        <Container
                              maxWidth="xl"
                              className="fullSize"
                              sx={{
                                    marginTop: "4rem",
                                    boxShadow: "4px 7px 8px 2px #8b9198",
                                    marginBottom: "4rem",
                              }}
                              style={{
                                    padding: 0,
                              }}
                        >

                              {props.children}

                        </Container>

                  </Container>

            </>
      )
}

export default Checkout