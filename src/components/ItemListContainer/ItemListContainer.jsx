import React, { useState, useEffect, useContext, useRef } from 'react';
import { getProducts } from '../../utils/getProducts.js';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList.jsx';
import { CartContext } from '../../context/CartContext/CartContext.jsx';
import { LoginContext } from '../../context/LoginContext/LoginContext.jsx';
import { ProductsContext } from '../../context/ProductsContext/ProductsContext.jsx';
import { fetchProducts } from '../../hooks/useFetch/useFetch.js';

const ItemListContainer = () => {

      const { sId } = useParams();

      const { cart } = useContext(CartContext);

      const { currentUser } = useContext(LoginContext);

      const { setProducts, limit, page, setTotalPages, } = useContext(ProductsContext);

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const [showTabs, setShowTabs] = useState(true);


      useEffect(() => {

            const loadData = async () => {

                  setLoading(true);

                  try {

                        const response = await fetchProducts(sId, limit, page);
                        const products = await getProducts(sId, limit !== 0 ? limit : 100, page !== 0 ? page : 1);

                        setTotalPages(response.totalPages);

                        setProducts(products);

                        sId ? setShowTabs(false) : setShowTabs(true);

                  } catch (err) {

                        setError(err.message || 'Error desconocido');

                  }

                  setLoading(false);

            };

            loadData();

      }, [sId, page, limit]);


      if (loading) return <h2>Loading...</h2>;
      if (error) return <h2>{error}</h2>;

      return (
            <>
                  <ItemList showTabs={showTabs} />

            </>
      );
};

export default ItemListContainer;