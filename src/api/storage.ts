import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

export async function uploadImage(file: File, userId: string) {
  const filePath = `users/${userId}/${file.name}`;
  const storageRef = ref(storage, filePath);

  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { url };
  } catch (error: any) {
    return { error: error.message };
  }
}
