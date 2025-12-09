import { LngLatLike } from "mapbox-gl";

export interface MapProps {
    initialCenter?: LngLatLike;
    initialZoom?: number;
}