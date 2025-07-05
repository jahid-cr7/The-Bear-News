import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxWEyinjvs2REUsZtbIt9Y--WbRpeXIeI",
  authDomain: "thebearnews-3009e.firebaseapp.com",
  projectId: "thebearnews-3009e",
  storageBucket: "thebearnews-3009e.firebasestorage.app",
  messagingSenderId: "125101264577",
  appId: "1:125101264577:web:56b1abd6fccd4ace040e40"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
