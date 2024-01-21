import React, { useState, useEffect } from "react";
import { Container, Grid, } from "@mui/material";

const CartNavbar = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showSplitSections, setShowSplitSections] = useState(false);

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

        setShowSplitSections(isMeddiumScreen);

    }, [windowWidth]);

    const sections = {
        firstTwo: ["Resumen de compra", "Datos de envío"],
        lastTwo: ["Método de pago", "Confirmación"],
    }

    return (


        <Grid container spacing={1} direction={'row'} justifyContent={'center'}  >


            {props.children}


        </Grid>

    )
}

export default CartNavbar;