import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-in-right' | 'slide-in-left';
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 1000,
    className = '',
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const getInitialStyle = () => {
        const base = `transition-all ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform`;

        switch (animation) {
            case 'fade-up':
                return `${base} translate-y-12 opacity-0`;
            case 'fade-in':
                return `${base} opacity-0`;
            case 'scale-up':
                return `${base} scale-95 opacity-0`;
            case 'slide-in-right':
                return `${base} translate-x-12 opacity-0`;
            case 'slide-in-left':
                return `${base} -translate-x-12 opacity-0`;
            default:
                return `${base} opacity-0`;
        }
    };

    const getVisibleStyle = () => {
        switch (animation) {
            case 'fade-up':
                return 'translate-y-0 opacity-100';
            case 'fade-in':
                return 'opacity-100';
            case 'scale-up':
                return 'scale-100 opacity-100';
            case 'slide-in-right':
                return 'translate-x-0 opacity-100';
            case 'slide-in-left':
                return 'translate-x-0 opacity-100';
            default:
                return 'opacity-100';
        }
    };

    return (
        <div
            ref={ref}
            className={`${getInitialStyle()} ${isVisible ? getVisibleStyle() : ''} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};
