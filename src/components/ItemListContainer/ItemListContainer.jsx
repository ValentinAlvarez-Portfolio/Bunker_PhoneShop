import React, { useState, useEffect, useContext } from 'react';
import { getProducts } from '../../utils/getProducts.js';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList.jsx';

const ItemListContainer = () => {

      const { sId } = useParams();

      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const [showTabs, setShowTabs] = useState(true);

      useEffect(() => {

            const loadData = async () => {

                  setLoading(true);

                  try {

                        const products = await getProducts(sId);

                        setProducts(products);

                        sId ? setShowTabs(false) : setShowTabs(true);

                  } catch (err) {

                        setError(err.message || 'Error desconocido');

                  }

                  setLoading(false);

            };

            loadData();

      }, [sId]);

      if (loading) return <h2>Loading...</h2>;
      if (error) return <h2>{error}</h2>;

      return (
            <>
                  <ItemList products={products} showTabs={showTabs} />
            </>
      );
};

export default ItemListContainer;