import { useRef } from 'react'
import { ChevronRight, ChevronLeft, Camera } from 'lucide-react';
import { neuButton, neuInset } from '../utils/Neumorphic_Token';

export default function Gallary({ gallery }) {
    const galleryRef = useRef<HTMLDivElement>(null);

    const scrollGallery = (direction: 'left' | 'right') => {
        if (galleryRef.current) {
            const { scrollLeft, clientWidth } = galleryRef.current;
            const scrollTo =
                direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            galleryRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    console.log(gallery)

    return (
        <section className="py-16 md:py-32 px-5 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-10 md:mb-16 flex justify-between items-end">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
                    Gallery
                </h2>
                <div className="flex gap-3 md:gap-4">
                    <button
                        onClick={() => scrollGallery('left')}
                        className={`p-3 md:p-4 rounded-xl ${neuButton}`}
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={18} className="md:w-5 md:h-5" />
                    </button>
                    <button
                        onClick={() => scrollGallery('right')}
                        className={`p-3 md:p-4 rounded-xl ${neuButton}`}
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={18} className="md:w-5 md:h-5" />
                    </button>
                </div>
            </div>

            <div
                ref={galleryRef}
                className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-6 px-2 md:px-4 snap-x snap-mandatory no-scrollbar"
            >
                {gallery.map((img, i) => (
                    <div
                        key={i}
                        className="min-w-[280px] sm:min-w-[320px] md:min-w-[450px] snap-center"
                    >
                        <div
                            className={`w-full relative group overflow-hidden bg-slate-100`}
                        >
                            <img
                                src={img.src}
                                alt={`Site Visit ${i + 1}`}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none'; // Hide image
                                    const sib = target.nextSibling as HTMLElement;
                                    if (sib) sib.style.display = 'flex'; // Show camera icon or fallback
                                }}
                            />
                            <div className="hidden absolute inset-0 items-center justify-center bg-slate-200/50">
                                <Camera size={40} className="text-slate-400 md:w-16 md:h-16" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
