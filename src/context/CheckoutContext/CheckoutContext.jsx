import React, { createContext, useState } from 'react'

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {

      const [activeSection, setActiveSection] = useState('cart')

      return (

            <CheckoutContext.Provider value={{
                  activeSection,
                  setActiveSection
            }}>
                  {children}
            </CheckoutContext.Provider>

      )

}