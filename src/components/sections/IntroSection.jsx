import React from 'react';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function IntroSection() {
  return (
    <section id="intro" className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Spline Iframe Background / Hero */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-auto">
        <iframe
          src={portfolioData.personal.splineUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline 3D Scene"
          className="w-full h-full"
        />
      </div>

      {/* Subtle Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none z-10" />

      {/* Central Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-strong bg-surface/80 backdrop-blur text-xs font-mono text-accent mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
          <span>Childcare Educator Portfolio</span>
        </div>

        {/* 중앙 타이틀: '선혜의 포트폴리오' */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-main mb-4 drop-shadow-lg">
          {portfolioData.personal.introHeroTitle}
        </h1>

        <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto font-light leading-relaxed drop-shadow">
          {portfolioData.personal.subTitle}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono text-text-dim">
          <span>지원자: {portfolioData.personal.name}</span>
          <span>•</span>
          <span>직무: {portfolioData.personal.role}</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#profile"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-mono text-text-dim hover:text-text-main transition-colors group cursor-pointer"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
        <div className="w-8 h-8 rounded-full border border-border-strong bg-surface/60 flex items-center justify-center group-hover:border-accent transition-colors">
          <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform text-accent" />
        </div>
      </a>
    </section>
  );
}
