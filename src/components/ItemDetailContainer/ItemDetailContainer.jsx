import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../utils/getProducts.js'
import { CartContext } from '../../context/CartContext/CartContext.jsx'
import { LoginContext } from '../../context/LoginContext/LoginContext.jsx'

const ItemDetailContainer = () => {

      const { p_id } = useParams()

      const [product, setProduct] = useState([])
      const [thumbnails, setThumbnails] = useState([])
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)

      const { addItem } = useContext(CartContext);

      const { isAuthenticated } = useContext(LoginContext);

      const handleAddToCart = () => {

            if (!isAuthenticated) {

                  alert('Debes iniciar sesión para agregar productos al carrito');

                  return;

            }

            addItem(product, 1);

      }

      useEffect(() => {

            const loadData = async () => {

                  setLoading(true)

                  try {

                        const product = await getProductById(p_id)

                        setProduct(product)
                        setThumbnails(product.thumbnails)

                  } catch (err) {

                        setError(err.message || 'Error desconocido')

                  }

                  setLoading(false)

            }

            loadData()

      }, [p_id])

      if (loading) return <h2>Loading...</h2>
      if (error) return <h2>{error}</h2>


      return (
            <>

                  <ul>
                        <li> {thumbnails.map((thumbnail, index) => <img src={thumbnail} alt="thumbnail" key={index} />)} </li>
                        <li>Producto: {product.title}</li>
                        <li>Precio: {product.price}</li>
                        <li>Descripción: {product.description}</li>
                        <li>Stock: {product.stock}</li>
                        <li>Color: {product.color}</li>

                  </ul>

                  <button
                        onClick={handleAddToCart}
                  >Agregar al carrito</button>

            </>
      )
}

export default ItemDetailContainer