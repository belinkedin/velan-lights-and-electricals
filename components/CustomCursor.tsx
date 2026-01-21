import React, { useState, useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
    // Use refs for direct DOM manipulation to avoid re-renders on every mousemove
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // State for visibility and device capability
    const [isVisible, setIsVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    // Track pointer state in a ref to avoid stale closures in event listeners
    // We only trigger re-renders for styling changes when purely necessary, 
    // or better yet, simply toggle classes directly for maximum peformance.
    const isPointerRef = useRef(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsEnabled(window.matchMedia('(min-width: 1024px)').matches);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    useEffect(() => {
        if (!isEnabled) return;

        const onMouseMove = (e: MouseEvent) => {
            // Direct DOM update for position (Zero React Render Cost)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }

            // Optimally check for pointer targets
            const target = e.target as HTMLElement;

            // Fast check first using tag names
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'LABEL' ||
                target.closest('button') !== null ||
                target.closest('a') !== null;

            // Only do expensive computed style check if fast check fails and we want to be thorough
            // or just rely on the fast check for 90% of cases to save performace.
            // Let's stick to the fast check + cursor property check only if needed.

            let finalIsPointer = isClickable;
            if (!finalIsPointer) {
                // Creating a "throttled" feel by only checking computed style occasionally would be complex,
                // but checking computed style on every frame is the bottleneck.
                // We can optimize by only checking if the target OBJECT has changed.
                const style = window.getComputedStyle(target);
                if (style.cursor === 'pointer') {
                    finalIsPointer = true;
                }
            }

            // Only update DOM if state actually changes
            if (isPointerRef.current !== finalIsPointer) {
                isPointerRef.current = finalIsPointer;

                // Toggle classes directly
                if (dotRef.current && ringRef.current) {
                    if (finalIsPointer) {
                        dotRef.current.classList.add('opacity-50', 'w-2', 'h-2');
                        dotRef.current.classList.remove('opacity-100', 'w-3', 'h-3');

                        ringRef.current.classList.add('opacity-100', 'w-12', 'h-12');
                        ringRef.current.classList.remove('opacity-0', 'w-0', 'h-0');
                    } else {
                        dotRef.current.classList.remove('opacity-50', 'w-2', 'h-2');
                        dotRef.current.classList.add('opacity-100', 'w-3', 'h-3');

                        ringRef.current.classList.remove('opacity-100', 'w-12', 'h-12');
                        ringRef.current.classList.add('opacity-0', 'w-0', 'h-0');
                    }
                }
            }

            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => {
            if (ringRef.current) {
                ringRef.current.classList.add('scale-75');
            }
        };

        const onMouseUp = () => {
            if (ringRef.current) {
                ringRef.current.classList.remove('scale-75');
            }
        };

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown, { passive: true });
        window.addEventListener('mouseup', onMouseUp, { passive: true });
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mouseenter', onMouseEnter);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mouseenter', onMouseEnter);
        };
    }, [isEnabled, isVisible]);

    if (!isEnabled) return null;

    return (
        <div
            ref={cursorRef}
            className={`fixed pointer-events-none z-[9999] top-0 left-0 mix-blend-difference will-change-transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        >
            {/* Main Dot */}
            <div
                ref={dotRef}
                className="rounded-full bg-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(251,191,36,0.6)] w-3 h-3 opacity-100"
            />

            {/* Expanding Ring */}
            <div
                ref={ringRef}
                className="rounded-full border border-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out w-0 h-0 opacity-0"
            />
        </div>
    );
};
