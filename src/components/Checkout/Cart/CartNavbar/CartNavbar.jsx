import React, { useState, useEffect } from "react";
import { Container, Grid, } from "@mui/material";

const CartNavbar = (props) => {

    return (


        <Grid container spacing={1} direction={'row'} justifyContent={'center'}  >


            {props.children}


        </Grid>

    )
}

export default CartNavbar;