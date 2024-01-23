import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme/Theme.jsx';
import { CartProvider } from './context/CartContext/CartContext.jsx';
import { LoginProvider } from './context/LoginContext/LoginContext.jsx';
import { CheckoutProvider } from './context/CheckoutContext/CheckoutContext.jsx';
import ScrollTop from './components/ScrollTop/ScrollTop.jsx';


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginProvider>
          <CartProvider>
            <CheckoutProvider>
              <HashRouter>
                <Header />
                <AppRoutes />
                <Footer />
                <ScrollTop />
              </HashRouter>
            </CheckoutProvider>
          </CartProvider>
        </LoginProvider>

      </ThemeProvider>
    </>
  )
}

export default App
