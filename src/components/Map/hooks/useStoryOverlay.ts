import { useEffect, useRef, useState, useCallback } from 'react';
import { useMapContext } from '../MapContext';

export const useStoryOverlay = () => {
  const { activeChapter, activeChapterId, setActiveChapterId, chapters } = useMapContext();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const chapterRefsMap = useRef<Map<string, HTMLDivElement>>(new Map());
  const isScrollingProgrammatically = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const registerChapterRef = useCallback((chapterId: string, element: HTMLDivElement | null) => {
    if (element) {
      chapterRefsMap.current.set(chapterId, element);
    } else {
      chapterRefsMap.current.delete(chapterId);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      setScrollProgress(scrollTop / viewportHeight);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || chapters.length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      root: container,
      rootMargin: '0px',
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
    };

    const intersectionRatios = new Map<string, number>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isScrollingProgrammatically.current) return;
      entries.forEach((entry) => {
        const chapterId = entry.target.getAttribute('data-chapter-id');
        if (chapterId) {
          intersectionRatios.set(chapterId, entry.intersectionRatio);
        }
      });

      let maxRatio = 0;
      let mostVisibleChapterId: string | null = null;

      intersectionRatios.forEach((ratio, chapterId) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleChapterId = chapterId;
        }
      });

      if (mostVisibleChapterId && mostVisibleChapterId !== activeChapterId && maxRatio > 0.3) {
        setActiveChapterId(mostVisibleChapterId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    chapterRefsMap.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [chapters, activeChapterId, setActiveChapterId]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentIndex = chapters.findIndex(ch => ch.id === activeChapterId);
    if (currentIndex === -1) return;

    const targetScrollTop = currentIndex * container.clientHeight;

    if (Math.abs(container.scrollTop - targetScrollTop) > 10) {
      isScrollingProgrammatically.current = true;
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 500);
    }
  }, [activeChapterId, chapters]);

  const currentIndex = chapters.findIndex(ch => ch.id === activeChapterId);
  const progress = chapters.length > 1 ? ((currentIndex + 1) / chapters.length) * 100 : 100;

  const getChapterOpacity = (chapterIndex: number): number => {
    const distance = Math.abs(scrollProgress - chapterIndex);

    if (distance > 0.5) return 0;
    if (distance < 0.1) return 1;

    return 1 - (distance - 0.1) / 0.4;
  };

  return {
    activeChapter,
    activeChapterId,
    setActiveChapterId,
    chapters,
    scrollContainerRef,
    registerChapterRef,
    currentIndex,
    progress,
    scrollProgress,
    getChapterOpacity,
  };
};
