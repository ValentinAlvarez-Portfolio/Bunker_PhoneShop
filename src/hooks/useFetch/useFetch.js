export const fetchProducts = async (sId, limit, page) => {

      try {

            const response = sId ? await fetch(`${import.meta.env.VITE_API_URL_PRODUCTS}?limit=${limit !== 0 ? limit : 100}&page=${page !== 0 ? page : 1}&query=${sId}`, {
                  method: 'GET',
                  credentials: 'include'
            }) : await fetch(`${import.meta.env.VITE_API_URL_PRODUCTS}`, {
                  method: 'GET',
                  credentials: 'include'
            });

            const products = await response.json();

            if (response.ok) {
                  return products;

            } else {

                  console.log(products.message)

                  throw new Error(products.message);

            }

      } catch (error) {


            console.error(error)

            return error;

      }

};

export const fetchProductById = async (p_id) => {

      try {

            const response = await fetch(`${import.meta.env.VITE_API_URL_PRODUCTS}/${p_id}`, {
                  method: 'GET',
                  credentials: 'include'
            });

            const product = await response.json();

            if (response.ok) {

                  return product;

            } else {

                  throw new Error(product.message);

            }


      } catch (error) {

            return error;

      }

}