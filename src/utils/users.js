import {
      getAuth,
      createUserWithEmailAndPassword,
      updateProfile,
      updateEmail,
      signInWithEmailAndPassword,
} from "firebase/auth";

import {
      collection,
      addDoc,
      getDocs,
      doc,
      updateDoc
} from "firebase/firestore";

import {
      db
} from "../services/config.js";

export const getUserByEmail = async (user) => {

      try {

            const userCollectionRef = collection(db, 'users');

            const querySnapshot = await getDocs(userCollectionRef);

            let userToGet = {};

            querySnapshot.forEach((doc) => {

                  if (doc.data().email === user.email) {

                        userToGet = {
                              ...doc.data(),
                              id: doc.id
                        }

                  }


            });

            return {
                  userPayload: {
                        ...userToGet,
                        password: undefined,
                        confirm_password: undefined,
                        date_created: undefined,
                        date_updated: undefined
                  }
            }

      } catch (error) {

            console.log(error);

            throw new Error(error);

      };

}

export const getUserById = async (uid) => {

      try {

            const userCollectionRef = collection(db, 'users');

            const querySnapshot = await getDocs(userCollectionRef);

            let userPayload = {};

            querySnapshot.forEach((doc) => {

                  if (doc.id === uid) {

                        userPayload = {
                              ...doc.data(),
                              id: doc.id
                        }

                  }

            });

            return {
                  userPayload
            }

      } catch (error) {

            console.log(error);

            throw new Error(error);

      };

}

export const registerUser = async (user) => {

      const auth = getAuth();

      try {

            const userCollectionRef = collection(db, 'users');

            const response = await addDoc(userCollectionRef, {
                  ...user,
                  date_created: new Date(),
                  password: "",
                  confirm_password: "",
            });

            if (!response) {
                  throw new Error('No se pudo registrar el usuario');
            };

            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

            const message = `Usuario ${user.email} registrado correctamente`;

            return {
                  userPayload: {
                        ...user,
                        password: undefined,
                        confirm_password: undefined,
                        date_created: undefined,
                        date_updated: undefined
                  },
                  message
            }


      } catch (error) {

            console.log(error);

            throw new Error(error);

      }

}

export const loginUser = async (user) => {

      const auth = getAuth();

      try {

            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

            const message = `Usuario ${user.email} logueado correctamente`;

            return {
                  userLogged: {
                        ...user,
                        password: undefined,
                        confirm_password: undefined,
                        date_created: undefined,
                        date_updated: undefined
                  },
                  message
            }

      } catch (error) {

            error = 'Contraseña incorrecta';

            throw new Error(error);

      }

}

export const updateUser = async (oldUser, newUser) => {

      const auth = getAuth();

      try {

            const userDocRef = doc(db, 'users', oldUser.id);

            const response = await updateDoc(userDocRef, {
                  ...oldUser,
                  ...newUser,
                  email: oldUser.email,
                  date_updated: new Date()
            });

            await updateProfile(auth.currentUser, {
                  displayName: newUser.first_name
            });

            const message = `Usuario ${newUser.email} actualizado correctamente`;

            return {
                  newUser: {
                        ...oldUser,
                        ...newUser,
                        email: oldUser.email,
                        password: undefined,
                        confirm_password: undefined,
                        date_created: undefined,
                        date_updated: undefined
                  },
                  message
            };

      } catch (error) {

            console.log(error);
            throw new Error(error);

      }

};