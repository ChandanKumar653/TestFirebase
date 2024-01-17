// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ODVGifTRdZADO19A9OCxgWAcRDhQA6k",
  authDomain: "qwiklyfluttertest.firebaseapp.com",
  databaseURL:
    "https://qwiklyfluttertest-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qwiklyfluttertest",
  storageBucket: "qwiklyfluttertest.appspot.com",
  messagingSenderId: "800360441339",
  appId: "1:800360441339:web:2098c1bd93e1484e03175e",
  measurementId: "G-MQSK41Z7MX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
