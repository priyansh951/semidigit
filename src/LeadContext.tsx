import { createContext, useContext, useState, ReactNode } from 'react';
import LeadFormModal from './components/LeadFormModal';

interface LeadContextType {
  openModal: (product?: string) => void;
  closeModal: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProduct, setInitialProduct] = useState<string | undefined>(undefined);

  const openModal = (product?: string) => {
    setInitialProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeModal} initialProduct={initialProduct} />
    </LeadContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error('useLeadModal must be used within a LeadProvider');
  }
  return context;
}
