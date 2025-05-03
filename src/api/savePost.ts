import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

export interface BlogPost {
  title: string;
  desciption: string;
  image: string;
  createBy: string;
  createdAt: Timestamp;
  active?: boolean;
  publicIn?: Timestamp;
  shortDescription?: string;
}

/**
 * Salva um novo post no Firestore.
 *
 * @param postData Dados do post (title, desciption, image)
 * @returns ID do documento salvo
 */
export const saveBlogPost = async (postData: BlogPost): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'blog'), {
      ...postData,
      updateAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao salvar post:', error);
    throw new Error('Erro ao salvar post no Firestore.');
  }
};
