import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKKrFFXEdH2odCgG_mU-RhQKygVFkCLVM",
    authDomain: "zzzz-8ea15.firebaseapp.com",
    databaseURL: "https://zzzz-8ea15-default-rtdb.firebaseio.com",
    projectId: "zzzz-8ea15",
    storageBucket: "zzzz-8ea15.firebasestorage.app",
    messagingSenderId: "383301597009",
    appId: "1:383301597009:web:94288be2c0f7080f550570"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);