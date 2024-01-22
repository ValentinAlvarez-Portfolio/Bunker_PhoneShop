import React, { useContext, useEffect, useState } from 'react'
import { Grid, Button, Divider, Typography, useTheme } from '@mui/material'
import CartNavbar from '../CartNavbar.jsx';
import { CartContext } from '../../../../../context/CartContext/CartContext.jsx';
import { CheckoutContext } from '../../../../../context/CheckoutContext/CheckoutContext.jsx';
import CircleIcon from '@mui/icons-material/Circle';

const styledCartSections = {

      styledGridItem: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
      },

      styledButton: {
            backgroundColor: "white",
            marginTop: { xs: "0.5rem", md: "0" },
            paddingLeft: 0,
            marginLeft: 0,
      },

      styledDivider: {
            display: { xs: "none", md: "block" },
            width: "8vw",
      },

}

const CartSections = (props) => {

      const { setActiveSection } = useContext(CheckoutContext);

      const goToCart = () => setActiveSection('cart');
      const goToShipping = () => setActiveSection('shipping');
      const goToPayment = () => setActiveSection('payment');

      const sections = [{ name: 'Carrito', action: goToCart }, { name: 'Datos de envío', action: goToShipping }, { name: 'Datos de pago', action: goToPayment }];

      const theme = useTheme();

      return (
            <CartNavbar>

                  {sections.map((section, index) => (
                        <Grid
                              item
                              xs={12}
                              md={5}
                              lg={3}
                              key={index}

                              sx={styledCartSections.styledGridItem}
                        >
                              <Grid
                                    item
                                    xs={1}
                                    md={1}
                                    lg={1}

                                    sx={styledCartSections.styledGridItem}
                              >

                                    <Typography
                                          fontFamily={'bold'}
                                          sx={{
                                                color: theme.palette.primary.main,
                                                fontSize: "1.5rem"
                                          }}
                                    >
                                          {index + 1 + ")"}
                                    </Typography>

                              </Grid>
                              <Grid
                                    item
                                    xs={6}
                                    md={6}
                                    lg={6}

                                    sx={styledCartSections.styledGridItem}

                                    style={{
                                          paddingLeft: 0,
                                    }}
                              >
                                    <Button
                                          sx={styledCartSections.styledButton}
                                          onClick={section.action}

                                    >
                                          <Typography fontFamily={'semiBold'} sx={{ color: theme.palette.secondary.light }}>
                                                {section.name}
                                          </Typography>
                                    </Button>

                              </Grid>
                        </Grid>
                  ))}

            </CartNavbar>
      )


}

export default CartSections