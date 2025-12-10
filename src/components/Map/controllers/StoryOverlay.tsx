"use client";

import React from 'react';
import { useMapContext } from '../MapContext';

export const StoryOverlay: React.FC = () => {
  const { activeChapter, activeChapterId, setActiveChapterId, chapters } = useMapContext();

  if (!activeChapter) return null;

  return (
    <div className="absolute top-8 left-8 z-10 max-w-md w-full">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-300">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Chapter: {activeChapter.slug}
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            {activeChapter.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {activeChapter.description}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Navigate Story
          </p>
          <div className="flex flex-wrap gap-2">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapterId(chapter.id)}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 font-semibold border ${activeChapterId === chapter.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                {index + 1}. {chapter.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
