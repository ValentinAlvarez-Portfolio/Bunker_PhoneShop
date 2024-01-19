import React, { useEffect, useState } from 'react';
import { Typography, Grid, useTheme } from "@mui/material";
import Menu from './Menu/Menu.jsx';
import NavBar from './NavBar/NavBar.jsx';

const Header = () => {


      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const [showDropdown, setShowDropdown] = useState(false);
      const [showSearch, setShowSearch] = useState(false);
      const theme = useTheme();

      useEffect(() => {
            const handleResize = () => {
                  setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      }, []);

      useEffect(() => {

            const isLargeScreen = windowWidth <= 1200;

            const isMeddiumScreen = windowWidth <= 992;

            setShowDropdown(isMeddiumScreen);
            setShowSearch(isMeddiumScreen);
      }, [windowWidth]);



      return (

            <Grid container component="header" direction={"row"} justifyContent={"center"}>
                  <Grid item xs={12}>
                        <Typography fontFamily={"bold"} sx={theme.typography.headerText}>
                              LÍDER EN VENTA DE CELULARES Y ACCESORIOS EN URUGUAY.
                        </Typography>
                  </Grid>
                  <Grid item xs={12} component="header" sx={{
                        ...theme.components.AppBar,

                        paddingBottom: '0.8rem',
                  }}>
                        <Menu showSearch={showSearch} />
                  </Grid>
                  <Grid item xs={12} component="nav" sx={{
                        ...theme.components.AppBar,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                  }}>
                        <NavBar showDropdown={showDropdown} />
                  </Grid>
            </Grid>

      );
}

export default Header;
