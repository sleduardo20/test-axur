import { createContext, useContext, useState } from 'react';
import { api } from 'services/api';

type InspectionProps = {
  idInspection: string;
  nameInspection: string;
};

type ContextDataProps = {
  createInspections: (value: string) => Promise<void>;
  deleteInspections: (value: string) => void;
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
    setLoading(true);

    const response = await api.post('/', { keyword });

    const newInspection = {
      idInspection: response.data.id,
      nameInspection: keyword,
    };

    setInspections([...inspections, newInspection]);
    setLoading(false);
  };

  const deleteInspections = (id: string) => {
    const newInspections = inspections.filter(
      inspection => inspection.idInspection !== id,
    );

    setInspections(newInspections);
  };

  return (
    <InspectionContext.Provider
      value={{
        createInspections,
        deleteInspections,
        inspections,
        loading,
      }}
    >
      {children}
    </InspectionContext.Provider>
  );
};

export const useInspections = () => useContext(InspectionContext);
