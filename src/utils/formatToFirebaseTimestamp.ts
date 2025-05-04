import { Timestamp } from 'firebase/firestore';

/**
 * Converte uma data (Date ou string) para um Timestamp do Firebase Firestore.
 *
 * @param date Date | string (ISO ou formato reconhecido por `new Date()`)
 * @returns Timestamp do Firestore
 */
export function formatToFirebaseTimestamp(date: Date | string): Timestamp {
  const jsDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(jsDate.getTime())) {
    throw new Error('Data inválida para conversão em Timestamp.');
  }

  return Timestamp.fromDate(jsDate);
}

/**
 * Converte um Timestamp do Firebase Firestore para um objeto Date.
 *
 * @param timestamp Timestamp do Firestore
 * @returns Objeto Date
 */
export function formatFromFirebaseTimestamp(timestamp: Timestamp): Date {
  return timestamp.toDate();
}
