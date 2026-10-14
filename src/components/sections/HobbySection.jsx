import React from 'react';
import { Music, Palette, BookOpen, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function HobbySection() {
  const { hobbies } = portfolioData;

  const getHobbyIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Music size={20} className="text-accent" />;
      case 1:
        return <Palette size={20} className="text-emerald-400" />;
      case 2:
        return <BookOpen size={20} className="text-teal-400" />;
      default:
        return <Heart size={20} className="text-accent" />;
    }
  };

  return (
    <section id="hobby" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Title & Philosophy */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-accent tracking-widest">Section 03</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
              Hobby & Personality
            </h2>
          </div>

          <p className="text-sm text-text-muted leading-relaxed">
            취미와 일상의 관심사는 보육 현장에서 아이들의 감성을 풍부하게 일깨우고 친밀감을 쌓는 훌륭한 자산이 됩니다.
          </p>

          <div className="p-5 rounded-2xl bg-surface border border-border-subtle text-xs text-text-muted space-y-2">
            <span className="font-mono text-accent font-semibold flex items-center gap-1.5">
              <Heart size={14} /> 따뜻한 인성과 소통의 원동력
            </span>
            <p className="leading-relaxed">
              아이들과 함께 노래 부르고, 손수 교구를 다듬고, 눈을 마주치며 책을 읽어주는 모든 순간에 교사의 진심을 담습니다.
            </p>
          </div>
        </div>

        {/* Right Column: 취미 카드 그리드 */}
        <div className="lg:col-span-8 space-y-4">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border-strong transition-all duration-200 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-hover border border-border-subtle flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    {getHobbyIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-main group-hover:text-accent transition-colors">
                      {hobby.title}
                    </h3>
                    <span className="text-xs font-mono text-text-dim">
                      {hobby.roleRelevance}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-text-dim">0{idx + 1}</span>
              </div>

              <p className="text-sm text-text-muted leading-relaxed pl-13 pt-1">
                {hobby.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
