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
      getDoc,
      getDocs,
      doc,
      updateDoc,
      query,
      where,
} from "firebase/firestore";

import {
      db
} from "../services/config.js";

const filterEmptyFields = (obj) => {

      return Object.entries(obj)
            .filter(([key, value]) => value !== null && value !== undefined && value !== '')
            .reduce((acc, [key, value]) => ({
                  ...acc,
                  [key]: value
            }), {});

};

export const getUserByEmail = async (user) => {

      try {

            const userCollectionRef = collection(db, 'users');

            const q = query(userCollectionRef, where("email", "==", user.email));

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {

                  return {

                        userPayload: null,
                        message: 'Usuario no encontrado'

                  };

            }

            let userToGet = {};

            querySnapshot.forEach((doc) => {

                  userToGet = {
                        ...doc.data(),
                        id: doc.id
                  }

            });

            const message = userToGet.id ? `Usuario ${userToGet.email} encontrado correctamente` : 'Usuario no encontrado';

            return {
                  userPayload: {
                        ...userToGet,
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

      };

}

export const getUserById = async (uid) => {

      try {

            const userDocRef = doc(db, 'users', uid);

            const docSnap = await getDoc(userDocRef);

            if (docSnap.exists()) {

                  const userPayload = {

                        ...docSnap.data(),
                        id: docSnap.id

                  };

                  const message = `Usuario ${userPayload.email} encontrado correctamente`;

                  return {

                        userPayload: {
                              ...userPayload,
                        },
                        message

                  };

            } else {

                  return {

                        message: 'Usuario no encontrado'
                  };

            }

      } catch (error) {

            console.error(error);

            throw new Error(error);

      }

};

export const registerUser = async (user) => {

      const auth = getAuth();

      try {

            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

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

            error = 'El email ya está registrado';

            throw new Error(error);

      }

}

export const loginUser = async (user) => {

      const auth = getAuth();

      try {

            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

            const message = !userCredential ? 'Las credenciales son incorrectas' : `Usuario ${user.email} logueado correctamente`;

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

            const filteredFields = filterEmptyFields(newUser);

            const filteredAddress = filterEmptyFields(newUser.address);

            const filteredNewUser = {
                  ...filteredFields,
                  address: {
                        ...oldUser.address,
                        ...filteredAddress
                  }
            };

            const response = await updateDoc(userDocRef, {
                  ...oldUser,
                  ...filteredNewUser,
                  age: newUser.age ? newUser.age : oldUser.age,
                  email: oldUser.email,
                  date_updated: new Date()
            });

            if (filteredNewUser.first_name) {

                  await updateProfile(auth.currentUser, {

                        displayName: filteredNewUser.first_name

                  });

            }

            const message = `Usuario ${oldUser.email} actualizado correctamente`;

            return {
                  newUser: {
                        ...oldUser,
                        ...filteredNewUser,
                        age: newUser.age ? newUser.age : oldUser.age,
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

export const logoutUser = async () => {

      const auth = getAuth();

      try {

            await auth.signOut();

            localStorage.removeItem('user');

            return {
                  message: 'Usuario deslogueado correctamente'
            }

      } catch (error) {

            console.log(error);

            throw new Error(error);

      }

}

export const checkSession = () => {

      const auth = getAuth();

      const user = auth.currentUser;

      const userLocal = localStorage.getItem('user');

      const message = user && userLocal ? `Usuario ${user.email} logueado correctamente` : 'Usuario no logueado';

      const logged = user && userLocal ? true : false;

      return {
            userPayload: userLocal ? JSON.parse(userLocal) : null,
            message,
            logged
      }

}