import React from 'react'
import { ArrowRight, Mail, Linkedin, Phone } from 'lucide-react'
import { neuButton } from '../utils/Neumorphic_Token'

export default function Hero({profile}) {
    return (
        <section id="about" className="pt-32 md:pt-52 pb-16 md:pb-32 px-5 md:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
                <div className="lg:col-span-7">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-[1.1]">
                        {profile.name}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 md:mb-12 leading-relaxed font-semibold">
                        {profile.tagline}
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                        <a
                            href="#key-projects"
                            className={`px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center gap-3 text-xs md:text-sm uppercase tracking-widest text-white bg-slate-900 shadow-[0_15px_30px_rgba(15,23,42,0.25)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.35)] transition-all hover:translate-y-[-3px] active:scale-95 group border border-slate-800`}
                        >
                            Key Projects{' '}
                            <ArrowRight
                                size={18}
                                className="text-emerald-500 group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <div className="flex gap-3 md:gap-4">
                            <a
                                href={`tel:${profile.phone}`}
                                className={`p-4 md:p-5 rounded-2xl flex items-center justify-center ${neuButton}`}
                                title="Call Now"
                            >
                                <Phone size={18} className="text-slate-700 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className={`p-4 md:p-5 rounded-2xl flex items-center justify-center ${neuButton}`}
                                title="Send Email"
                            >
                                <Mail size={18} className="text-slate-700 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 md:p-5 rounded-2xl flex items-center justify-center ${neuButton}`}
                                title="LinkedIn Profile"
                            >
                                <Linkedin size={18} className="text-slate-700 hover:text-emerald-600 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 relative flex justify-center mt-10 lg:mt-0">
                    <div className="absolute inset-0 bg-emerald-700 blur-[100px] md:blur-[120px] opacity-[0.05] rounded-full" />
                    <div
                        className={`w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] overflow-hidden relative z-10 shadow-[15px_15px_30px_#d9dadb,-15px_-15px_30px_#ffffff] md:shadow-[20px_20px_40px_#d9dadb,-20px_-20px_40px_#ffffff] rounded-[40px] md:rounded-[48px]`}
                    >
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            className="w-full h-full object-cover scale-105"
                            style={{ objectPosition: 'center 20%' }}
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
