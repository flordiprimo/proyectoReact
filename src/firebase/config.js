// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAe1n23-h6FkXgjMdcuk4nVmAb40KSdt3A",
  authDomain: "ecommerce-diprimo.firebaseapp.com",
  projectId: "ecommerce-diprimo",
  storageBucket: "ecommerce-diprimo.appspot.com",
  messagingSenderId: "23087070749",
  appId: "1:23087070749:web:6e65d04f8929cd99b050f4"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}