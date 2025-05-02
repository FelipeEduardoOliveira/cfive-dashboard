import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/api/firebaseConfig';
import { login } from '@/api/auth';
import { toaster } from '@/utils/toast';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginContext: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  //   register: (email: string, password: string, displayName: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const history = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginContext = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await login(email, password);
      if (response.error) {
        toaster.error(response.error);
        return;
      } else {
        toaster.success('Usuario logado com sucessso !');
        response.user && setUser(response.user);
        history.push('/dashboard');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  //   const register = async (email: string, password: string, displayName: string) => {
  //     setLoading(true);
  //     try {
  //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //       await updateProfile(userCredential.user, { displayName });
  //       setUser({ ...userCredential.user, displayName }); // força atualização do contexto
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <AuthContext.Provider value={{ user, loading, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro do AuthProvider');
  return context;
};
