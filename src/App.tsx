import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Target,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  Cpu,
  ShieldCheck,
  X,
  ChevronRight,
  MapPin,
  FileCheck2,
  ChevronLeft,
  ChevronUp,
  Globe,
  Camera
} from 'lucide-react';
import data from '../metadata.json';
import NavBar from './components/NavBar';
import CountUp from './utils/CountUp';
import type {
  SuperscriptParts,
  AwardItem,
  Qualification,
  Project,
} from './types';
import Award from './components/Award';
import { neuFlat, neuInset, neuButton } from './utils/Neumorphic_Token'
import CTA from './components/CTA';
import Gallary from './components/Gallary';
import ScrollTop from './components/ScrollTop';
import Hero from './components/Hero';
import Impact from './components/Impact';
// import { achievement1, achievement2, autocad, bnbc1, bnbc2, bnbc2020, etabs, ramConn, revit, safe, sap2000, struc1, struc2, struc3, struc4, struc5, proj1, proj2, proj3, projsup1, projsup2, projsup3, projsup4 } from './assets/images/index'


// ─── App ─────────────────────────────────────────────────────────────────────

const App = () => {
  const {
    profile,
    stats,
    navItems,
    projects,
    expertises,
    awards,
    gallery,
    qualifications,
    footer,
  } = data;


  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }

      if (!selectedProject) return;

      const currentIndex = projects.findIndex((p) => p.title === selectedProject.title);
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setSelectedProject(projects[prevIndex] as Project);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex] as Project);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, projects]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans selection:bg-emerald-100 overflow-x-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <NavBar scrolled={scrolled} profile={profile} navItems={navItems} />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <Hero profile={profile} />

      {/* ── Impact Stats ───────────────────────────────────────────────── */}
      <Impact stats={stats} />

      {/* ── Key Projects ───────────────────────────────────────────────── */}
      <section id="key-projects" className="py-16 md:py-32 px-5 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 tracking-[0.5em] mb-4">
            Evidence of Competency
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 text-center uppercase tracking-tighter leading-none">
            Key <span className="text-emerald-700">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(p as Project)}
              className={`p-6 md:p-8 rounded-[32px] md:rounded-[40px] transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(4,120,87,0.15)] active:scale-95 cursor-pointer group relative overflow-hidden ${neuFlat} border border-white/50 flex flex-col justify-between`}
            >
              <div>
                <div className="mb-4 relative z-10">
                  <span className="text-[8px] md:text-[9px] font-black text-emerald-800 uppercase tracking-widest px-3 py-1.5 rounded-full bg-emerald-100/90 shadow-sm border border-emerald-200/50 inline-block">
                    {p.type}
                  </span>
                </div>

                <div className="relative w-full h-40 md:h-52 mb-6 rounded-2xl md:rounded-3xl overflow-hidden border border-white shadow-sm z-10 bg-slate-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h4 className="text-lg md:text-xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight relative z-10 group-hover:text-emerald-800 transition-colors duration-300">
                  {p.title}
                </h4>
              </div>

              <div className="space-y-3 md:space-y-4 pt-5 md:pt-6 border-t border-slate-200/60 relative z-10">
                {[
                  { label: 'Location', value: p.location, icon: <MapPin size={10} className="text-emerald-600" /> },
                  { label: 'Built-up Area', value: p.area },
                  { label: 'Frame Type', value: p.frameType },
                  { label: 'Foundation', value: p.foundationType },
                  { label: 'Current Phase', value: p.phase, emerald: true },
                ].map(({ label, value, icon, emerald }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[9px] md:text-[10px] uppercase text-slate-400 font-black tracking-widest">
                      {label}
                    </span>
                    <span
                      className={`text-[10px] md:text-xs font-bold text-right flex items-center justify-end gap-1 ${emerald ? 'text-emerald-700' : 'text-slate-700'
                        }`}
                    >
                      {icon}
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out z-0 pointer-events-none" />
            </div>
          ))}

          {/* Many More */}
          <div
            className={`p-6 md:p-8 rounded-[32px] md:rounded-[40px] transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(4,120,87,0.15)] active:scale-95 cursor-pointer group relative overflow-hidden ${neuFlat} border border-white/50 flex flex-col items-center justify-center text-center min-h-[250px] md:min-h-[300px]`}
          >
            <h4 className="text-xl md:text-2xl font-black text-slate-400 uppercase tracking-widest group-hover:text-emerald-700 transition-colors duration-300">
              Many More Projects.....
            </h4>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out z-0 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Qualifications & Experiences ───────────────────────────────── */}
      <section id="qualifications" className="py-16 md:py-24 px-5 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 md:mb-20 text-center tracking-tighter">
          Qualifications & <span className="text-emerald-700">Experiences</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-3 md:left-8 top-8 bottom-8 w-[2px] bg-slate-200" />

          {(qualifications as Qualification[]).map((q) => {
            const dotBg =
              q.dotColor === 'emerald'
                ? 'bg-emerald-700'
                : q.dotColor === 'slate-light'
                  ? 'bg-slate-300'
                  : 'bg-slate-400';

            return (
              <div key={q.id} className="relative pl-10 md:pl-20 mb-10 md:mb-12 last:mb-0">
                <div
                  className={`absolute left-[4px] md:left-[25px] top-6 md:top-8 w-4 h-4 ${dotBg} rounded-full ring-[6px] ring-[#f8f9fa] shadow-sm z-10`}
                />

                {q.type === 'education' ? (
                  <div className="p-6 md:p-10 rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-emerald-50/50 to-white shadow-sm relative border border-white hover:shadow-md transition-shadow">
                    <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2">{q.title}</h3>
                    <p className="text-xs md:text-sm font-bold text-emerald-700 uppercase tracking-widest mb-6">
                      {q.institution}
                    </p>
                    <div className="border-t border-slate-200/60 pt-5 md:pt-6 space-y-3">
                      {q.details.map((d, i) => (
                        <p
                          key={i}
                          className="text-xs md:text-sm text-slate-600 font-medium flex items-start gap-3"
                        >
                          <span className="text-emerald-700 font-black mt-0.5">⦿</span>
                          <span>
                            {d.label && <strong className="text-slate-800">{d.label}: </strong>}
                            {d.value}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : q.type === 'membership' ? (
                  <div
                    className={`p-6 md:p-10 rounded-[28px] md:rounded-[32px] ${neuFlat} relative border border-white/50 hover:shadow-md transition-shadow`}
                  >
                    <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2">{q.title}</h3>
                    <p className="text-xs md:text-sm font-bold text-emerald-700 uppercase tracking-widest mb-2">
                      {q.institution}
                    </p>
                    <p className="text-[10px] md:text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em]">
                      Membership No: {q.membershipNo}
                    </p>
                  </div>
                ) : (
                  <div
                    className={`p-6 md:p-10 rounded-[28px] md:rounded-[32px] ${neuFlat} relative border border-white/50 hover:shadow-md transition-shadow`}
                  >
                    {q.period && (
                      <div className="absolute top-6 right-6 bg-white text-red-500 px-3 py-1 rounded text-[9px] font-bold uppercase tracking-[0.2em] hidden sm:block shadow-sm">
                        {q.period}
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-2">
                      <h3 className="text-lg md:text-2xl font-black text-slate-900">{q.title}</h3>
                      {q.badge && (
                        <span
                          className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest ${q.badge.variant === 'emerald'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-200 text-slate-600'
                            }`}
                        >
                          {q.badge.label}
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm font-bold text-emerald-700 uppercase tracking-widest mb-1">
                      {q.institution}
                    </p>
                    {q.subInstitution && (
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                        {q.subInstitution}
                      </p>
                    )}
                    <div className="border-t border-slate-200/60 pt-5 md:pt-6 space-y-3">
                      {q.details.map((d, i) => (
                        <p
                          key={i}
                          className="text-xs md:text-sm text-slate-600 font-medium flex items-start gap-3"
                        >
                          <span className="text-slate-400 font-black mt-0.5">⦿</span>
                          <span>{d.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Expertises ─────────────────────────────────────────────────── */}
      <section
        id="expertises"
        className="py-16 md:py-32 px-5 md:px-8 max-w-7xl mx-auto scroll-mt-24"
      >
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 tracking-[0.5em] mb-4">
            Technical Proficiency
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            My <span className="text-emerald-700">Expertises</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Core */}
          <div
            className={`p-8 md:p-10 rounded-[32px] md:rounded-[45px] ${neuFlat} border border-white/50 relative overflow-hidden group`}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="mb-6 md:mb-8 flex items-center gap-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-emerald-700 ${neuInset}`}>
                <Building2 size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">
                Core Expertise
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-5">
              {expertises.core.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm md:text-base text-slate-600 font-bold group-hover:translate-x-1 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Softwares */}
          <div
            className={`p-8 md:p-10 rounded-[32px] md:rounded-[45px] ${neuFlat} border border-white/50 relative overflow-hidden group`}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="mb-6 md:mb-8 flex items-center gap-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-emerald-700 ${neuInset}`}>
                <Cpu size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">
                Softwares
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {expertises.softwares.map((item, i) => (
                <div
                  key={i}
                  className={`md:p-4 rounded-xl md:rounded-2xl ${neuInset} flex flex-col items-center justify-center text-center gap-2 md:gap-3 group/soft`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain p-2 filter"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* <span className="text-[8px] md:text-[9px] font-black text-slate-800 uppercase tracking-tight">
                    {item.name}
                  </span> */}
                </div>
              ))}
            </div>
          </div>

          {/* Codes */}
          <div
            className={`p-8 md:p-10 rounded-[32px] md:rounded-[45px] ${neuFlat} border border-white/50 relative overflow-hidden group`}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="mb-6 md:mb-8 flex items-center gap-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-emerald-700 ${neuInset}`}>
                <FileCheck2 size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                Building code / compliance
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {expertises.codes.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group/code">
                  <div
                    className={`w-full aspect-[3/4] rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-transform duration-300 group-hover/code:scale-105 group-hover/code:shadow-md ${neuInset}`}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black text-slate-800 uppercase tracking-tight text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ─────────────────────────────────────────────────────── */}
      <Award awards={awards} />

      {/* ── Contact / CTA ──────────────────────────────────────────────── */}
      <CTA profile={profile} />

      {/* ── Gallery ────────────────────────────────────────────────────── */}
      <Gallary gallery={gallery} />

      {/* Scroll to top */}
      {/* {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 md:p-4 rounded-xl md:rounded-2xl ${neuButton} z-50 text-emerald-700 hover:scale-110 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300 shadow-lg`}
          aria-label="Scroll to Top"
        >
          <ChevronUp size={20} className="md:w-6 md:h-6" />
        </button>
      )} */}
      <ScrollTop setScrolled={setScrolled} />

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm"
          >
            {/* Navigation Buttons (Desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = projects.findIndex((p) => p.title === selectedProject.title);
                setSelectedProject(projects[(idx - 1 + projects.length) % projects.length] as Project);
              }}
              className={`fixed left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full ${neuButton} z-[110] text-slate-700 hover:text-emerald-700 hidden md:flex`}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = projects.findIndex((p) => p.title === selectedProject.title);
                setSelectedProject(projects[(idx + 1) % projects.length] as Project);
              }}
              className={`fixed right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full ${neuButton} z-[110] text-slate-700 hover:text-emerald-700 hidden md:flex`}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] md:rounded-[48px] ${neuFlat} border border-white p-6 md:p-10 no-scrollbar`}
            >
              <div className="flex justify-between items-center mb-6 md:mb-8 sticky top-0 bg-[#f8f9fa]/80 backdrop-blur-sm z-20 py-2 -mx-2 px-2 rounded-xl">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const idx = projects.findIndex((p) => p.title === selectedProject.title);
                      setSelectedProject(projects[(idx - 1 + projects.length) % projects.length] as Project);
                    }}
                    className={`p-2 rounded-xl ${neuButton} text-slate-500 md:hidden`}
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => {
                      const idx = projects.findIndex((p) => p.title === selectedProject.title);
                      setSelectedProject(projects[(idx + 1) % projects.length] as Project);
                    }}
                    className={`p-2 rounded-xl ${neuButton} text-slate-500 md:hidden`}
                    aria-label="Next project"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-xl ${neuButton} text-slate-500 hover:text-red-500 transition-colors`}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                <div className="rounded-3xl overflow-hidden border border-white shadow-sm h-64 lg:h-full min-h-[300px]">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-200/50 inline-block">
                      {selectedProject.type}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
                    {selectedProject.title}
                  </h2>

                  <div className="space-y-4 border-t border-slate-200/60 pt-8">
                    {[
                      {
                        label: 'Location',
                        value: selectedProject.location,
                        icon: <MapPin size={14} className="text-emerald-600" />,
                      },
                      { label: 'Built-up Area', value: selectedProject.area },
                      { label: 'Frame Type', value: selectedProject.frameType },
                      { label: 'Foundation', value: selectedProject.foundationType },
                      { label: 'Current Phase', value: selectedProject.phase, emerald: true },
                    ].map(({ label, value, icon, emerald }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span className="text-[10px] md:text-xs uppercase text-slate-400 font-black tracking-widest">
                          {label}
                        </span>
                        <span
                          className={`text-xs md:text-sm font-bold text-right flex items-center justify-end gap-2 ${emerald ? 'text-emerald-700' : 'text-slate-700'
                            }`}
                        >
                          {icon}
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">

            {/* Services */}
            <div>
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-emerald-700">
                  Need Support?
                </h4>
                <a
                  href={`tel:${profile.phone}`}
                  className={`p-2 rounded-lg flex items-center justify-center ${neuButton} text-emerald-700 hover:scale-110 transition-transform`}
                  title="Call Now"
                >
                  <Phone size={14} />
                </a>
              </div>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                {footer.services.map((item) => (
                  <li key={item} className="hover:text-emerald-700 transition-colors cursor-default">
                    {item}
                  </li>
                ))}
                <li className="pt-4 max-w-[200px]">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-4 py-2.5 rounded-full text-[9px] md:text-[10px] tracking-tight hover:brightness-110 transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)] animate-pulse hover:animate-none font-bold text-center block"
                  >
                    আপনার ডিজাইন চেক করুন
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-emerald-700 mb-6 md:mb-10">
                Quick contact
              </h4>
              <div className="space-y-6 md:space-y-8">
                {[
                  { label: 'Contact:', value: footer.contact.phone },
                  { label: 'Email address:', value: footer.contact.email },
                  { label: 'Chattogram office:', value: footer.contact.chattogramOffice },
                  { label: 'Corporate office:', value: footer.contact.corporateOffice },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-xs font-bold text-slate-500 tracking-tight">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div className="sm:col-span-1">
              <h4 className="text-xs text-center md:text-sm font-black uppercase tracking-[0.3em] text-emerald-700 mb-6 md:mb-10">
                Affiliations
              </h4>
              <div className="flex flex-row gap-6 md:gap-8">
                {footer.affiliations.map((aff) => (
                  <a
                    key={aff.name}
                    href={aff.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-105 active:scale-95 group min-w-[80px] sm:min-w-[100px] md:min-w-[120px] mx-auto"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={aff.img}
                        alt={aff.name}
                        className="w-full h-auto object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none'; // Hide the image
                          const txt = document.createElement('span');
                          txt.innerText = aff.name;
                          txt.className =
                            'text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest block py-2';
                          txt.style.display = 'block'; // Make sure the text is only shown when needed
                          txt.style.textAlign = 'center'; // Center the fallback text below the image
                          target.parentNode?.appendChild(txt);
                        }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 opacity-60 text-center md:text-left">
            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
              {footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href={footer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={footer.socialLinks.website} aria-label="Website">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;