import { createContext, useContext, useState, ReactNode } from 'react';

interface ServiceEdit {
  active: boolean;
  desciption: string;
  id: string;
  image: File | null;
  serviceName: string;
}

interface EditContextType {
  serviceEdit: ServiceEdit | null;
  setServiceEdit: (serviceEdit: ServiceEdit) => void;
  clearFields: () => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export const EditProvider = ({ children }: { children: ReactNode }) => {
  const [serviceEdit, setServiceEdit] = useState<ServiceEdit | null>(null);

  const clearFields = () => {
    setServiceEdit(null);
  };

  return (
    <EditContext.Provider value={{ serviceEdit, setServiceEdit, clearFields }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => {
  const context = useContext(EditContext);
  if (!context) throw new Error('useEdit deve ser usado dentro do EditProvider');
  return context;
};
