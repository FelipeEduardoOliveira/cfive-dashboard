import { collection, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * Atualiza um post existente no Firestore.
 *
 * @param postId ID do documento que será atualizado
 * @param updatedData Dados atualizados do post
 * @returns void
 */
export const updatePost = async (blogId: string, updatedData: any): Promise<void> => {
  try {
    const postRef = doc(collection(db, 'blog'), blogId);
    console.log({ blogId });
    await updateDoc(postRef, {
      ...updatedData,
      updateAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Erro ao atualizar post:', error);
    throw new Error('Erro ao atualizar o post no Firestore.');
  }
};
