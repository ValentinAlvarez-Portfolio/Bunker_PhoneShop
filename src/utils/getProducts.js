import {
      fetchProducts,
      fetchProductById
} from "../hooks/useFetch/useFetch.js";

export const getProducts = async (sId) => {

      const productsResponse = await fetchProducts(sId);

      if (productsResponse.status === 'success') {

            let productsData = productsResponse.payload.products;

            if (sId === 'offers') {

                  productsData = productsData.map(product => {

                        const discount = Math.random() * 0.1 + 0.1;
                        const newPrice = product.price * (1 - discount);
                        const oldPrice = Number(product.price);
                        product.price = Number(newPrice.toFixed(2));
                        return {
                              ...product,
                              oldPrice: oldPrice.toFixed(2),
                              discount: (discount * 100).toFixed(2) + '%'
                        };

                  });

            } else {


                  productsData = productsData.map(product => ({
                        ...product,
                        oldPrice: 0,
                        discount: '0%'
                  }));

            }

            console.log(productsData);
            return productsData;

      } else {
            throw new Error(productsResponse.message);
      }

};

/* export const getProducts = async (sId) => {

      const productsResponse = await fetchProducts(sId);

      if (productsResponse.status === 'success') {

            const productsData = productsResponse.payload.products;

            return productsData;

      } else {

            throw new Error(productsResponse.message);

      };


}; */

export const getProductById = async (p_id) => {


      const productResponse = await fetchProductById(p_id);


      if (productResponse.status === '200: OK') {

            const productData = productResponse.payload.payload;

            return productData;

      } else {

            productResponse.message === '' ? productResponse.message = `No se encontró el producto con la id ${p_id}` : productResponse.message;

            throw new Error(productResponse.message);

      };

}