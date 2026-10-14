import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel border-b border-border-subtle py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#intro" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded bg-text-main text-background flex items-center justify-center font-bold text-xs tracking-tighter">
            SH
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-tight font-semibold text-text-main group-hover:text-accent transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] text-text-dim tracking-wider uppercase font-mono">
              {portfolioData.personal.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-muted hover:text-text-main transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border-strong bg-surface hover:bg-surface-hover hover:border-accent/40 text-text-main transition-all text-xs"
          >
            <Download size={13} className="text-accent" />
            <span>Resume PDF</span>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-muted hover:text-text-main p-1"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border-subtle px-6 py-4 flex flex-col gap-3 font-mono text-sm">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-text-main py-1"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded border border-border-strong bg-surface text-text-main text-xs font-mono"
          >
            <Download size={14} className="text-accent" />
            <span>이력서 PDF 다운로드</span>
          </a>
        </div>
      )}
    </header>
  );
}
