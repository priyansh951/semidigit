export type Category = 'Home' | 'Industrial' | 'Medical' | 'Kitchen' | 'Electronic' | 'All';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  useCase: string;
  features: string[];
  image: string;
  isSefsy?: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  productInterest: string;
  message?: string;
  timestamp: string;
}
