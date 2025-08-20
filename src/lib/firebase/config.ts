import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDI0Euqdv0qANrz4KNBIDL-DoxI9FHMggk",
  authDomain: "gopika1-portfolio.firebaseapp.com",
  projectId: "gopika1-portfolio",
  storageBucket: "gopika1-portfolio.firebasestorage.app",
  messagingSenderId: "218077791747",
  appId: "1:218077791747:web:72abc979eb804169c4f036",
  measurementId: "G-4VFBXQ28GR"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const auth = getAuth(app);