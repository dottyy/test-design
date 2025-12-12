"use client";

import React from 'react';
import { useStoryOverlay } from '../hooks/useStoryOverlay';

export const StoryOverlay: React.FC = () => {
  const {
    activeChapterId,
    setActiveChapterId,
    chapters,
    scrollContainerRef,
    registerChapterRef,
    getChapterOpacity,
  } = useStoryOverlay();

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="fixed inset-0 z-[5] overflow-y-scroll overflow-x-hidden"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {chapters.map((chapter, index) => {
          const opacity = getChapterOpacity(index);
          const currentIndex = chapters.findIndex(ch => ch.id === chapter.id);
          const progress = chapters.length > 1 ? ((currentIndex + 1) / chapters.length) * 100 : 100;

          return (
            <div
              key={chapter.id}
              ref={(el) => registerChapterRef(chapter.id, el)}
              data-chapter-id={chapter.id}
              className="relative w-full h-screen"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div
                className="absolute top-8 left-8 z-10 max-w-md w-full pointer-events-none transition-opacity duration-500"
                style={{ opacity }}
              >
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 pointer-events-auto">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        Chapter {index + 1} of {chapters.length}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        Scroll to navigate
                      </span>
                    </div>

                    <div className="w-full h-1 bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                      {chapter.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      {chapter.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Story Chapters
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {chapters.map((chap, idx) => (
                        <button
                          key={chap.id}
                          onClick={() => setActiveChapterId(chap.id)}
                          className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 font-semibold border ${activeChapterId === chap.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                        >
                          {idx + 1}. {chap.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
