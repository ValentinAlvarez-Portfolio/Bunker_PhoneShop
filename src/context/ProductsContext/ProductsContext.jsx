import React, { createContext, useState } from 'react'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

      const [limit, setLimit] = useState(4);
      const [totalPages, setTotalPages] = useState(null);
      const [page, setPage] = useState(1);
      const [products, setProducts] = useState([]);

      return (

            <ProductsContext.Provider value={{
                  limit,
                  setLimit,
                  totalPages,
                  setTotalPages,
                  page,
                  setPage,
                  products,
                  setProducts,
            }}>
                  {children}
            </ProductsContext.Provider>

      )

}