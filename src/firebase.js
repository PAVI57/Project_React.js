import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPqrmZZvQG59w1_4vjFPb4iZpZ65BEvHM",
  authDomain: "myapp-d7783.firebaseapp.com",
  databaseURL: "https://myapp-d7783-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp-d7783",
  storageBucket: "myapp-d7783.appspot.com",
  messagingSenderId: "879215733989",
  appId: "1:879215733989:web:f298825cd1344a4531380c",
  measurementId: "G-Z2B8V3LVFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
