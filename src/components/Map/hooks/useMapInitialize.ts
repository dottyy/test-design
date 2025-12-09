import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MapProps } from "../Map.d";
import config from "@/config/config";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../Map.constants";

export const useMapInitialize = (props: MapProps) => {
    const { initialCenter = DEFAULT_CENTER, initialZoom = DEFAULT_ZOOM } = props;

    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (map.current) return;
        if (!mapContainer.current) return;

        mapboxgl.accessToken = config.mapbox.accessToken;

        try {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: initialCenter,
                zoom: initialZoom,
            });

            map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
        } catch (e) {
            console.error("Error initializing map:", e);
        }

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [initialCenter, initialZoom]);

    return { mapContainer, map };
}   