
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isFeatured: boolean;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}
