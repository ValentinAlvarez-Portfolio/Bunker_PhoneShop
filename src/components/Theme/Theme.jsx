
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
      palette: {
            primary: {
                  main: "#007DFE",
                  dark: "#004095",
            },
            secondary: {
                  main: "#323232",
                  light: "#a8adb3",
                  dark: "black",
            },
            info: {
                  main: "#e33c48",
                  light: "#fe528d",
            },
      },
      typography: {
            fontFamily: {
                  regular: 'Regular',
                  semiBold: 'SemiBold',
                  bold: 'Bold',
            },
            headerText: {
                  color: "#fff",
                  fontSize: "0.75rem",
                  margin: "0",
                  padding: "0.4rem",
                  backgroundColor: "#007DFE",
                  textAlign: "center",
                  marginBottom: "1rem",
            },
            fontSize: {
                  xs: "0.75rem",
                  sm: "0.875rem",
                  md: "0.92rem",
                  lg: "1rem",
                  xl: "1.25rem",
                  xxl: "1.7rem",
                  xxxl: "2.5rem",
            }
      },
      icons: {
            sizes: {
                  xs: "1.6rem",
                  md: "1.65rem",
                  lg: "1.7rem",
                  xl: "1.8rem",
                  xxl: "2.5rem",
            },
      },
      components: {
            AppBar: {
                  textAlign: "center",
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            },
            Toolbar: {
                  width: '80%',
                  margin: '0 auto',
            },
            InputBase: {
                  padding: "0.25rem",
                  backgroundColor: "whitesmoke",
                  transition: "width 0.3s ease-in-out",
            },
            IconButton: {
                  color: "white",
                  padding: "0.5rem",
                  '&:hover': {
                        backgroundColor: '#007DFE',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  },
            }
      },

});

export default theme;
