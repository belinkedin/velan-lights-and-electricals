import React from 'react';

interface AutoScrollCarouselProps {
    items: {
        id: string;
        text?: string;
        icon?: React.ReactNode;
        image?: string;
    }[];
    speed?: number;
}

export const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({ items }) => {
    // Duplicate items to create seamless loop
    const carouselItems = [...items, ...items, ...items, ...items];

    return (
        <div className="w-full relative overflow-hidden py-10 bg-slate-50 dark:bg-white/5 border-y border-slate-200 dark:border-white/5">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
                {carouselItems.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="flex items-center gap-4 mx-8 text-slate-400 dark:text-slate-500 font-bold text-xl uppercase tracking-widest hover:text-amber-500 dark:hover:text-gold transition-colors cursor-default"
                    >
                        {item.icon && <span className="text-amber-500 dark:text-gold">{item.icon}</span>}
                        {item.image && (
                            <img src={item.image} alt={item.text} className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                        )}
                        {item.text && <span>{item.text}</span>}

                        {/* Dot separator */}
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 ml-8"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
