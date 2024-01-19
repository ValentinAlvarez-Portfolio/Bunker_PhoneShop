import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, useTheme, Box, } from '@mui/material';
import { PhoneAndroidOutlined, HeadphonesOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ItemsNavbar from '../Dropdown/ItemsNavbar/ItemsNavbar.jsx';
import CartWidget from '../../CartWidget/CartWidget.jsx';
import { CartContext } from '../../../context/CartContext/CartContext.jsx';

const NavBar = ({ showDropdown }) => {

      const { cartTotal, cartQuantity } = useContext(CartContext);

      const theme = useTheme();

      const categories = [
            { icon: PhoneAndroidOutlined, text: 'CELULARES', link: '/cellphones' },
            { icon: HeadphonesOutlined, text: 'ACCESORIOS', link: '/accessories' },
            { icon: LocalOfferOutlined, text: 'OFERTAS', link: '/offers' },
      ];


      return (
            <AppBar position="sticky" elevation={0} style={{
                  backgroundColor: "#fff",
            }}>

                  <Toolbar sx={theme.components.Toolbar
                  } >

                        <Grid container alignItems="center" justifyContent="space-between">

                              <Grid item>

                                    {showDropdown ? (

                                          <ItemsNavbar type={"navbar"} />

                                    ) : (

                                          <Grid container spacing={2}>

                                                {categories.map((category, index) => (
                                                      <Grid item key={index} >

                                                            <Button component={Link} to={category.link} startIcon={<category.icon />} sx={{
                                                                  fontSize: theme.icons.sizes.xs,
                                                                  textColor: theme.palette.primary.main,
                                                                  marginTop: "0.25rem",
                                                            }}>
                                                                  <Typography fontFamily={"bold"} style={{
                                                                        fontSize: theme.typography.fontSize.sm,
                                                                        color: theme.palette.secondary.main,
                                                                  }}>
                                                                        {category.text}
                                                                  </Typography>
                                                            </Button>

                                                      </Grid>
                                                ))}

                                          </Grid>

                                    )}

                              </Grid>

                              <Grid item sx={{
                                    textAlign: "end",
                              }}>

                                    <Box sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                    }}>
                                          <Typography fontFamily={"regular"} style={{
                                                color: theme.palette.secondary.main,
                                                fontSize: theme.typography.fontSize.md,
                                                marginRight: "0.5rem",
                                                marginTop: "0.25rem",
                                          }}>
                                                {cartQuantity ? cartQuantity : "0"} item(s) - ${cartTotal ? cartTotal : "0"}

                                          </Typography>

                                          <CartWidget />

                                    </Box>

                              </Grid>

                        </Grid>

                  </Toolbar>

            </AppBar >
      );
};

export default NavBar;
