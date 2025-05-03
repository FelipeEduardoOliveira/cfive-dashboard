import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * Salva um novo post no Firestore.
 *
 * @param serviceData Dados do post (title, desciption, image)
 * @returns ID do documento salvo
 */
export const saveService = async (serviceData: any): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'services'), {
      ...serviceData,
      updateAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao salvar post:', error);
    throw new Error('Erro ao salvar post no Firestore.');
  }
};
