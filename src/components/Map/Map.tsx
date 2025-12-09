"use client";

import { useMapInitialize } from "./hooks/useMapInitialize";
import { MapProps } from "./Map.d";
import { MapStyled } from "./Map.styled";

const Map: React.FC<MapProps> = (props: MapProps) => {
  const { initialCenter, initialZoom } = props;
  const { mapContainer } = useMapInitialize({ initialCenter, initialZoom })

  return <MapStyled ref={mapContainer} />;
};

export default Map;
