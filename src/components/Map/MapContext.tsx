"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Chapter, LayerConfig } from '@/types/story';

interface MapContextValue {
  activeChapter: Chapter | null;
  activeChapterId: string;
  setActiveChapterId: (id: string) => void;
  chapters: Chapter[];
  layers: Record<string, LayerConfig>;
}

const MapContext = createContext<MapContextValue | undefined>(undefined);

interface MapProviderProps {
  children: ReactNode;
  story?: {
    chapters: Chapter[];
    layers: Record<string, LayerConfig>;
    initialChapterId?: string;
  };
}

export const MapProvider: React.FC<MapProviderProps> = ({
  children,
  story
}) => {
  const chapters = story?.chapters ?? [];
  const layers = story?.layers ?? {};
  const initialChapterId = story?.initialChapterId;

  const defaultChapterId = initialChapterId ?? chapters[0]?.id ?? '';
  const [activeChapterId, setActiveChapterId] = useState(defaultChapterId);
  const activeChapter = chapters.find(c => c.id === activeChapterId) ?? null;

  const value: MapContextValue = {
    activeChapter,
    activeChapterId,
    setActiveChapterId,
    chapters,
    layers,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};
