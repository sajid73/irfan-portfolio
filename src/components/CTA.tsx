import React from 'react'
import { Target } from 'lucide-react'

export default function CTA({ profile }) {
    return (
        <section id="contact" className="py-16 md:py-32 px-5 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="p-8 md:p-20 rounded-[40px] md:rounded-[64px] bg-slate-900 shadow-[0_20px_40px_rgba(15,23,42,0.2)] md:shadow-[0_30px_60px_rgba(15,23,42,0.2)] flex flex-col items-center text-center gap-8 md:gap-10 border border-slate-800 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-20 -left-20 md:-bottom-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />

                    <div className="space-y-4 max-w-3xl relative z-10">
                        <p className="text-base md:text-2xl text-slate-300 font-medium leading-relaxed">
                            অতিরিক্ত রড মানেই ভবন নিরাপদ নয়।{' '}
                            <br className="hidden md:block" />
                            সঠিক ইঞ্জিনিয়ারিং ছাড়া আপনার{' '}
                            <span className="text-white font-bold">ভবনের স্থায়িত্ব এবং নির্মাণ ব্যয়</span>—উভয়ই{' '}
                            <span className="text-red-500 font-black uppercase">হুমকির</span> মুখে।
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-5 md:gap-6 relative z-10 w-full">
                        <a
                            href={profile.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-4 md:px-12 md:py-7 rounded-2xl md:rounded-3xl font-black text-white text-base md:text-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 shadow-[0_15px_30px_rgba(225,29,72,0.4)] md:shadow-[0_20px_50px_rgba(225,29,72,0.5)] flex items-center justify-center gap-3 md:gap-5 transition-all hover:scale-105 active:scale-95 border border-red-400/30 group"
                        >
                            <Target
                                size={20}
                                className="group-hover:rotate-12 transition-transform md:w-7 md:h-7"
                            />
                            Request Design Audit
                        </a>
                        <p className="text-xs md:text-sm text-slate-400 font-medium italic px-4">
                            নির্মাণের আগেই নিশ্চিত হোন: আপনার ভবনের ডিজাইন কি সাশ্রয়ী ও নিরাপদ?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
