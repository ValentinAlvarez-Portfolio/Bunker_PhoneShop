import { Container, Box, Card, CardMedia, Button, Grid, Typography, useTheme } from '@mui/material';
import { logo, socialMedia, payments } from "../../utils/images.js"
import { Link } from "react-router-dom";
import SVG from './SVG.jsx';

const Footer = () => {

    const theme = useTheme();

    const styledFooter = {

        styledBox: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '10rem'
        },

        styledTypography: {
            color: theme.palette.primary.dark,
            fontSize: theme.typography.fontSize.md,
            fontFamily: theme.typography.fontFamily.bold,
        },

        styledCopyrigth: {
            color: theme.palette.secondary.light,
            textAlign: 'center',
            fontSize: theme.typography.fontSize.xs,
            fontFamily: theme.typography.fontFamily.regular,
        },

    }

    return (
        <>

            <Container maxWidth="xxl" sx={{
                mb: "-8rem"
            }}>
                <Box sx={styledFooter.styledBox}>
                    <Link to="/">
                        <img src={logo[0].imgPath} alt={logo[0].label} />
                    </Link>
                </Box>

                <Box sx={{
                    ...styledFooter.styledBox,
                    mt: 4,
                }}>
                    {socialMedia.map((image, index) => {
                        return (
                            <Card key={index} sx={{
                                margin: '0 0.5rem',
                                borderRadius: '50%'
                            }}>
                                <CardMedia component="img" image={image.imgPath} alt={image.label} sx={{
                                    width: "30px",
                                    height: "30px"
                                }} />
                            </Card>
                        );
                    })}
                </Box>

                <Box sx={{
                    ...styledFooter.styledBox,
                    mt: 4,
                }}>
                    {payments.map((image, index) => {
                        return (
                            <Card key={index} sx={{
                                margin: '0 1rem'
                            }}>
                                <CardMedia component="img" image={image.imgPath} alt={image.label} sx={{
                                    width: "100px",
                                    height: "50px"
                                }} />
                            </Card>
                        );
                    })}
                </Box>

                <Box sx={{
                    ...styledFooter.styledBox,
                    mt: 4,
                }}>
                    <Typography sx={styledFooter.styledCopyrigth}>
                        © 2023 BunkerPhoneShop - Todos los derechos reservados
                    </Typography>
                </Box>
            </Container>

            <SVG viewBox="0 0 1440 320" />
        </>
    )
}

export default Footer;