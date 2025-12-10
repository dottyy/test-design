import { LngLatLike } from "mapbox-gl";
import { Chapter, LayerConfig } from "@/types/story.d";

export interface MapConfiguration {
  center?: LngLatLike;
  zoom?: number;
  pitch?: number;
  bearing?: number;
  style?: string;
}

export interface StoryConfiguration {
  chapters: Chapter[];
  layers: Record<string, LayerConfig>;
  initialChapterId?: string;
}

export interface MapProps {
  config?: MapConfiguration;
  story?: StoryConfiguration;
}
