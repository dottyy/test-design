"use client";

import React from "react";
import { Chapter } from "@/types/story";
import { useStoryOverlay } from "../hooks/useStoryOverlay";
import {
  StoryCardStyled,
  StoryCardHeaderStyled,
  StoryChapterBadgeStyled,
  StoryChapterButtonStyled,
  StoryChapterDescriptionStyled,
  StoryChapterOverlayStyled,
  StoryChapterSectionStyled,
  StoryChaptersFooterStyled,
  StoryChaptersLabelStyled,
  StoryChaptersListStyled,
  StoryChapterTitleStyled,
  StoryHeaderRowStyled,
  StoryProgressBarStyled,
  StoryProgressTrackStyled,
  StoryScrollContainerStyled,
  StoryScrollHintStyled,
} from "./StoryOverlay.styled";

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
      <StoryScrollContainerStyled
        ref={scrollContainerRef}
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {chapters.map((chapter: Chapter, index: number) => {
          const opacity = getChapterOpacity(index);
          const currentIndex = chapters.findIndex((ch) => ch.id === chapter.id);
          const progress =
            chapters.length > 1
              ? ((currentIndex + 1) / chapters.length) * 100
              : 100;

          return (
            <StoryChapterSectionStyled
              key={chapter.id}
              ref={(el) => registerChapterRef(chapter.id, el)}
              data-chapter-id={chapter.id}
              style={{ scrollSnapAlign: "start" }}
            >
              <StoryChapterOverlayStyled style={{ opacity }}>
                <StoryCardStyled>
                  <StoryCardHeaderStyled>
                    <StoryHeaderRowStyled>
                      <StoryChapterBadgeStyled>
                        Chapter {index + 1} of {chapters.length}
                      </StoryChapterBadgeStyled>
                      <StoryScrollHintStyled>
                        Scroll to navigate
                      </StoryScrollHintStyled>
                    </StoryHeaderRowStyled>

                    <StoryProgressTrackStyled>
                      <StoryProgressBarStyled
                        style={{ width: `${progress}%` }}
                      />
                    </StoryProgressTrackStyled>

                    <StoryChapterTitleStyled>
                      {chapter.title}
                    </StoryChapterTitleStyled>
                    <StoryChapterDescriptionStyled>
                      {chapter.description}
                    </StoryChapterDescriptionStyled>
                  </StoryCardHeaderStyled>

                  <StoryChaptersFooterStyled>
                    <StoryChaptersLabelStyled>
                      Story Chapters
                    </StoryChaptersLabelStyled>
                    <StoryChaptersListStyled>
                      {chapters.map((chap: Chapter, idx: number) => (
                        <StoryChapterButtonStyled
                          key={chap.id}
                          active={activeChapterId === chap.id}
                          onClick={() => setActiveChapterId(chap.id)}
                        >
                          {idx + 1}. {chap.title}
                        </StoryChapterButtonStyled>
                      ))}
                    </StoryChaptersListStyled>
                  </StoryChaptersFooterStyled>
                </StoryCardStyled>
              </StoryChapterOverlayStyled>
            </StoryChapterSectionStyled>
          );
        })}
      </StoryScrollContainerStyled>
    </>
  );
};
