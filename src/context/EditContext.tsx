import { Timestamp } from 'firebase/firestore';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ServiceEdit {
  active: boolean;
  desciption: string;
  id: string;
  image: File | null;
  serviceName: string;
}

interface BlogEdit {
  id: string;
  title: string;
  desciption: string;
  image: File | null;
  publicIn: Timestamp | null;
  active: boolean;
}

interface EditContextType {
  serviceEdit: ServiceEdit | null;
  setServiceEdit: (serviceEdit: ServiceEdit) => void;
  blogEdit: BlogEdit | null;
  setBlogEdit: (blogEdit: BlogEdit) => void;
  clearFields: () => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export const EditProvider = ({ children }: { children: ReactNode }) => {
  const [serviceEdit, setServiceEdit] = useState<ServiceEdit | null>(null);
  const [blogEdit, setBlogEdit] = useState<BlogEdit | null>(null);

  const clearFields = () => {
    setServiceEdit(null);
    setBlogEdit(null);
  };

  return (
    <EditContext.Provider
      value={{ serviceEdit, setServiceEdit, blogEdit, setBlogEdit, clearFields }}
    >
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => {
  const context = useContext(EditContext);
  if (!context) throw new Error('useEdit deve ser usado dentro do EditProvider');
  return context;
};
