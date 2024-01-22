import React, { useContext } from 'react'
import { Button, Divider, Grid, Typography, useTheme } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CircleIcon from '@mui/icons-material/Circle';
import { CartContext } from "../../../context/CartContext/CartContext.jsx";
import Checkout from "../Checkout.jsx";
import FlipperImg from "../../FlipperImg/FlipperImg.jsx";
import CartItemInfo from "./CartItemInfo/CartItemInfo.jsx";
import CartDetails from './CartDetails/CartDetails.jsx';

const centerFlexRow = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
};

const centerFlexColumn = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
};

const gridStyles = {
      xs: 7,
      md: 7,
      sx: centerFlexRow,
};

const Cart = () => {

      const theme = useTheme();

      const { cart, deleteItem } = useContext(CartContext);

      const products = cart.cartItems

      const styledCart = {
            styledTitle: {
                  color: theme.palette.primary.main,
                  fontSize: '2rem',
                  mb: '1.5rem',
                  textAlign: 'center',
                  pt: '2.5rem',
                  pb: '2.5rem',
                  borderTop: '1px solid #e0e0e0',
                  borderBottom: '1px solid #e0e0e0',
            },
            styledDeleteIcon: {
                  color: theme.palette.primary.main,
                  fontSize: "1.55rem",
                  marginRight: "0.5rem",
            },
            styledGridItem: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",

            },
            styledProductTitle: {
                  color: theme.palette.secondary.main,
                  fontSize: "1rem",
            },
            styledProductPrice: {
                  color: theme.palette.info.light,
                  fontSize: "1rem",
            },
            styledDivider: {
                  display: { xs: "none", md: "block" },
                  width: "90%",
            }
      }

      const handleDeleteItem = (item) => {

            deleteItem(item)

      }



      return (

            <Checkout>


                  <Typography
                        fontFamily='bold'
                        sx={styledCart.styledTitle}
                  >

                        {cart.cartItems.length === 0 ? "No hay productos en el carrito" : "Carrito de compras"}
                  </Typography>


                  <CartItemInfo />

                  {
                        products.map((prod, index) => (

                              <Grid container spacing={1}
                                    key={index}
                                    sx={centerFlexRow}
                              >

                                    <Grid item {...gridStyles}>

                                          <Grid container spacing={1} >

                                                <Grid item
                                                      xs={2}
                                                      md={2}
                                                      sx={centerFlexRow}
                                                >

                                                      <Button
                                                            onClick={() => handleDeleteItem(prod)}
                                                            sx={styledCart.styledDeleteIcon}
                                                      >
                                                            <DeleteOutlineIcon fontSize="large" />
                                                      </Button>

                                                </Grid>

                                                <Grid
                                                      item
                                                      className="fullSize"
                                                      xs={3}
                                                      md={3}
                                                      sx={centerFlexColumn}
                                                >

                                                      <FlipperImg product={prod} size={150} />

                                                </Grid>

                                                <Grid
                                                      item
                                                      xs={7}
                                                      md={7}
                                                      sx={styledCart.styledGridItem}
                                                >

                                                      <Typography
                                                            fontFamily={'semiBold'}
                                                            sx={styledCart.styledProductTitle}
                                                      >
                                                            {prod.title}
                                                      </Typography>

                                                      <Divider
                                                            orientation="horizontal"
                                                            sx={styledCart.styledDivider}
                                                      />

                                                      <Typography
                                                            fontFamily={'semiBold'}
                                                            sx={styledCart.styledProductPrice}
                                                      >
                                                            USD {prod.price}
                                                      </Typography>

                                                </Grid>

                                          </Grid>

                                    </Grid>

                                    <Grid
                                          item
                                          xs={5}
                                          md={5}
                                          sx={centerFlexRow}
                                    >

                                          <Grid
                                                container spacing={1}
                                          >

                                                <Grid
                                                      item
                                                      xs={2}
                                                      md={2}
                                                      sx={centerFlexColumn}
                                                >

                                                      <CircleIcon
                                                            fontSize="large"
                                                            sx={{
                                                                  color: prod.color,
                                                            }}
                                                      />

                                                </Grid>


                                                <Grid
                                                      item
                                                      xs={6}
                                                      md={6}
                                                      sx={centerFlexColumn}
                                                >

                                                      <h2>test</h2>

                                                </Grid>

                                                <Grid
                                                      item
                                                      xs={4}
                                                      md={4}
                                                      sx={centerFlexColumn}
                                                >

                                                      <Typography
                                                            fontFamily={'bold'}
                                                            sx={styledCart.styledProductPrice}
                                                      >
                                                            USD {(prod.price * prod.quantity).toFixed(2)}
                                                      </Typography>

                                                </Grid>

                                          </Grid>

                                    </Grid>

                              </Grid>

                        ))

                  }

                  <CartDetails where={'cart'} cartTotal={cart.cartTotal} />


            </Checkout>


      )
}

export default Cart;