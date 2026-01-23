
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Phone, ArrowRight, ClipboardCheck, Calendar, Sparkles, User, MapPin, ShieldCheck, Zap, Lightbulb, Layers, LayoutGrid, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, MOCK_PRODUCTS, SERVICES, IconMap, COMPANY_INFO } from '../constants';
import { SkeletonSection } from '../components/Skeleton';
import { Product } from '../types';
import { useTheme } from '../context/ThemeContext';
import { AutoScrollCarousel } from '../components/AutoScrollCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import { getAssetPath } from '../utils';

export const Home: React.FC = () => {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    // Helper to get one product per category
    const getOnePerCategory = (products: Product[]) => {
        const uniqueCategories = new Set();
        return products.filter(product => {
            if (uniqueCategories.has(product.category)) {
                return false;
            }
            uniqueCategories.add(product.category);
            return true;
        });
    };

    // Simulate initial data loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setFilteredProducts(getOnePerCategory(MOCK_PRODUCTS));
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            setFilteredProducts(getOnePerCategory(MOCK_PRODUCTS));
        } else {
            setFilteredProducts(MOCK_PRODUCTS.filter(p => p.category === categoryId));
        }
    };

    return (
        <main>
            {/* --- HERO SECTION --- */}
            <section id="home" className="relative min-h-[90vh] flex items-center bg-white dark:bg-black transition-colors duration-300">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen opacity-50 dark:opacity-30"></div>
                    <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen opacity-50 dark:opacity-30"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-40 dark:opacity-60"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 pb-12 lg:pt-16 lg:pb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <ScrollReveal animation="fade-down" delay={200}>
                                <span className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-500 font-bold text-xs uppercase tracking-widest">
                                    Premium Lighting & Electricals
                                </span>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={400}>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                                    Illuminating Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-300 dark:via-amber-500 dark:to-amber-600 animate-shine bg-[length:200%_auto]">Spaces with Elegance</span>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={600}>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                    From luxurious crystal chandeliers to industrial-grade cast iron pipes, Velan Lights and Electricals provides the best range of lighting and electrical products in Dindigul.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={800}>
                                <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                                    <button
                                        onClick={() => navigate('/gallery')}
                                        className="w-full sm:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white dark:text-slate-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1"
                                    >
                                        View Catalog
                                        <ArrowRight size={20} />
                                    </button>
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="w-full sm:w-auto px-10 py-5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl transition-all border border-slate-200 dark:border-slate-700 hover:border-amber-500/30"
                                    >
                                        Get a Quote
                                    </button>
                                </div>
                            </ScrollReveal>

                            {/* Hero Stats */}
                            <ScrollReveal animation="fade-up" delay={1000}>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-slate-800">
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">10+</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years Experience</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100%</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Delivery Success</p>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">BIS</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Certified Quality</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="hidden lg:block relative">
                            <ScrollReveal animation="scale-up" duration={1500}>
                                <img
                                    src={theme === 'dark' ? getAssetPath("images/hero-final-v2.jpg") : getAssetPath("images/hero-light.jpg")}
                                    alt="Elegant Crystal Chandelier"
                                    className={`relative z-10 w-full h-auto object-contain ${theme === 'dark' ? 'drop-shadow-2xl' : ''}`}
                                />
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TRUST BADGE STRIP --- */}
            <div className="bg-slate-50 dark:bg-stone-950 border-y border-slate-200 dark:border-white/5 py-8 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 dark:opacity-60">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400"><ClipboardCheck className="text-amber-500" /> <span className="font-bold text-slate-700 dark:text-slate-200">GST: {COMPANY_INFO.gstNo}</span></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400"><Calendar className="text-amber-500" /> <span className="font-bold text-slate-700 dark:text-slate-200">Est. {COMPANY_INFO.registrationDate}</span></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400"><User className="text-amber-500" /> <span className="font-bold text-slate-700 dark:text-slate-200">{COMPANY_INFO.contactPerson}</span></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400"><MapPin className="text-amber-500" /> <span className="font-bold text-slate-700 dark:text-slate-200">Dindigul, TN</span></div>
                    </div>
                </div>
            </div>

            {/* --- CATEGORIES SECTION --- */}
            <section id="categories" className="py-24 bg-white dark:bg-black scroll-mt-24 relative transition-colors duration-300">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-50"></div>
                <div className="container mx-auto px-4 md:px-6 text-center space-y-4 mb-16 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Product Categories</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        Explore our extensive range of high-quality electrical and lighting products tailored for every need.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                        {CATEGORIES.map((cat, idx) => {
                            const Icon = IconMap[cat.iconName] || IconMap.Zap;
                            return (
                                <ScrollReveal key={cat.id} animation="fade-up" delay={idx * 100}>
                                    <div
                                        onClick={() => navigate('/gallery')}
                                        className="group relative bg-slate-50 dark:bg-stone-900/40 dark:backdrop-blur-md p-4 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-amber-500/30 shadow-lg hover:shadow-amber-500/10 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-amber-500 mb-4 sm:mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all border border-slate-200 dark:border-white/10 group-hover:border-amber-500 shadow-sm">
                                            <Icon size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{cat.name}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 mb-6 transition-colors leading-relaxed">{cat.description}</p>
                                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                            Browse Gallery <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- FEATURED PRODUCTS SECTION --- */}
            <section id="products" className="py-24 bg-slate-50 dark:bg-stone-950 scroll-mt-24 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-3">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Collection</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg font-light">Premium range of chandeliers, LED lights, and industrial components.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => handleCategoryChange('all')}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${activeCategory === 'all' ? 'bg-amber-500 text-black' : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'}`}
                            >
                                All Products
                            </button>
                            {CATEGORIES.slice(0, 4).map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${activeCategory === cat.id ? 'bg-amber-500 text-black' : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'}`}
                                >
                                    {cat.name.split(' ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {isLoading ? (
                        <SkeletonSection />
                    ) : filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredProducts.map((product, idx) => (
                                <ScrollReveal key={product.id} animation="fade-up" delay={idx * 100}>
                                    <div className="group flex flex-col h-full bg-white dark:bg-white/5 rounded-[2.5rem] p-4 border border-slate-200 dark:border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-black/20 rounded-[2rem] mb-6">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100 dark:opacity-90 dark:group-hover:opacity-100 mix-blend-multiply dark:mix-blend-normal"
                                            />
                                            <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest shadow-xl border border-white/20 dark:border-white/10">
                                                {CATEGORIES.find(c => c.id === product.category)?.name}
                                            </div>
                                        </div>
                                        <div className="px-2 space-y-4 pb-4">
                                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-tight">
                                                {product.name}
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400 line-clamp-2 font-light leading-relaxed">{product.description}</p>
                                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/10 mt-auto">
                                                <div>
                                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Pricing From</p>
                                                    <p className="text-2xl font-black text-slate-900 dark:text-white">₹{product.price.toLocaleString()}</p>
                                                </div>
                                                <button
                                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black dark:hover:text-black transition-all shadow-lg transform hover:scale-105 active:scale-95"
                                                >
                                                    <Phone size={18} />
                                                    Enquire
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-slate-50 dark:bg-slate-50/5 rounded-[3rem] p-24 text-center border-2 border-dashed border-slate-200 dark:border-white/10">
                            <div className="w-24 h-24 bg-white dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-slate-300 dark:text-slate-600">
                                <Search size={48} />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-3">No matching items found</h4>
                            <p className="text-slate-500 mb-10 max-w-sm mx-auto font-light">We are constantly updating our inventory. Contact us for specific requirements.</p>
                            <button
                                onClick={() => handleCategoryChange('all')}
                                className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl"
                            >
                                View Full Catalog
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <ScrollReveal animation="fade-right">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Beyond Lighting</h3>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={200}>
                                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    <p>
                                        Established in 2019, <strong className="text-amber-600 dark:text-amber-500 font-bold">Velan Lights And Electricals</strong> has rapidly grown to become a trusted name in Dindigul for premium electrical solutions.
                                    </p>
                                    <p>
                                        We don't just sell products; we provide complete lighting and electrical solutions. From the initial consultation to the final delivery, we ensure every client receives personalized attention and top-tier quality.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <div className="grid sm:grid-cols-2 gap-6 mt-10">
                                {SERVICES.map((service, idx) => {
                                    const Icon = IconMap[service.iconName] || IconMap.Sparkles;
                                    return (
                                        <ScrollReveal key={idx} animation="fade-up" delay={300 + (idx * 100)}>
                                            <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0">
                                                    <Icon size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{service.title}</h5>
                                                    <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">{service.description}</p>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full"></div>
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <div className="space-y-6">
                                    <img src={getAssetPath("images/about-lights.png")} className="rounded-3xl shadow-2xl w-full h-auto object-cover" alt="Lights" />
                                    <img src={getAssetPath("images/about-cables.png")} className="rounded-3xl shadow-2xl w-full h-auto object-cover" alt="Cables" />
                                </div>
                                <div className="pt-12 space-y-6">
                                    <div className="bg-amber-500 p-8 rounded-3xl shadow-2xl text-white dark:text-slate-900">
                                        <p className="font-black text-5xl mb-2">12+</p>
                                        <p className="font-bold uppercase tracking-widest text-xs">Years of Trust</p>
                                    </div>
                                    <img src={getAssetPath("images/about-pipes.png")} className="rounded-3xl shadow-2xl w-full h-auto object-cover" alt="Pipes" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* --- PARTNERS CAROUSEL --- */}
            <section className="bg-slate-50 dark:bg-black py-10 transition-colors duration-300">
                <div className="container mx-auto px-4 mb-8 text-center">
                    <p className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-[0.2em]">Trusted By Leading Brands</p>
                </div>
                <AutoScrollCarousel
                    items={[
                        { id: '1', text: 'Finolex', icon: <Award size={20} /> },
                        { id: '2', text: 'Philips', icon: <Sparkles size={20} /> },
                        { id: '3', text: 'Legrand', icon: <ShieldCheck size={20} /> },
                        { id: '4', text: 'Crompton', icon: <Zap size={20} /> },
                        { id: '5', text: 'Havells', icon: <Lightbulb size={20} /> },
                        { id: '6', text: 'V-Guard', icon: <ShieldCheck size={20} /> },
                        { id: '7', text: 'Anchor', icon: <Zap size={20} /> },
                        { id: '8', text: 'Polycab', icon: <Layers size={20} /> },
                        { id: '9', text: 'GM Modular', icon: <LayoutGrid size={20} /> },
                        { id: '10', text: 'L&T', icon: <Award size={20} /> },
                    ]}
                />
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={getAssetPath("images/cta-bg.png")}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/80 dark:bg-black/80 backdrop-blur-[2px]"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <ScrollReveal animation="scale-up">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                Ready to Transform Your Space? <br />
                                <span className="text-amber-500">Electrical Retailer</span>
                            </h3>
                            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">
                                Bulk requirements or residential lighting – we handle it all with timely delivery and expert support.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-12 py-5 bg-amber-500 text-black font-black rounded-2xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 active:scale-95"
                                >
                                    Request a Quote
                                </button>
                                <a
                                    href={`tel:${COMPANY_INFO.phones[0]}`}
                                    className="px-12 py-5 bg-white/10 text-white font-black rounded-2xl hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md shadow-2xl transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                                >
                                    Contact {COMPANY_INFO.contactPerson}
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main >
    );
};
