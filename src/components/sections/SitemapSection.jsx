import React from 'react';
import { Download, ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function SitemapSection() {
  const { personal, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="sitemap" className="border-t border-border-subtle bg-surface/50 pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top CTA Banner: Resume PDF Download */}
        <div className="rounded-3xl border border-border-strong bg-gradient-to-r from-surface via-[#18181c] to-surface p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="space-y-3 z-10 max-w-xl">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
              Download Official Resume
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">
              이력서 및 자기소개서 전문 다운로드
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              보육교사 변선혜의 상세 학력, 보육 실습 이력, 자격 증빙 및 상세 자기소개서가 포함된 공식 이력서 PDF 파일입니다.
            </p>
          </div>

          <div className="z-10 shrink-0 w-full md:w-auto">
            <a
              href="/resume.pdf"
              download="변선혜_보육교사_이력서.pdf"
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 rounded-xl bg-accent hover:bg-emerald-400 text-background font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-accent/20 active:scale-95"
            >
              <Download size={18} />
              <span>Resume PDF 다운로드</span>
            </a>
          </div>

          {/* Decorative Background Blur */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Middle: Sitemap Grid & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-8 border-t border-border-subtle">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-text-main text-background flex items-center justify-center font-bold text-sm">
                SH
              </div>
              <span className="font-mono text-base font-bold text-text-main tracking-tight">
                {personal.name} Portfolio
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm">
              아이들의 웃음과 올바른 성장을 함께 만들어가는 보육교사 변선혜의 공식 포트폴리오 웹사이트입니다.
            </p>
            <div className="pt-2 space-y-2 text-xs font-mono text-text-dim">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-accent" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-accent" />
                <span>{personal.phone}</span>
              </div>
            </div>
          </div>

          {/* Sitemap Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-dim">
              Sitemap Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-accent transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span>&bull;</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-dim">
              Quick Action
            </h4>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border-strong bg-surface hover:bg-surface-hover text-xs font-mono text-text-main transition-colors mt-4 md:mt-0"
            >
              <span>맨 위로 가기</span>
              <ArrowUp size={14} className="text-accent" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Save.design styled Footer */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim">
          <div className="flex items-center gap-2">
            <span>© 2026 {personal.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Designed with React & Spline 3D</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
