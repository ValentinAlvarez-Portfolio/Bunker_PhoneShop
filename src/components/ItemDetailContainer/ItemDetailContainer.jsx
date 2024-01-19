import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../utils/getProducts.js'

const ItemDetailContainer = () => {

      const { p_id } = useParams()

      const [product, setProduct] = useState([])
      const [thumbnails, setThumbnails] = useState([])
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)

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
                        <li>{product.title}</li>
                        <li>{product.price}</li>
                        <li>{product.description}</li>
                  </ul>

            </>
      )
}

export default ItemDetailContainer