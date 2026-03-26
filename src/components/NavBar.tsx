import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { neuButton } from '../utils/Neumorphic_Token';

export default function NavBar({ scrolled, profile, navItems }) {
    const [activeTab, setActiveTab] = useState('About');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#f8f9fa]/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div
                className={`max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-4' : 'py-5 md:py-8'
                    }`}
            >
                <div className="flex flex-col truncate pr-2 z-20">
                    <span className="text-base md:text-xl font-extrabold tracking-tight text-slate-900 leading-none truncate">
                        {profile.name}
                    </span>
                    <span className="text-xs md:text-xl font-bold text-slate-400 mt-1">
                        {profile.title}
                    </span>
                </div>

                <div className="flex items-center gap-3 md:gap-6 z-20">
                    <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className={`hover:text-emerald-700 transition-colors ${activeTab === item ? 'text-emerald-700' : ''
                                    }`}
                                onClick={() => setActiveTab(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden lg:block bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-5 py-2.5 rounded-full text-[10px] tracking-tight hover:brightness-110 transition-all shadow-[0_0_15px_rgba(225,29,72,0.5)] hover:shadow-[0_0_25px_rgba(225,29,72,0.7)] animate-pulse hover:animate-none font-bold whitespace-nowrap"
                    >
                        আপনার বাড়ি কি ভূমিকম্প সহনীয়?
                    </a>

                    <div className="flex items-center gap-2 lg:hidden">
                        <a
                            href="#contact"
                            className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg animate-pulse flex-shrink-0"
                            title="Audit your building"
                        >
                            <span className="text-[10px] font-black">?</span>
                        </a>
                        <button
                            className={`p-2 rounded-xl flex-shrink-0 ${neuButton}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-8 px-6 flex flex-col gap-6 z-10 animate-in slide-in-from-top-2">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-700 active:scale-95 transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-slate-100">
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-6 py-4 rounded-2xl text-xs tracking-tight font-bold text-center block shadow-[0_10px_20px_rgba(225,29,72,0.3)]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            আপনার বাড়ি কি ভূমিকম্প সহনীয়?
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
