import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

/**
 * Faz o upload de uma imagem para o Firebase Storage e retorna a URL de download.
 *
 * @param file Arquivo de imagem (File)
 * @param path Caminho opcional dentro do bucket (ex: "users/profilePics")
 * @returns URL pública da imagem
 */
export const uploadImageAndGetUrl = async (file: File, path = 'uploads') => {
  try {
    const fileName = `${path}/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, fileName);

    // Faz o upload do arquivo
    await uploadBytes(storageRef, file);

    // Obtém a URL pública
    const downloadUrl = await getDownloadURL(storageRef);

    return downloadUrl;
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    throw new Error('Falha no upload da imagem');
  }
};
