import {
      collection,
      addDoc,
      getDocs,
      doc,
      updateDoc,
      query,
      where
} from 'firebase/firestore';
import {
      db
} from '../services/config.js';

export const getByUserId = async (uid) => {
      try {
            const cartCollectionRef = collection(db, 'carts');
            const q = query(cartCollectionRef, where("user_id", "==", uid));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                  return {
                        existingCart: null,
                        message: 'Carrito no encontrado'
                  };
            }

            let cartToGet = {};
            querySnapshot.forEach((doc) => {
                  cartToGet = {
                        ...doc.data(),
                        id: doc.id
                  };
            });

            return {
                  existingCart: {
                        ...cartToGet
                  },
                  message: 'Carrito encontrado'
            };
      } catch (error) {
            console.error('Error al obtener el carrito: ', error);
            throw new Error('Error al obtener el carrito');
      }
}

export const create = async (uid) => {
      if (!uid) {
            throw new Error('UID no proporcionado para crear carrito');
      }

      try {
            const cartCollectionRef = collection(db, 'carts');
            const cart = {
                  cartItems: [],
                  cartTotal: 0,
                  cartQuantity: 0,
                  user_id: uid,
                  date_created: new Date(),
            }

            const newCart = await addDoc(cartCollectionRef, {
                  ...cart
            });

            return {
                  cartPayload: {
                        id: newCart.id,
                        ...cart
                  },
                  message: 'Carrito creado correctamente'
            };
      } catch (error) {
            console.error('Error al crear el carrito: ', error);
            throw new Error('Error al crear el carrito');
      }
}

export const update = async (cart) => {
      if (!cart || !cart.id) {
            throw new Error('Datos del carrito no proporcionados o incompletos para la actualización');
      }

      try {
            const cartDocRef = doc(db, 'carts', cart.id);
            const cartToUpdate = {
                  ...cart,
                  date_updated: new Date()
            };

            await updateDoc(cartDocRef, {
                  ...cartToUpdate
            });

            return {
                  cartPayload: {
                        ...cartToUpdate
                  },
                  message: 'Carrito actualizado correctamente'
            };
      } catch (error) {
            console.error('Error al actualizar el carrito: ', error);
            throw new Error('Error al actualizar el carrito');
      }
};

export const calculateTotals = (cartItems) => {
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

      return {
            totalPrice,
            totalQuantity
      };
}