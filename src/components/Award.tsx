import React from 'react'
import { neuFlat } from '../utils/Neumorphic_Token';
import { AwardItem, SuperscriptParts } from '../types';
import { Award as AwardIcon } from 'lucide-react';

const renderSuperscript = (parts: SuperscriptParts) => (
    <>
        {parts.base}
        <sup>{parts.sup}</sup>
        {parts.rest}
    </>
);

export default function Award({awards}) {
    return (
        <section id="awards" className="py-16 md:py-32 px-5 md:px-8 bg-[#f0f1f2]/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
                    <div className="lg:col-span-4">
                        <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-emerald-700 font-black mb-4 md:mb-6">
                            Competitions
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6 md:mb-8">
                            Awards and <br /> Achievements.
                        </h3>
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                            Validation through high-stakes national and international design competitions against
                            the brightest minds in structural engineering.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 md:gap-10">
                        {(awards as AwardItem[]).map((award, i) => (
                            <div
                                key={i}
                                className={`p-6 md:p-8 rounded-[32px] md:rounded-[40px] ${neuFlat} border border-white flex flex-col`}
                            >
                                <div className="w-full h-32 md:h-40 mb-5 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 relative group">
                                    <img
                                        src={award.img}
                                        alt={award.title}
                                        loading="lazy"
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-emerald-900/5 group-hover:bg-transparent transition-colors" />
                                </div>
                                <AwardIcon className="text-emerald-700 mb-3 md:mb-4" size={28} strokeWidth={1.5} />
                                <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase mb-2">
                                    {renderSuperscript(award.titleSuperscript)}
                                </h4>
                                <p className="text-[9px] md:text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-3 md:mb-4">
                                    {award.orgSuperscript ? renderSuperscript(award.orgSuperscript) : award.org}
                                </p>
                                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold flex-grow">
                                    {award.desc}
                                </p>
                                <span className="mt-4 md:mt-6 block text-[10px] md:text-xs font-black text-slate-300">
                                    {award.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
