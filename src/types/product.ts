export type ProductCategory = 'Electronics' | 'Fashion' | 'Accessories' | 'Home Appliances';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  secondaryImage?: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specs: Record<string, string>;
  isFeatured?: boolean;
  badge?: string;
  colors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export type SortOption = 'featured' | 'price-low-high' | 'price-high-low' | 'rating' | 'name-a-z';

export interface FilterState {
  category: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  sortBy: SortOption;
  inStockOnly: boolean;
}
