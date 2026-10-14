import React from 'react';
import { User, Award, Wrench, Calendar, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function ProfileSection() {
  const { personal, profile } = portfolioData;

  return (
    <section id="profile" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      {/* 2-Column Layout inspired by Save.design aesthetic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Section Title & Personal Meta */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-accent tracking-widest">Section 01</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
              Profile
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-hover border border-border-strong flex items-center justify-center font-bold text-lg text-accent">
                SH
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main">{personal.name}</h3>
                <p className="text-xs font-mono text-text-muted">{personal.role}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle space-y-2.5 text-xs font-mono">
              <div className="flex justify-between text-text-muted">
                <span>생년월일</span>
                <span className="text-text-main font-medium">{personal.birth}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>지원 직무</span>
                <span className="text-accent font-medium">{personal.role}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>거주지</span>
                <span className="text-text-main">{personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 내소개 + 자격증 + 스킬 (Save.design style dividers) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* 1. 내 소개 (Introduction) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-subtle">
              <User size={18} className="text-accent" />
              <h3 className="text-lg font-semibold text-text-main font-mono">01. 내 소개</h3>
            </div>
            
            <div className="space-y-3 text-text-muted leading-relaxed text-sm sm:text-base">
              {profile.introduction.map((text, idx) => (
                <p key={idx} className="bg-surface/40 p-4 rounded-xl border border-border-subtle">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* 2. 자격증 (Certifications) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-subtle">
              <Award size={18} className="text-accent" />
              <h3 className="text-lg font-semibold text-text-main font-mono">02. 보유 자격증</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.certifications.map((cert, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-surface border border-border-subtle hover:border-border-strong transition-colors space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-hover text-text-dim border border-border-subtle">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-text-dim">{cert.date}</span>
                  </div>
                  <h4 className="font-bold text-text-main text-base flex items-center gap-2">
                    <Check size={16} className="text-accent" />
                    {cert.name}
                  </h4>
                  <p className="text-xs text-text-muted">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 보유 역량 및 스킬 (Skills) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-subtle">
              <Wrench size={18} className="text-accent" />
              <h3 className="text-lg font-semibold text-text-main font-mono">03. 직무 스킬 (Skills)</h3>
            </div>

            <div className="space-y-4">
              {profile.skills.map((skill, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-surface border border-border-subtle space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-text-main text-base font-mono">{skill.name}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent/10 text-accent border border-accent/20">
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-text-dim">{skill.percent}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-surface-hover overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed pt-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
