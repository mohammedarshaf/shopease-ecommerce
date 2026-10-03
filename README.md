# ShopEase – E-Commerce Product Catalog
> **Full-Stack Web Development Capstone Project**  
> Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **React Router v7**, and **LocalStorage**.

---

## 📌 Project Overview

**ShopEase** is a production-ready, responsive e-commerce web application engineered to demonstrate modern frontend architecture, declarative client-side routing, modular component decomposition, and client-side persistence.

### Key Highlights
- **Dynamic Product Catalog**: 16 realistic items across 4 distinct categories (Electronics, Fashion, Accessories, Home Appliances).
- **Search & Multi-Facet Filtering**: Real-time name/description search, category-based segmented tabs, price range slider, in-stock toggle, and 5-way sorting (Price, Rating, Name, Featured).
- **Contiguous Purchase Flow**: Dedicated product details with photo gallery, color/variant selections, quantity controls, specifications sheet, and real-time inventory checks.
- **Persistent Shopping Cart**: Full cart management (add, remove, quantity update, promo code discount engine, sales tax computation, free shipping threshold indicator) synchronized with `LocalStorage`.
- **Checkout Modal**: Complete customer shipping address form with real-time validation and order confirmation receipt generation.
- **Performance Optimized**: Route-based code splitting using `React.lazy()` and `Suspense`, optimized lazy-loaded photography, zero layout shifts, and WCAG AA accessibility compliance.
- **College Capstone Ready**: Clear separation of concerns, beginner-friendly typed code, explanatory inline documentation, and zero deprecated dependencies.

---

## 🗂 Complete Project Folder Structure

```
shopease-catalog/
├── index.html                     # HTML5 entry point with Google Fonts & OpenGraph meta
├── metadata.json                  # Application metadata & capabilities
├── package.json                   # Project scripts and npm dependencies
├── tsconfig.json                  # TypeScript compiler options
├── vercel.json                    # Vercel SPA routing rewrites configuration
├── vite.config.ts                 # Vite bundler build optimization & path aliases
├── src/
│   ├── main.tsx                   # React 19 root DOM hydration
│   ├── App.tsx                    # Top-level routing, React.lazy code splitting, Providers
│   ├── index.css                  # Global Tailwind CSS directives & typography rules
│   │
│   ├── assets/                    # Photorealistic product images & media assets
│   │   └── images/
│   │       ├── hero_shopease_lifestyle_*.jpg
│   │       ├── cat_electronics_audio_*.jpg
│   │       ├── cat_home_lamp_*.jpg
│   │       ├── cat_fashion_jacket_*.jpg
│   │       ├── cat_acc_leather_*.jpg
│   │       ├── prod_smartwatch_*.jpg
│   │       ├── prod_espresso_*.jpg
│   │       ├── prod_sunglasses_*.jpg
│   │       └── prod_sneakers_*.jpg
│   │
│   ├── components/                # Reusable UI component library
│   │   ├── Navbar.tsx             # 3-zone Top Bar with responsive mobile drawer & cart counter
│   │   ├── Footer.tsx             # Brand footer, newsletter form with validation, guarantees
│   │   ├── ProductCard.tsx        # Product card with hover effects, rating, quick-add
│   │   ├── ProductList.tsx        # Responsive grid layout with empty state handling
│   │   ├── SearchBar.tsx          # Real-time search bar with clear button
│   │   ├── CategoryFilter.tsx     # Segmented category tabs, sort dropdown, in-stock toggle
│   │   ├── CartItem.tsx           # Cart line item with stepper, line subtotal, removal
│   │   ├── CheckoutModal.tsx      # Multi-step checkout modal with address validation & receipt
│   │   ├── ScrollToTop.tsx        # Automatic viewport scroll restoration upon route transition
│   │   ├── PageLoader.tsx         # Suspense fallback skeleton indicator
│   │   └── ToastContainer.tsx     # Animated feedback notifications for cart and discounts
│   │
│   ├── context/
│   │   └── CartContext.tsx        # Centralized state management with LocalStorage sync
│   │
│   ├── data/
│   │   └── products.ts            # Realistic product database (16 items, specs, pricing)
│   │
│   ├── pages/                     # Routed view components
│   │   ├── HomePage.tsx           # Hero campaign banner, popular categories, featured grid
│   │   ├── ProductsPage.tsx       # Search, filter toolbar, price slider, and product grid
│   │   ├── ProductDetailsPage.tsx # Sticky gallery, variant picker, specs table, related items
│   │   ├── CartPage.tsx           # Cart list, shipping progress bar, promo codes, checkout
│   │   ├── AboutPage.tsx          # Brand story, core values, Capstone engineering specs
│   │   ├── ContactPage.tsx        # Validated customer inquiry form, office channels, FAQ
│   │   └── NotFoundPage.tsx       # Graceful 404 fallback page
│   │
│   └── types/
│       └── product.ts             # TypeScript interfaces for Product, CartItem, Filters
```

---

## 🚀 How the Application Works

### 1. State Management & LocalStorage Persistence (`src/context/CartContext.tsx`)
The `CartProvider` wraps the entire application tree. It initializes state from `localStorage.getItem('shopease_cart_v1')`:
- When a user adds an item or adjusts quantities, the cart state updates and immediately persists back to `localStorage`.
- Changes persist across page refreshes, tab closures, and navigation events.
- Calculates derived values in real time: `totalItems`, `subtotal`, `shipping` ($0 for orders $\ge \$100$), `tax` (7%), and `grandTotal`.
- Handles coupon validation (`SHOPEASE15` grants 15% discount; `WELCOME10` grants 10%).

### 2. Client-Side Routing (`src/App.tsx`)
Using `react-router-dom`:
- `/`: Home page showcasing hero banner, categories, and featured products.
- `/products`: Full searchable and filterable product catalog.
- `/product/:id`: Individual product detail page reading the `:id` parameter from URL.
- `/cart`: Interactive shopping bag with quantity updates, coupon entry, and checkout.
- `/about`: Company ethos and technical architecture documentation.
- `/contact`: Contact form with real-time validation and customer service FAQ.
- `*`: 404 error catch-all.

### 3. Route-Based Performance Optimization
Every page is imported lazily:
```typescript
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage }))
);
```
Bundles are split into lightweight chunks downloaded on demand, accelerating initial page load.

---

## 🛠 Installation & Local Development Instructions

### Prerequisites
- Node.js (version 18.0 or higher recommended)
- npm or yarn

### Step-by-Step Setup
1. **Clone or download the project repository**:
   ```bash
   git clone https://github.com/your-username/shopease-ecommerce.git
   cd shopease-ecommerce
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Verify TypeScript & Linting**:
   ```bash
   npm run lint
   ```

5. **Generate an optimized production build**:
   ```bash
   npm run build
   ```

---

## 📤 GitHub Upload Instructions

To upload your Capstone project to GitHub:

```bash
# 1. Initialize git repository (if not already done)
git init

# 2. Add all project files
git add .

# 3. Commit your changes
git commit -m "Initial commit: ShopEase E-Commerce Capstone Project"

# 4. Rename main branch
git branch -M main

# 5. Link to your remote GitHub repository
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/shopease-catalog.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Vercel Deployment Instructions

Deploying **ShopEase** on [Vercel](https://vercel.com) takes under 2 minutes:

### Option A: Via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your imported `shopease-catalog` GitHub repository.
4. Leave the Framework Preset as **Vite**.
5. The build settings will automatically populate:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.
7. Because `vercel.json` contains the SPA rewrite rule (`/(.*) -> /index.html`), refreshing any sub-route (e.g. `/products` or `/cart`) will work seamlessly without 404 errors!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🎓 Capstone Grading Criteria Alignment

| Project Objective | Implementation Location | Verified Functionality |
| :--- | :--- | :--- |
| **Modular React Architecture** | `src/components/`, `src/pages/` | Separated into reusable, single-responsibility components |
| **Client-Side Routing** | `src/App.tsx` | Instant page switches without page reload via React Router |
| **Search & Filtering** | `src/pages/ProductsPage.tsx` | Real-time text search, category tabs, price slider, sorting |
| **Product Details View** | `src/pages/ProductDetailsPage.tsx` | Route param `:id`, specs table, variant selection, stock check |
| **Shopping Cart & LocalStorage**| `src/context/CartContext.tsx` | Auto-saving cart, steppers, promo codes, tax, threshold math |
| **Form Validation** | `src/pages/ContactPage.tsx` | Name, email regex, message character constraints |
| **Production Build Readiness** | `vite.config.ts`, `vercel.json` | Clean build with zero TypeScript errors and SPA rewrites |

---

© 2026 ShopEase. Built for the Full-Stack Web Development Capstone Examination.
