import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function getAllPosts() {
  try {
    const postsRef = collection(db, 'blog');
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
