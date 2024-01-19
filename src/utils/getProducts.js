import {
      fetchProducts,
      fetchProductById
} from "../hooks/useFetch/useFetch.js";

export const getProducts = async (sId) => {

      const productsResponse = await fetchProducts(sId);

      if (productsResponse.status === 'success') {

            console.log(productsResponse)

            const productsData = productsResponse.payload.products;


            return productsData;

      } else {

            throw new Error(productsResponse.message);

      };


};

export const getProductById = async (p_id) => {


      const productResponse = await fetchProductById(p_id);

      if (productResponse.status === '200: OK') {

            const productData = productResponse.payload.payload;

            return productData;

      } else {

            throw new Error(productResponse.message);

      };

}