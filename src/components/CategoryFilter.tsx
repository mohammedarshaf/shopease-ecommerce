import React from 'react';
import { CATEGORIES } from '../data/products';
import { SortOption } from '../types/product';
import { ArrowUpDown, Check, Filter } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  inStockOnly: boolean;
  onToggleInStock: (val: boolean) => void;
  categoryCounts: Record<string, number>;
  totalProductsCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  inStockOnly,
  onToggleInStock,
  categoryCounts,
  totalProductsCount,
}) => {
  return (
    <div className="flex flex-col gap-4 py-2">
      {/* Category Segmented Controls & Sort Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All' ? totalProductsCount : categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] tabular-nums font-semibold px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls: In-Stock Toggle + Sort Dropdown */}
        <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
          {/* In-Stock Filter Checkbox */}
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none bg-white px-3 py-2 rounded-lg border border-slate-200">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onToggleInStock(e.target.checked)}
              className="w-3.5 h-3.5 rounded text-slate-900 accent-slate-900 cursor-pointer"
            />
            <span>In Stock Only</span>
          </label>

          {/* Sort Dropdown */}
          <div className="relative flex items-center bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
            <span className="text-slate-400 mr-1.5 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-transparent text-slate-800 font-medium focus:outline-none cursor-pointer pr-4"
              aria-label="Sort products"
            >
              <option value="featured">Featured First</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
              <option value="name-a-z">Product Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
