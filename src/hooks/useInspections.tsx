import { createContext, useContext, useState } from 'react';
import { api } from 'services/api';

type InspectionProps = {
  idInspection: string;
  nameInspection: string;
};

type ContextDataProps = {
  createInspections: (value: string) => Promise<void>;
  inspections: InspectionProps[];
  loading: boolean;
};

type InspectionProviderProps = {
  children: React.ReactNode;
};

const InspectionContext = createContext({} as ContextDataProps);

export const InpectionsProvider = ({ children }: InspectionProviderProps) => {
  const [inspections, setInspections] = useState<InspectionProps[]>([]);
  const [loading, setLoading] = useState(false);

  const createInspections = async (keyword: string) => {
    if (keyword === '') {
      alert('Digite alguma coisa cara!!');
    }

    setLoading(true);
    const response = await api.post('/', { keyword });

    const newInspection = {
      idInspection: response.data.id,
      nameInspection: keyword,
    };

    setInspections([...inspections, newInspection]);
    setLoading(false);
  };

  return (
    <InspectionContext.Provider
      value={{
        createInspections,
        inspections,
        loading,
      }}
    >
      {children}
    </InspectionContext.Provider>
  );
};

export const useInspections = () => useContext(InspectionContext);
