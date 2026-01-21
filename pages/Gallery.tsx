
import React, { useState, useEffect } from 'react';
import { Search, Phone, ArrowRight, Filter, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, MOCK_PRODUCTS, IconMap } from '../constants';
import { Product } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';

export const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let result = MOCK_PRODUCTS;

        if (activeCategory !== 'all') {
            result = result.filter(p => p.category === activeCategory);
        }

        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery)
            );
        }

        setFilteredProducts(result);
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-12 pb-24 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                {/* Breadcrumbs / Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">
                        <span className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-500 flex items-center gap-1 transition-colors" onClick={() => navigate('/')}>
                            <HomeIcon size={14} /> Home
                        </span>
                        <ChevronRight size={14} />
                        <span className="text-slate-900 dark:text-white">Gallery</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <ScrollReveal animation="fade-right">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Product Gallery</h1>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={200}>
                                <p className="text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl">
                                    Browse our complete collection of premium lighting and electrical solutions.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-slate-200 dark:ring-white/10 focus:ring-2 focus:ring-amber-500 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-sm transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
                        <ScrollReveal animation="fade-in" delay={300} className="relative z-30">
                            <div className="bg-slate-50 dark:bg-stone-900/40 dark:backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-white/5 hover:border-amber-500/30 transition-all">
                                <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white/80 font-bold uppercase tracking-widest text-xs">
                                    <Filter size={16} className="text-amber-600 dark:text-amber-500" />
                                    Filter Categories
                                </div>
                                {/* Mobile Custom Dropdown */}
                                <div className="lg:hidden relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white font-bold text-sm shadow-sm active:scale-[0.99] transition-all"
                                    >
                                        <span>
                                            {activeCategory === 'all'
                                                ? 'All Products'
                                                : CATEGORIES.find(c => c.id === activeCategory)?.name}
                                        </span>
                                        <ChevronRight size={16} className={`transition-transform duration-300 ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-stone-900 border border-slate-200 dark:border-white/10 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('all');
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-3 text-sm font-bold transition-all flex items-center justify-between ${activeCategory === 'all'
                                                    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500'
                                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
                                                    }`}
                                            >
                                                <span>All Products</span>
                                                {activeCategory === 'all' && <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>}
                                            </button>
                                            {CATEGORIES.map(cat => (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => {
                                                        setActiveCategory(cat.id);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-3 text-sm font-bold transition-all flex items-center justify-between border-t border-slate-100 dark:border-white/5 ${activeCategory === cat.id
                                                        ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500'
                                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
                                                        }`}
                                                >
                                                    <span>{cat.name}</span>
                                                    {activeCategory === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Desktop List */}
                                <div className="hidden lg:block space-y-2">
                                    <button
                                        onClick={() => setActiveCategory('all')}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeCategory === 'all' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
                                    >
                                        <span>All Products</span>
                                        {activeCategory === 'all' && <div className="w-2 h-2 rounded-full bg-black"></div>}
                                    </button>
                                    {CATEGORIES.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeCategory === cat.id ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
                                        >
                                            <span>{cat.name}</span>
                                            {activeCategory === cat.id && <div className="w-2 h-2 rounded-full bg-black"></div>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Banner or Contact Card */}
                        <ScrollReveal animation="scale-up" delay={500}>
                            <div className="bg-slate-900 dark:bg-white/5 p-8 rounded-3xl text-white relative overflow-hidden border border-slate-800 dark:border-white/10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
                                <h4 className="text-xl font-bold mb-3 relative z-10 text-white">Need Custom Orders?</h4>
                                <p className="text-slate-400 text-sm mb-6 relative z-10">We handle bulk orders for commercial projects.</p>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors relative z-10"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </ScrollReveal>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredProducts.map((product, idx) => (
                                    <ScrollReveal key={product.id} animation="fade-up" delay={idx * 50}>
                                        <div className="group flex flex-col h-full bg-white dark:bg-white/5 p-4 rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2">
                                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-black/40 rounded-[1.5rem] mb-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100 dark:opacity-90 dark:group-hover:opacity-100 mix-blend-multiply dark:mix-blend-normal"
                                                />
                                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest shadow-lg border border-slate-100 dark:border-white/10">
                                                    {CATEGORIES.find(c => c.id === product.category)?.name}
                                                </div>
                                            </div>
                                            <div className="px-2 pb-2 flex-grow flex flex-col">
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-tight mb-2">
                                                    {product.name}
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                                    <p className="text-xl font-black text-slate-900 dark:text-white">₹{product.price.toLocaleString()}</p>
                                                    <button
                                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                                        className="w-10 h-10 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black dark:hover:text-black transition-all shadow-lg transform active:scale-95"
                                                    >
                                                        <ArrowRight size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 bg-slate-50 dark:bg-white/5 rounded-3xl border border-dashed border-slate-200 dark:border-white/10">
                                <div className="w-16 h-16 bg-white dark:bg-white/5 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4 shadow-sm">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">No products found</h3>
                                <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filters.</p>
                                <button
                                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                                    className="mt-6 px-6 py-2 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
