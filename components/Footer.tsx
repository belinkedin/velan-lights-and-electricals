
import React from 'react';
import { Facebook, Instagram, Linkedin, ClipboardCheck, User, Calendar, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { COMPANY_INFO, IconMap } from '../constants';

export const Footer: React.FC = () => {
    const navigate = useNavigate();

    const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            // Simple navigation for now, can be improved to handle cross-page hash links
            navigate('/');
            setTimeout(() => {
                const targetId = href.replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    return (
        <footer id="contact" className="bg-slate-50 dark:bg-black pt-24 pb-12 text-slate-600 dark:text-slate-400 scroll-mt-24 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Column 1: Brand */}
                    <div className="space-y-8">
                        <div
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={(e) => handleNavClick(e, '#home')}
                        >
                            <div className="p-2.5 bg-amber-500 rounded-xl text-slate-900 shadow-lg shadow-amber-500/20 group-hover:bg-amber-600 transition-colors">
                                <IconMap.Zap size={28} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-none">VELAN</h1>
                                <p className="text-[10px] font-bold text-amber-500 tracking-[0.3em] uppercase">Lights & Electricals</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed font-light">
                            Premium electrical components, decorative lighting, and industrial piping solutions. Retailer and partner to Dindigul's finest builds.
                        </p>
                        <div className="flex items-center gap-5">
                            <a href="#" className="w-11 h-11 bg-slate-200 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Facebook size={20} /></a>
                            <a href="#" className="w-11 h-11 bg-slate-200 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Instagram size={20} /></a>
                            <a href="#" className="w-11 h-11 bg-slate-200 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Nav */}
                    <div className="space-y-8">
                        <h5 className="text-slate-900 dark:text-white font-black uppercase tracking-[0.2em] text-xs">Navigation</h5>
                        <ul className="space-y-4">
                            <li><button onClick={(e) => handleNavClick(e, '#home')} className="hover:text-amber-500 text-sm transition-colors font-medium">Home</button></li>
                            <li><button onClick={(e) => handleNavClick(e, '#categories')} className="hover:text-amber-500 text-sm transition-colors font-medium">Our Categories</button></li>
                            <li><button onClick={(e) => handleNavClick(e, '/gallery')} className="hover:text-amber-500 text-sm transition-colors font-medium">Gallery</button></li>
                            <li><button onClick={(e) => handleNavClick(e, '#about')} className="hover:text-amber-500 text-sm transition-colors font-medium">About Company</button></li>
                        </ul>
                    </div>

                    {/* Column 3: Business Details */}
                    <div className="space-y-8">
                        <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs">Business Details</h5>
                        <ul className="space-y-5">
                            <li className="flex gap-4">
                                <ClipboardCheck size={20} className="text-amber-500 flex-shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-500 uppercase">GST Registration</p>
                                    <p className="text-white text-sm font-medium">{COMPANY_INFO.gstNo}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <User size={20} className="text-amber-500 flex-shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-500 uppercase">Contact Person</p>
                                    <p className="text-white text-sm font-medium">{COMPANY_INFO.contactPerson}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Calendar size={20} className="text-amber-500 flex-shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-500 uppercase">Registered Date</p>
                                    <p className="text-white text-sm font-medium">{COMPANY_INFO.registrationDate}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-8">
                        <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs">Reach Us</h5>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <MapPin size={24} className="text-amber-500 flex-shrink-0" />
                                <p className="text-sm leading-relaxed text-slate-300">{COMPANY_INFO.address}</p>
                            </li>
                            <li className="flex gap-4">
                                <Phone size={24} className="text-amber-500 flex-shrink-0" />
                                <p className="text-sm text-slate-300 font-bold">{COMPANY_INFO.phone}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-xs font-medium">
                        © {new Date().getFullYear()} Velan Lights And Electricals. Retailer in Dindigul, Tamil Nadu.
                    </p>
                    <div className="flex gap-8 items-center">
                        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">
                            Partnering for Progress
                        </p>
                        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">
                            BIS Certified
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
