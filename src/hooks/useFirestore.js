import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useFirestore = () => {
  const addToWaitlist = async (formData) => {
    try {
      // Check if email already exists
      const q = query(
        collection(db, "waitlist"), 
        where("email", "==", formData.email)
      );
      
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        throw new Error('Email already registered');
      }

      // Add new document
      const docRef = await addDoc(collection(db, "waitlist"), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'pending'
      });

      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Firestore error:', error);
      throw error;
    }
  };

  return { addToWaitlist };
};