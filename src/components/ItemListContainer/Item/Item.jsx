import React, { useContext } from "react";
import { Grid, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import FlipperImg from "../../FlipperImg/FlipperImg";
import CartContext from "../../../context/CartContext/CartContext.jsx";

const Item = ({ product }) => {

    const { addProduct } = useContext(CartContext);

    const handleAddToCart = () => {

        const quantity = 1;
        addProduct(product, quantity);

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


            <Link to={`/PFAlvarez-React/${product.category}/${product._id}`}
                style={{
                    textDecoration: "none",
                }}
            >

                <FlipperImg product={product} size={300} />

                <Typography sx={styledItem.styledTitle}>
                    {product.title}
                </Typography>

            </Link>

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