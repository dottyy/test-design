import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import config from "@/config/config";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../Map.constants";
import { initializeMapLayers } from "@/utils/mapUtils";
import { storyLayers } from "@/data/storyConfig";
import { MapConfiguration } from "../Map.d";

export const useMapInitialize = (props: MapConfiguration) => {
  const {
    center = DEFAULT_CENTER,
    zoom = DEFAULT_ZOOM,
    style = "mapbox://styles/mapbox/light-v11",
    bearing = 0,
    pitch = 0,
  } = props;

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    mapboxgl.accessToken = config.mapbox.accessToken;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: style,
        center: center,
        zoom: zoom,
        bearing: bearing,
        pitch: pitch,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      const onStyleLoad = () => {
        console.log("Map style loaded, initializing layers...");
        if (map.current) {
          initializeMapLayers(map.current, storyLayers);
        }
      };

      if (map.current.isStyleLoaded()) {
        onStyleLoad();
      } else {
        map.current.on('style.load', onStyleLoad);
      }
    } catch (e) {
      console.error("Error initializing map:", e);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [center, zoom, style, bearing, pitch]);

  return { mapContainer, map };
};   