import {
      collection,
      addDoc,
      getDocs,
      doc,
      updateDoc
} from 'firebase/firestore';

import {
      db
} from '../services/config.js';

export const getByUserId = async (uid) => {

      try {

            const cartCollectionRef = collection(db, 'carts');

            const querySnapshot = await getDocs(cartCollectionRef);

            let cartToGet = {};

            querySnapshot.forEach((doc) => {

                  if (doc.data().user_id === uid) {

                        cartToGet = {
                              ...doc.data(),
                              id: doc.id
                        }

                  }

            });

            const message = cartToGet.id ? 'Carrito encontrado' : 'Carrito no encontrado';

            return {
                  existingCart: {
                        ...cartToGet
                  },
                  message
            }

      } catch (error) {

            console.log(error);

            throw new Error(error);
      }

}

export const create = async (uid) => {

      try {

            const cartCollectionRef = collection(db, 'carts');

            const cart = {
                  cartItems: [{}],
                  cartTotal: 0,
                  cartQuantity: 0,
                  user_id: uid,
                  date_created: new Date(),
            }

            const newCart = await addDoc(cartCollectionRef, {
                  ...cart
            })

            const message = newCart.id ? 'Carrito creado correctamente' : 'Error al crear el carrito';

            return {
                  cartPayload: {
                        id: newCart.id,
                        ...cart
                  },
                  message
            }


      } catch (error) {

            console.log(error);

            throw new Error(error);

      }

}

export const calculateTotals = (cartItems) => {

      let totalPrice = 0;

      let totalQuantity = 0;

      cartItems.forEach((item) => {

            totalPrice += item.price * item.quantity;

      });

      cartItems.forEach((item) => {

            totalQuantity += item.quantity;

      });

      return {
            totalPrice,
            totalQuantity
      }

}