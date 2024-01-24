// Import the functions you need from the SDKs you need
import {
      initializeApp
} from "firebase/app";
import {
      getFirestore
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: 'AIzaSyBZfpV4i1o-0nO_ylw3ur9CGCixxonlnj8',
      authDomain: "pfreact-bunkerphoneshop-2fa59.firebaseapp.com",
      projectId: "pfreact-bunkerphoneshop-2fa59",
      storageBucket: "pfreact-bunkerphoneshop-2fa59.appspot.com",
      messagingSenderId: "1035627133231",
      appId: "1:1035627133231:web:4df84974c47343002449da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);