import { Divider, Typography, Card, CardContent, Grid, Button, useTheme } from "@mui/material"
import { Link } from "react-router-dom"

const CartResume = (props) => {

    const styledCartResume = {

        styledDivider: {
            display: "block",
            width: "98%",
            marginLeft: "1rem",
            marginTop: "0.5rem",
            marginBottom: "1rem",
        },

        styledCardContent: {
            mt: 0,
            mb: 0,
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
            pt: 1,
            pb: 1,
            display: 'flex',
            justifyContent: 'space-between'
        },

        styledCardShipping: {
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 2,
            marginLeft: "0.5rem",
        },

    }

    const theme = useTheme();

    return (
        <>
            <Grid container spacing={1}
                sx={{
                    mt: 4,
                    mb: 17,
                }}
            >

                <Grid item
                    xs={12}
                    md={12}
                    sx={{
                        marginLeft: "0.8rem",
                        marginRight: "1.8rem",
                    }}
                >
                    <Card
                        sx={{
                            mb: 0,
                            p: 0,
                            borderRadius: 0,
                            boxShadow: 0
                        }}
                    >

                        <Divider
                            orientation="horizontal"
                            sx={styledCartResume.styledDivider}
                        />

                        <CardContent
                            sx={styledCartResume.styledCardContent}
                        >

                            <Typography
                                fontFamily={'semiBold'}
                                sx={{
                                    mb: 2
                                }}
                            >
                                Subtotal
                            </Typography>

                            <Typography
                                fontFamily={'semiBold'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                USD {props.cartTotal.toFixed(2)}
                            </Typography>

                        </CardContent>

                        <CardContent
                            sx={styledCartResume.styledCardContent}
                        >

                            <Typography
                                fontFamily={'regular'}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <small>
                                    (*) Envío
                                </small>
                            </Typography>

                            <Typography
                                fontFamily={'semiBold'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                USD 0
                            </Typography>

                        </CardContent>

                        <Divider
                            orientation="horizontal"
                            sx={styledCartResume.styledDivider}
                        />

                        <CardContent
                            sx={styledCartResume.styledCardContent}
                        >

                            <Typography
                                fontFamily={'bold'}
                                sx={{
                                    mb: 2
                                }}
                            >
                                TOTAL
                            </Typography>

                            <Typography
                                fontFamily={'bold'}
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontSize: "1.2rem",
                                }}
                            >
                                USD {props.cartTotal.toFixed(2)}
                            </Typography>


                        </CardContent>

                        <Divider
                            orientation="horizontal"
                            sx={styledCartResume.styledDivider}
                        />

                        <CardContent
                            sx={styledCartResume.styledCardShipping}
                        >

                            <Typography
                                fontFamily={'regular'}
                                sx={{
                                    color: theme.palette.secondary.light,
                                    fontSize: "0.9rem",
                                }}
                            >
                                (*) El envío internacional tiene un costo de USD 15.
                            </Typography>

                        </CardContent>

                    </Card>

                    <Divider
                        orientation="horizontal"
                        sx={{ ...styledCartResume.styledDivider, marginLeft: "0.35rem", width: "100%" }}
                    />

                </Grid>

                <Grid item
                    xs={12}
                    md={12}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        mb: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: "25%",
                            borderRadius: "0",
                            background: theme.palette.primary.dark,
                            "&:hover": {
                                background: theme.palette.primary.main,
                            },
                        }}
                    >
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography
                                fontFamily={'semiBold'}
                                sx={{
                                    color: 'white',
                                    fontSize: "0.8rem",
                                }}
                            >
                                Seguir comprando
                            </Typography>
                        </Link>
                    </Button>
                </Grid>

                <Grid item
                    xs={12}
                    md={12}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            borderRadius: "0",
                            background: theme.palette.primary.main,
                            "&:hover": {
                                background: theme.palette.primary.dark,
                            },
                        }}
                    >
                        <Typography
                            fontFamily={'bold'}
                            sx={{
                                color: "white",
                                fontSize: "0.95rem",
                            }}
                        >
                            Comprar
                        </Typography>
                    </Button>

                </Grid>

            </Grid>
        </>

    )

}

export default CartResume;