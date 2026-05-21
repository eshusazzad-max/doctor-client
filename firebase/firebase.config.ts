import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI9loSmWpIRe1X3eEoIlWuEJRIWQBtt0A",
  authDomain: "doctime-2d27d.firebaseapp.com",
  projectId: "doctime-2d27d",
  storageBucket: "doctime-2d27d.firebasestorage.app",
  messagingSenderId: "524554229192",
  appId: "1:524554229192:web:1665412a50ee19c56bdcfd"
};

const app = initializeApp(firebaseConfig);

export default app;