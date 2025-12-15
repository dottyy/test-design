import React, { forwardRef } from "react";

export const StoryScrollContainerStyled = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={`fixed inset-0 z-5 overflow-y-scroll overflow-x-hidden ${className}`}
    />
  );
});

StoryScrollContainerStyled.displayName = "StoryScrollContainerStyled";

export const StoryChapterSectionStyled = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={`relative w-full h-screen ${className}`}
    />
  );
});

StoryChapterSectionStyled.displayName = "StoryChapterSectionStyled";

export const StoryChapterOverlayStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div
    {...props}
    className={`absolute top-8 left-8 z-10 max-w-md w-full pointer-events-none transition-opacity duration-500 ${className}`}
  />
);

export const StoryCardStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div
    {...props}
    className={`bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 pointer-events-auto ${className}`}
  />
);

export const StoryCardHeaderStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div {...props} className={`mb-6 ${className}`} />
);

export const StoryHeaderRowStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div
    {...props}
    className={`flex items-center justify-between mb-3 ${className}`}
  />
);

export const StoryChapterBadgeStyled: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = ({ className = "", ...props }) => (
  <span
    {...props}
    className={`inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider ${className}`}
  />
);

export const StoryScrollHintStyled: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = ({ className = "", ...props }) => (
  <span
    {...props}
    className={`text-xs text-gray-400 font-medium ${className}`}
  />
);

export const StoryProgressTrackStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div
    {...props}
    className={`w-full h-1 bg-gray-200 rounded-full mb-4 overflow-hidden ${className}`}
  />
);

export const StoryProgressBarStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div
    {...props}
    className={`h-full bg-blue-600 transition-all duration-500 ease-out ${className}`}
  />
);

export const StoryChapterTitleStyled: React.FC<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className = "", ...props }) => (
  <h2
    {...props}
    className={`text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight ${className}`}
  />
);

export const StoryChapterDescriptionStyled: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className = "", ...props }) => (
  <p
    {...props}
    className={`text-lg text-gray-600 leading-relaxed font-medium ${className}`}
  />
);

export const StoryChaptersFooterStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div {...props} className={`border-t border-gray-200 pt-6 ${className}`} />
);

export const StoryChaptersLabelStyled: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className = "", ...props }) => (
  <p
    {...props}
    className={`text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 ${className}`}
  />
);

export const StoryChaptersListStyled: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div {...props} className={`flex flex-wrap gap-2 ${className}`} />
);

type StoryChapterButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export const StoryChapterButtonStyled: React.FC<StoryChapterButtonProps> = ({
  active,
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 text-sm rounded-lg transition-all duration-200 font-semibold border";
  const activeClasses =
    " bg-blue-600 text-white border-blue-600 shadow-md transform scale-105";
  const inactiveClasses =
    " bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300";

  const stateClasses = active ? activeClasses : inactiveClasses;

  return (
    <button
      {...props}
      className={`${baseClasses}${stateClasses} ${className}`.trim()}
    />
  );
};
