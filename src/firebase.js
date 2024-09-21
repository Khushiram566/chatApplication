import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWu1xTsGi5ux4Y1NlcW7i_aZcBvDaOGvY",
  authDomain: "fir-chat-3ff89.firebaseapp.com",
  projectId: "fir-chat-3ff89",
  storageBucket: "fir-chat-3ff89.appspot.com",
  messagingSenderId: "958746995223",
  appId: "1:958746995223:web:0f7a5a34e567bf01c2ca52"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()




