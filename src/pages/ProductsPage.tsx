import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { SortOption } from '../types/product';
import { ProductList } from '../components/ProductList';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initial category from URL or 'All'
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(350);

  // Sync category state when URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat as any)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      if (cat === 'All') {
        counts[cat] = PRODUCTS.length;
      } else {
        counts[cat] = PRODUCTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchTag = product.tagline.toLowerCase().includes(query);
        const matchCategory = product.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchTag && !matchCategory) {
          return false;
        }
      }

      // 3. In stock only filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      // 4. Max price filter
      if (product.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low-high':
          return a.price - b.price;
        case 'price-high-low':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name-a-z':
          return a.name.localeCompare(b.name);
        case 'featured':
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });
  }, [selectedCategory, searchQuery, inStockOnly, maxPrice, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setInStockOnly(false);
    setMaxPrice(350);
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    searchQuery.trim() !== '' ||
    inStockOnly ||
    maxPrice < 350 ||
    sortBy !== 'featured';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          <span>Products Catalog</span>
          <span>·</span>
          <span>Curated Modern Collection</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="mt-1 text-sm text-slate-500 max-w-xl">
              Browse our masterfully crafted selection of lifestyle tech, premium apparel, accessories, and home goods.
            </p>
          </div>

          <div className="w-full md:w-80">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products, keywords..."
            />
          </div>
        </div>
      </div>

      {/* Filter and Sorting Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          sortBy={sortBy}
          onSortChange={setSortBy}
          inStockOnly={inStockOnly}
          onToggleInStock={setInStockOnly}
          categoryCounts={categoryCounts}
          totalProductsCount={PRODUCTS.length}
        />

        {/* Secondary Filter Bar: Price Slider & Active Filters Tags */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          {/* Price Range Slider */}
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-600 shrink-0">Max Price:</span>
            <input
              type="range"
              min="20"
              max="350"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-32 sm:w-40 accent-slate-900 cursor-pointer"
            />
            <span className="font-semibold text-slate-900 tabular-nums min-w-[50px]">
              ${maxPrice}
            </span>
          </div>

          {/* Result Count and Reset Action */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <span className="text-slate-500">
              Showing <span className="font-semibold text-slate-900 tabular-nums">{filteredProducts.length}</span> of {PRODUCTS.length} items
            </span>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product List Grid */}
      <ProductList
        products={filteredProducts}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
};
