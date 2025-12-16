"use client";

import { useMapInitialize } from "./hooks/useMapInitialize";
import { useStoryLayers } from "./hooks/useStoryLayers";
import { MapConfiguration } from "./Map.d";
import { MapStyled } from "./Map.styled";
import { useMapContext } from "./MapContext";

export const MapCanvas: React.FC<{ config: MapConfiguration }> = ({ config }) => {
  const { activeChapter, layers } = useMapContext();
  const { mapContainer, map } = useMapInitialize(config);

  useStoryLayers({
    mapRef: map,
    layers,
    currentChapter: activeChapter
  });

  return <MapStyled ref={mapContainer} />;
};
