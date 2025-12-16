"use client";

import { MapProps, MapConfiguration } from "./Map.d";
import { MapProvider } from "./MapContext";
import { StoryOverlay } from "./controllers/StoryOverlay";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "./Map.constants";
import { MapCanvas } from "./MapCanvas";

const Map: React.FC<MapProps> = (props) => {
  const { config = {}, story } = props;

  const mapConfig: MapConfiguration = {
    center: config.center ?? DEFAULT_CENTER,
    zoom: config.zoom ?? DEFAULT_ZOOM,
    pitch: config.pitch,
    bearing: config.bearing,
    style: config.style,
  };

  return (
    <MapProvider story={story}>
      <MapCanvas config={mapConfig} />
      <StoryOverlay />
    </MapProvider>
  );
};

export default Map;
