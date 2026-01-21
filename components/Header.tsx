
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconMap, COMPANY_INFO } from '../constants';

import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
    // ... (existing state) ...
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // ... (scroll spy logic same as before) ...
    // Scroll Spy Logic
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveHash('');
            return;
        }

        const sections = ['home', 'categories', 'products', 'about', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top/middle
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHash(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    // Handle initial hash on load or navigation
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            setActiveHash(location.hash);
        } else if (location.pathname === '/' && !location.hash) {
            const handleScroll = () => {
                if (window.scrollY < 100) setActiveHash('#home');
            }
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [location]);

    const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (href.startsWith('#')) {
            setActiveHash(href);
            // If we are not on home, go to home then scroll
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const targetId = href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                }, 100);
            } else {
                // We are on home
                const targetId = href.replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        } else {
            // For route navigation (e.g. /gallery)
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    const NavLink = ({ href, children, mobile = false }: { href: string; children?: React.ReactNode; mobile?: boolean }) => {
        let isActive = false;

        if (href.startsWith('#')) {
            isActive = location.pathname === '/' && activeHash === href;
        } else {
            isActive = location.pathname === href;
        }

        return (
            <a
                href={href}
                className={`
                    ${mobile ? 'block py-3 text-lg font-semibold' : 'text-sm font-semibold'} 
                    ${isActive ? 'text-amber-500' : 'text-slate-600 dark:text-slate-300'} 
                    hover:text-amber-500 transition-colors duration-200 cursor-pointer
                `}
                onClick={(e) => handleNavClick(e, href)}
            >
                {children}
            </a>
        );
    };

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-slate-200 dark:border-white/5 h-20 animate-slide-down transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 group cursor-pointer"
                        onClick={(e) => handleNavClick(e, '/')}
                    >
                        <div className="p-2 bg-amber-500 rounded-lg text-white shadow-lg shadow-amber-500/30 group-hover:bg-amber-600 transition-all">
                            <IconMap.Zap size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none uppercase">VELAN</h1>
                            <p className="text-[9px] font-bold text-amber-500 tracking-[0.2em] uppercase">Lights & Electricals</p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#categories">Categories</NavLink>
                        <NavLink href="#products">Highlights</NavLink>
                        <NavLink href="/gallery">Full Gallery</NavLink>
                        <NavLink href="#about">About Us</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
                            onClick={(e) => handleNavClick(e, '#contact')}
                        >
                            <Phone size={16} />
                            <span>Enquire Now</span>
                        </button>
                        <button
                            className="md:hidden p-2 text-slate-400 bg-slate-100 dark:bg-white/5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 px-6 py-6 space-y-2 animate-fadeIn shadow-2xl transition-colors duration-300">
                    <NavLink href="#home" mobile>Home</NavLink>
                    <NavLink href="/gallery" mobile>Full Gallery</NavLink>
                    <NavLink href="#categories" mobile>Categories</NavLink>
                    <NavLink href="#products" mobile>Highlights</NavLink>
                    <NavLink href="#about" mobile>About Us</NavLink>
                    <NavLink href="#contact" mobile>Contact</NavLink>
                    <div className="pt-4">
                        <a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-amber-500 text-slate-900 rounded-xl text-base font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
                        >
                            <Phone size={18} />
                            <span>Call Us Directly</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};
