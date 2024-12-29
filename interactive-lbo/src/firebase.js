// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmJ_cVg7DyOFKBvHfPPGUMl8IXi3pXwfg",
  authDomain: "lbo-model-builder.firebaseapp.com",
  projectId: "lbo-model-builder",
  storageBucket: "lbo-model-builder.firebasestorage.app",
  messagingSenderId: "879344691567",
  appId: "1:879344691567:web:141fa3190e59181a50209a",
  measurementId: "G-GDFC8PLXM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Or if you plan to use it, export it
export const analytics = getAnalytics(app);