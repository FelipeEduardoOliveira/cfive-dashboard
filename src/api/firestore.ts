import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { error } from 'console';

export async function getAllServices() {
  try {
    const postsRef = collection(db, 'services');
    const snapshot = await getDocs(postsRef);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { error: null, posts };
  } catch (error: any) {
    return { error: error.message, posts: [] };
  }
}
