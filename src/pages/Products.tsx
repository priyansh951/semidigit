import { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Category } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLeadModal } from '../LeadContext';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { openModal } = useLeadModal();

  const categories: Category[] = ['All', 'Home', 'Industrial', 'Medical', 'Kitchen', 'Electronic'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">OUR PRODUCTS</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Intelligent connected devices engineered for performance and reliability across multiple industries.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-bold transition-all border',
                  activeCategory === cat 
                    ? 'bg-accent text-background border-accent' 
                    : 'bg-surface border-border-dim text-text-secondary hover:border-border-light'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-border-dim rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-surface border border-border-dim rounded-lg overflow-hidden hover:border-accent/30 transition-all"
              >
                <div className="aspect-video bg-surface-2 relative overflow-hidden">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-background/80 backdrop-blur-sm border border-border-dim text-[10px] font-bold uppercase tracking-widest rounded">
                        {product.category}
                      </span>
                   </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Key Features</div>
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-xs text-text-secondary flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => openModal(product.name)}
                      className="w-full bg-accent-2 text-background py-3 rounded-sm font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-text-secondary text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="text-accent font-bold mt-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

