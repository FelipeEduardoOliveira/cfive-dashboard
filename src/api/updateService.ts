import { collection, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * Atualiza um serviço existente no Firestore.
 *
 * @param serviceId ID do documento que será atualizado
 * @param updatedData Dados atualizados do serviço
 * @returns void
 */
export const updateService = async (serviceId: string, updatedData: any): Promise<void> => {
  try {
    const serviceRef = doc(collection(db, 'services'), serviceId);
    await updateDoc(serviceRef, {
      ...updatedData,
      updateAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    throw new Error('Erro ao atualizar o serviço no Firestore.');
  }
};
