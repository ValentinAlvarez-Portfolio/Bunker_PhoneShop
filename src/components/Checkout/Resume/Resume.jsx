import React, { useState, useEffect, useContext } from 'react'
import { CheckoutContext } from '../../../context/CheckoutContext/CheckoutContext.jsx'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'
import { CartContext } from '../../../context/CartContext/CartContext.jsx'
import CartItemInfo from '../Cart/CartItemInfo/CartItemInfo.jsx'
import CartDetails from '../Cart/CartDetails/CartDetails.jsx'
import { Container, Grid, Typography, Button, Divider, useTheme, StepLabel } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CircleIcon from '@mui/icons-material/Circle';
import FlipperImg from "../../FlipperImg/FlipperImg.jsx";
import Checkout from '../Checkout.jsx'
import ItemCount from '../../ItemCount/ItemCount.jsx'

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

const Resume = () => {

      const theme = useTheme()

      const { currentUser } = useContext(LoginContext)

      const { setActiveSection, order, setOrder, createOrder, cardInstallments } = useContext(CheckoutContext)

      const { cart, clearCart, deleteItem, totalPrice } = useContext(CartContext)

      const products = cart.cartItems

      useEffect(() => {

            if (!currentUser || !currentUser.paymentData || !currentUser.paymentData.cardNumber || !currentUser.paymentData.cardHolderName || !currentUser.paymentData.cardExpirationDate || !currentUser.paymentData.cardSecurityCode) {

                  alert("Debe completar los datos de pago para continuar")

                  setActiveSection('payment')

            }

      }, [currentUser])

      useEffect(() => {

            if (order !== null) {
                  createOrder(order).then((id, message) => {

                        id && console.log(id.id)

                        id && alert(`Su orden: ${id} ha sido creada con éxito`)

                        setOrder(null);

                        clearCart();

                  })
            }

      }, [order])

      const handlePlaceOrder = () => {

            const shippingCost = currentUser.address.country === "Uruguay" ? 0 : 15

            const totalOrderPrice = (cart.cartTotal + shippingCost)

            const installmentsPrice = (totalOrderPrice / cardInstallments).toFixed(2)

            const newOrder = {
                  buyer: {
                        contactData: {
                              first_name: currentUser.first_name,
                              last_name: currentUser.last_name,
                              email: currentUser.email,
                              phone: currentUser.phone,
                        },
                        shippingAddress: {
                              ...currentUser.address,
                        },
                        paymentMethod: "Credit Card",

                  },
                  installments: cardInstallments,
                  installmentsPrice: Number(installmentsPrice),
                  items: cart.cartItems,
                  date: new Date(),
                  total: totalOrderPrice,
                  uid: currentUser.id,
            }

            setOrder(newOrder)

      }

      const handleDeleteItem = (item) => {

            deleteItem(item)

      }


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

      return (
            <Checkout>

                  <Typography
                        fontFamily='bold'
                        sx={styledCart.styledTitle}
                  >
                        Resumen de compra
                  </Typography>
                  <Grid
                        container spacing={1}
                        columnSpacing={5}
                  >


                        <Grid item xs={12} md={7}

                        >

                              <Typography
                                    fontFamily={'bold'}
                                    sx={styledCart.styledTitle}
                              >
                                    Carrito
                              </Typography>

                              <CartItemInfo where="resume" />

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
                                                                  xs={8}
                                                                  md={8}
                                                                  sx={centerFlexColumn}
                                                            >

                                                                  <FlipperImg product={prod} size={150} />

                                                            </Grid>

                                                            <Grid
                                                                  item
                                                                  xs={12}
                                                                  md={12}
                                                                  sx={{
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",

                                                                  }}

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

                                                                  <ItemCount prod={prod} where="resume" />

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

                        </Grid>

                        <Grid item xs={12} md={5}

                        >


                              <Typography
                                    fontFamily={'bold'}
                                    sx={styledCart.styledTitle}
                              >
                                    Envío y pago
                              </Typography>

                              <Grid
                                    container spacing={1}
                                    rowSpacing={10}
                              >

                                    <Grid
                                          item
                                          xs={7}
                                          md={7}
                                          sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "start",
                                          }}
                                    >

                                          <Typography
                                                fontFamily={'bold'}
                                                sx={styledCart.styledProductTitle}

                                          >

                                                Datos de envío

                                          </Typography>

                                    </Grid>

                                    {currentUser.address && currentUser.address.country && currentUser.address.city && currentUser.address.location && currentUser.address.street && currentUser.address.number &&

                                          <Grid
                                                item
                                                xs={5}
                                                md={5}
                                                sx={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      justifyContent: "center",
                                                      alignItems: "start",
                                                }}
                                          >
                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.address.country}

                                                </Typography>

                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.address.city}

                                                </Typography>

                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.address.location}

                                                </Typography>

                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.address.street}

                                                </Typography>

                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.address.number}

                                                </Typography>

                                          </Grid>
                                    }

                                    <Grid
                                          item
                                          xs={7}
                                          md={7}
                                          sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "start",
                                          }}
                                    >

                                          <Typography
                                                fontFamily={'bold'}
                                                sx={styledCart.styledProductTitle}

                                          >

                                                Datos de pago

                                          </Typography>

                                    </Grid>

                                    {currentUser.paymentData && currentUser.paymentData.cardNumber && currentUser.paymentData.cardHolderName && currentUser.paymentData.cardExpirationDate && currentUser.paymentData.cardSecurityCode &&
                                          <Grid
                                                item
                                                xs={5}
                                                md={5}
                                                sx={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      justifyContent: "center",
                                                      alignItems: "start",
                                                }}
                                          >
                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.paymentData.cardNumber}

                                                </Typography>

                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.paymentData.cardHolderName}

                                                </Typography>

                                                <Typography
                                                      fontFamily={'bold'}
                                                      sx={styledCart.styledProductTitle}
                                                >

                                                      {currentUser.paymentData.cardExpirationDate}

                                                </Typography>


                                          </Grid>
                                    }
                              </Grid>


                        </Grid>

                        <Grid item xs={12} md={12} >
                              <CartDetails cartTotal={cart.cartTotal} where={'resume'} handleConfirmPurchase={handlePlaceOrder} />

                        </Grid>
                  </Grid>

            </Checkout>
      )
}

export default Resume