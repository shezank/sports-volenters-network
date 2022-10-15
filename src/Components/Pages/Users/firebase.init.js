import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDuGmiUNZ7NidaMr4UsWt1Jo4UZ1oIdrNg",
  authDomain: "sports-volenter-web.firebaseapp.com",
  projectId: "sports-volenter-web",
  storageBucket: "sports-volenter-web.appspot.com",
  messagingSenderId: "626081194477",
  appId: "1:626081194477:web:5767c722f8ce9cbb90c7e4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
