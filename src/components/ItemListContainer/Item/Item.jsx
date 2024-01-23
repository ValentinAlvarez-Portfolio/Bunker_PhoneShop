import React, { useContext, useRef } from "react";
import { Grid, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import FlipperImg from "../../FlipperImg/FlipperImg";
import { CartContext } from "../../../context/CartContext/CartContext.jsx";
import { LoginContext } from "../../../context/LoginContext/LoginContext.jsx";

const Item = ({ product }) => {

    const { addItem } = useContext(CartContext);

    const { isAuthenticated } = useContext(LoginContext);

    const handleAddToCart = () => {

        if (!isAuthenticated) {

            alert('Debes iniciar sesión para agregar productos al carrito');

            return;

        }

        addItem(product, 1);

    }

    const theme = useTheme();

    const styledItem = {


        styledTitle: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: theme.typography.fontSize.md,
            marginBottom: '1rem',
            height: '40px',
            width: '300px',
            fontFamily: theme.typography.fontFamily.bold,
        },

        styledPrice: {
            color: theme.palette.info.light,
            textAlign: 'center',
            fontSize: theme.typography.fontSize.lg,
            marginBottom: '1rem',
            fontFamily: theme.typography.fontFamily.semiBold,
        },

        styledOldPrice: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: theme.typography.fontSize.lg,
            marginBottom: '1rem',
            fontFamily: theme.typography.fontFamily.semiBold,
            textDecoration: 'line-through',
        },

        styledButton: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            width: '200px',
            height: "30px",
            borderRadius: '0.1rem',
            fontSize: theme.typography.fontSize.sm,
            fontFamily: theme.typography.fontFamily.semiBold,
            marginTop: '1rem',
            marginLeft: '3.14rem',
        },

        styledGridItem: {
            position: 'relative',
            paddingRight: '1rem',
            marginBottom: '2rem',
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                width: '0.5px',
                height: '40%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                top: '15%',
            },
            '&::after': {
                left: 'auto',
                right: 0,
            }
        }

    }

    return (



        <Grid item key={product._id} sx={styledItem.styledGridItem}  >


            <Link to={`/${product.category}/${product._id}`}
                style={{
                    textDecoration: "none",
                }}
            >

                <FlipperImg product={product} size={300} />

                <Typography sx={styledItem.styledTitle}>
                    {product.title}
                </Typography>

            </Link>

            {product.oldPrice !== 0 &&
                <Typography
                    sx={styledItem.styledOldPrice}
                >
                    USD {product.oldPrice}
                </Typography>}


            <Typography
                sx={styledItem.styledPrice}
            >
                USD {product.price.toFixed(2)}
            </Typography>


            <Button
                variant="contained"
                sx={styledItem.styledButton}
                onClick={handleAddToCart}
            >
                Agregar al carrito
            </Button>


        </Grid>


    )
}

export default Item;