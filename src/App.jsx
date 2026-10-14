import React from 'react';
import Header from './components/common/Header';
import IntroSection from './components/sections/IntroSection';
import ProfileSection from './components/sections/ProfileSection';
import ProjectSection from './components/sections/ProjectSection';
import HobbySection from './components/sections/HobbySection';
import SitemapSection from './components/sections/SitemapSection';

export default function App() {
  return (
    <div className="bg-background text-text-main min-h-screen selection:bg-accent/20 selection:text-accent font-sans">
      {/* 고정 상단 헤더 */}
      <Header />

      <main>
        {/* 1. Intro Section (Hero & Spline 3D) */}
        <IntroSection />

        {/* 2. Profile Section (소개, 자격증, 스킬) */}
        <ProfileSection />

        {/* 3. Project Section (세로 적층 가로 배너, 모달, 플레이스홀더) */}
        <ProjectSection />

        {/* 4. Hobby Section (인성 및 특기) */}
        <HobbySection />
      </main>

      {/* 5. Sitemap & Resume Download Section (Footer) */}
      <SitemapSection />
    </div>
  );
}
