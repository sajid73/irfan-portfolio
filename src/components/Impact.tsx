import React from 'react'
import CountUp from '../utils/CountUp'
import { neuFlat } from '../utils/Neumorphic_Token'

export default function Impact({ stats }) {
    return (
        <section
            id="impact-stats"
            className="pt-8 md:pt-12 pb-16 md:pb-24 px-5 md:px-8 max-w-4xl mx-auto scroll-mt-24"
        >
            <div
                className={`p-8 md:p-16 rounded-[32px] md:rounded-[40px] ${neuFlat} border border-white/50 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12`}
            >
                <div className="flex flex-col items-center text-center w-full">
                    <span className="text-4xl md:text-5xl font-black text-emerald-700 tracking-tighter mb-2">
                        <CountUp end={stats.totalProjects} />
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">
                        Total Projects
                    </span>
                </div>

                <div className="hidden md:block w-px h-24 bg-slate-200" />
                <div className="block md:hidden h-px w-24 bg-slate-200" />

                <div className="flex flex-col items-center text-center w-full">
                    <span className="text-4xl md:text-5xl font-black text-emerald-700 tracking-tighter mb-2">
                        <CountUp end={stats.totalSqft} />
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 uppercase text-center max-w-[200px] leading-tight tracking-wide">
                        Total Square Feet
                        <br />
                        Designed
                    </span>
                </div>
            </div>
        </section>
    )
}
