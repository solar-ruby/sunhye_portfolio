import React, { useEffect } from 'react';
import { X, Calendar, Tag, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Modal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border-strong rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-text-main"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-hover hover:bg-border-subtle text-text-muted hover:text-text-main transition-colors"
          aria-label="닫기"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded text-xs font-mono uppercase bg-accent/10 text-accent border border-accent/20">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-text-dim font-mono">
              <Calendar size={13} />
              {project.period}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-main">
            {project.title}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Image Display */}
        <div className="my-6 w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-border-subtle shadow-md">
          <ImagePlaceholder
            fileName={project.imageFileName}
            title={project.title}
            className="w-full h-full"
          />
        </div>

        {/* Modal Details Grid */}
        <div className="space-y-6 text-sm">
          {/* Background & Goal */}
          <div className="p-4 rounded-xl bg-background/50 border border-border-subtle">
            <h3 className="font-semibold text-text-main mb-1.5 flex items-center gap-2 text-xs uppercase tracking-wider text-accent font-mono">
              <CheckCircle2 size={15} /> 기획 배경 및 목표
            </h3>
            <p className="text-text-muted leading-relaxed">
              {project.details.background}
            </p>
          </div>

          {/* Key Roles */}
          <div>
            <h3 className="font-semibold text-text-main mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted font-mono">
              <Tag size={15} className="text-accent" /> 담당 역할 및 수행 내용
            </h3>
            <ul className="space-y-2">
              {project.details.roles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="font-semibold text-text-main mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted font-mono">
              <Award size={15} className="text-accent" /> 주요 성과 및 피드백
            </h3>
            <ul className="space-y-2">
              {project.details.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Review */}
          <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
            <h3 className="font-semibold text-accent mb-1.5 flex items-center gap-2 text-xs uppercase tracking-wider font-mono">
              <HeartHandshake size={15} /> 교사로서의 배움과 성찰
            </h3>
            <p className="text-text-main/90 leading-relaxed italic">
              "{project.details.review}"
            </p>
          </div>

          {/* Tools */}
          <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-2">
            <span className="text-xs text-text-dim font-mono mr-1">사용 역량:</span>
            {project.tools.map((tool, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-xs font-mono bg-surface-hover border border-border-strong text-text-muted">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
