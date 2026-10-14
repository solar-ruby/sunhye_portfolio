import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="w-full rounded-xl border border-border-subtle bg-surface/50 p-6 flex flex-col md:flex-row gap-6 animate-pulse">
      {/* 썸네일 스켈레톤 */}
      <div className="w-full md:w-72 h-44 rounded-lg bg-surface-hover shrink-0"></div>

      {/* 텍스트 영역 스켈레톤 */}
      <div className="flex-1 flex flex-col justify-between py-1">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-4 w-20 rounded bg-surface-hover"></div>
            <div className="h-4 w-28 rounded bg-surface-hover"></div>
          </div>
          <div className="h-6 w-3/4 rounded bg-surface-hover"></div>
          <div className="h-4 w-full rounded bg-surface-hover"></div>
          <div className="h-4 w-2/3 rounded bg-surface-hover"></div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="h-6 w-16 rounded-full bg-surface-hover"></div>
          <div className="h-6 w-16 rounded-full bg-surface-hover"></div>
          <div className="h-6 w-20 rounded-full bg-surface-hover"></div>
        </div>
      </div>
    </div>
  );
}
