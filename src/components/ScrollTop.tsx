import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'
import { neuButton } from '../utils/Neumorphic_Token';

export default function ScrollTop({setScrolled}) {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 md:p-4 rounded-xl md:rounded-2xl ${neuButton} z-50 text-emerald-700 hover:scale-110 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300 shadow-lg`}
                    aria-label="Scroll to Top"
                >
                    <ChevronUp size={20} className="md:w-6 md:h-6" />
                </button>
            )}
        </>
    )
}
