import React from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { PackageOpen } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  onResetFilters?: () => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onResetFilters }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-2xl border border-slate-200">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
          <PackageOpen className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 font-display">No matching products found</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md">
          We couldn't find any items matching your specific criteria. Try adjusting your search query, price range, or category filter.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="mt-5 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
