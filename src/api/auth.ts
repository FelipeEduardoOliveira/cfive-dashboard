import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { formatErrorsAuthApi } from './formarters';

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      user: userCredential.user,
      token: await userCredential.user.getIdToken(),
    };
  } catch (error: any) {
    const errorCode = error.code;

    const errorMessage = formatErrorsAuthApi({ code: errorCode });

    return {
      error: errorMessage,
    };
  }
}
