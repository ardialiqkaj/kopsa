import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHJJo34Pf21UpzQWupOrRp1cf4zbImaA8",
  authDomain: "kopsa-ec0cc.firebaseapp.com",
  databaseURL:
    "https://kopsa-ec0cc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kopsa-ec0cc",
  storageBucket: "kopsa-ec0cc.appspot.com",
  messagingSenderId: "413659655257",
  appId: "1:413659655257:web:40672d59fc6192674bd548",
  measurementId: "G-YMMGC1Y5B5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
