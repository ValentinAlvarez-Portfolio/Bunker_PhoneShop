import {
      collection,
      addDoc,
      getDocs,
      query,
      where
} from 'firebase/firestore';

import {
      db
} from '../services/config.js';

export const getOrderById = async (id) => {

      try {

            const orderCollectionRef = collection(db, 'orders', id);

            const docSnap = await getDoc(orderCollectionRef);

            if (!docSnap.exists()) {

                  return {
                        existingOrder: null,
                        message: 'Orden no encontrada'
                  };

            }

            const orderToGet = docSnap.data();

            return {
                  existingOrder: orderToGet ? {
                        ...orderToGet
                  } : false,
                  message: 'Orden encontrada'
            };

      } catch (error) {

            console.error('Error al obtener la orden: ', error);
            throw new Error('Error al obtener la orden');

      }

}

export const getOrdersByUId = async (uid) => {

      try {

            const orderCollectionRef = collection(db, 'orders');

            const q = query(orderCollectionRef, where("uid", "==", uid));

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {

                  return {
                        existingOrders: null,
                        message: 'Ordenes no encontradas'
                  };

            }

            let ordersToGet = [];

            querySnapshot.forEach((doc) => {

                  ordersToGet.push({
                        ...doc.data(),
                        id: doc.id
                  });

            });

            return {
                  existingOrders: ordersToGet ? {
                        ...ordersToGet
                  } : false,
                  message: 'Ordenes encontradas'
            };

      } catch (error) {

            console.error('Error al obtener la orden: ', error);
            throw new Error('Error al obtener la orden');

      };

};

export const create = async (order) => {

      if (!order) {

            throw new Error('Orden no proporcionada para crear');
      }

      try {

            const orderCollectionRef = collection(db, 'orders');

            const orderToCreate = {
                  ...order
            };

            console.log(orderToCreate)

            const docRef = await addDoc(orderCollectionRef, {
                  ...orderToCreate
            });

            return {
                  orderPayload: orderToCreate,
                  id: docRef.id,
                  message: 'Orden creada correctamente'
            };

      } catch (error) {

            console.error('Error al crear la orden: ', error);
            throw new Error('Error al crear la orden');

      };

};