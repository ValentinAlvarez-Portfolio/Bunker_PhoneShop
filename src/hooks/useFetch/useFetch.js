export const fetchProducts = async (sId) => {

      try {

            const response = sId ? await fetch(`https://pfalvarez-production.up.railway.app/api/products?limit=8&page=1&query=${sId}`, {
                  method: 'GET',
                  credentials: 'include'
            }) : await fetch('https://pfalvarez-production.up.railway.app/api/products', {
                  method: 'GET',
                  credentials: 'include'
            });

            const products = await response.json();

            if (response.ok) {
                  return products;

            } else {

                  throw new Error(products.message);

            }

      } catch (error) {

            return error;

      }

};

export const fetchProductById = async (p_id) => {

      try {

            const response = await fetch(`https://pfalvarez-production.up.railway.app/api/products/${p_id}`, {
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