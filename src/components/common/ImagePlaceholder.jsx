import React, { useState } from 'react';
import { Image as ImageIcon, Folder, FileCode } from 'lucide-react';

export default function ImagePlaceholder({ 
  fileName, 
  title, 
  className = "w-full h-full min-h-[180px]",
  showPath = true 
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageSrc = `/images/projects/${fileName}`;

  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#141417] border border-border-subtle group flex items-center justify-center ${className}`}>
      {/* 실제 이미지가 public/images/projects/ 에 존재할 경우 렌더링 시도 */}
      {!imageError && (
        <img
          src={imageSrc}
          alt={title || fileName}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* 이미지가 없거나 로딩 전일 때 표시되는 정교한 플레이스홀더 UI */}
      {(!imageLoaded || imageError) && (
        <div className="flex flex-col items-center justify-center p-4 text-center select-none w-full h-full bg-gradient-to-b from-[#18181c] to-[#121215]">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-2 max-w-[90%]">
            <div className="w-10 h-10 rounded-full bg-surface-hover border border-border-strong flex items-center justify-center text-accent/80 shadow-inner group-hover:border-accent/40 transition-colors">
              <ImageIcon size={18} />
            </div>

            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-accent/10 text-accent border border-accent/20">
                Image Placeholder
              </span>
              <div className="text-xs font-mono font-medium text-text-main/90 truncate max-w-full">
                {fileName}
              </div>
            </div>

            {showPath && (
              <p className="text-[10px] text-text-dim font-mono tracking-tight flex items-center gap-1 mt-1 bg-background/60 px-2 py-0.5 rounded border border-border-subtle">
                <Folder size={10} className="text-text-muted" />
                <span>public/images/projects/</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* 실사 이미지가 로드되었을 때도 마우스 오버 시 파일명 표기 오버레이 */}
      {imageLoaded && (
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur border border-border-subtle text-[10px] font-mono text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
          {fileName}
        </div>
      )}
    </div>
  );
}
