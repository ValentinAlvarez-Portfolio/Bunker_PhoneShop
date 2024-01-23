import { Grid, Typography, Divider, useTheme } from "@mui/material";


const CartItemInfo = (props) => {

    const theme = useTheme();

    const centerFlexRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    };

    const styledCartInfo = {

        styledItemDivider: {
            display: "block",
            width: "90%",
            marginTop: "0.5rem",
            marginLeft: "2rem",
            marginBottom: "1rem",
        },

        styledColorDivider: {
            display: "block",
            width: "95%",
            marginTop: "0.5rem",
            marginLeft: "0.4rem",
            marginBottom: "1rem",
        },

        styledItemText: {
            fontSize: "0.7rem",
            fontWeight: "regular",
            color: theme.palette.secondary.light
        },

    }


    return (


        <Grid
            container
            spacing={1}
            sx={centerFlexRow}
        >

            <Grid item
                xs={7}
                md={7}
                sx={{
                    mt: 4
                }}
            >

                <Grid container spacing={1}>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={centerFlexRow}
                    >

                        <Typography
                            fontFamily={'regular'}
                            sx={styledCartInfo.styledItemText}
                        >
                            ITEM
                        </Typography>

                    </Grid>

                    <Divider
                        orientation="horizontal"
                        sx={styledCartInfo.styledItemDivider}
                    />

                </Grid>

            </Grid>

            <Grid item
                xs={5}
                md={5}
                sx={{
                    mt: 4
                }}
            >

                <Grid container spacing={1}>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={centerFlexRow}
                    >

                        <Grid container spacing={1}>

                            <Grid
                                item
                                xs={2}
                                md={2}
                                sx={centerFlexRow}
                            >

                                <Typography
                                    fontFamily={'regular'}
                                    sx={styledCartInfo.styledItemText}
                                >
                                    COLOR
                                </Typography>

                            </Grid>


                            <Grid
                                item
                                xs={6}
                                md={6}
                                sx={centerFlexRow}
                            >
                                <Typography
                                    fontFamily={'regular'}
                                    sx={styledCartInfo.styledItemText}
                                >
                                    CANTIDAD
                                </Typography>

                            </Grid>

                            <Grid
                                item
                                xs={4}
                                md={4}
                                sx={centerFlexRow}
                            >
                                <Typography
                                    fontFamily={'regular'}
                                    sx={styledCartInfo.styledItemText}
                                >
                                    PRECIO
                                </Typography>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Divider
                        orientation="horizontal"
                        sx={styledCartInfo.styledColorDivider}
                    />

                </Grid>

            </Grid>

        </Grid>

    );
};

export default CartItemInfo;