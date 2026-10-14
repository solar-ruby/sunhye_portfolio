import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, Sparkles, FolderOpen } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ImagePlaceholder from '../common/ImagePlaceholder';
import SkeletonCard from '../common/SkeletonCard';
import Modal from '../common/Modal';

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로딩 시연을 위한 스켈레톤 UI (0.8초 후 실제 콘텐츠 노출)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="project" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      {/* 2-Column Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Title & Section Meta */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-accent tracking-widest">Section 02</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
              Projects
            </h2>
          </div>
          
          <p className="text-sm text-text-muted leading-relaxed">
            영유아 발달 중심 놀이 기획부터 엑셀 행정 전산화, 교구 제작, 학부모 소통까지 보육 현장 맞춤형 프로젝트입니다.
          </p>

          <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">총 프로젝트 수</span>
              <span className="text-accent font-bold">{portfolioData.projects.length}개 (동적 연동)</span>
            </div>
            <div className="text-xs text-text-dim flex items-center gap-2 pt-2 border-t border-border-subtle">
              <FolderOpen size={14} className="text-accent" />
              <span>public/images/projects/ 폴더 연동</span>
            </div>
          </div>
        </div>

        {/* Right Column: 세로 적층 가로 배너 리스트 */}
        <div className="lg:col-span-8 space-y-6">
          
          {loading ? (
            // 스켈레톤 로딩 UI
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            // 동적 프로젝트 배너 리스트
            portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-border-subtle bg-surface hover:bg-surface-hover hover:border-border-strong transition-all duration-300 p-5 sm:p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-lg"
              >
                {/* 배너 좌측: 썸네일 미리보기 (ImagePlaceholder) */}
                <div className="w-full md:w-64 h-44 shrink-0 rounded-xl overflow-hidden border border-border-subtle">
                  <ImagePlaceholder
                    fileName={project.imageFileName}
                    title={project.title}
                    className="w-full h-full"
                    showPath={false}
                  />
                </div>

                {/* 배너 우측: 프로젝트 메타 및 요약 내용 */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                        {project.category}
                      </span>
                      <span className="text-text-dim flex items-center gap-1">
                        <Calendar size={12} />
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-text-main group-hover:text-accent transition-colors flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} className="text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>

                    <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* 하단 태그 */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 mt-2 border-t border-border-subtle">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-background border border-border-subtle text-text-dim"
                      >
                        #{tool}
                      </span>
                    ))}
                    <span className="ml-auto text-[11px] font-mono text-accent/80 group-hover:text-accent flex items-center gap-1">
                      상세보기 &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>

      </div>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
