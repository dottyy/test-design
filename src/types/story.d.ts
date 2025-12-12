import { FeatureCollection } from 'geojson';
import { FillLayerSpecification, LineLayerSpecification, CircleLayerSpecification, SymbolLayerSpecification, LngLatLike } from 'mapbox-gl';

export type MapLayer =
  | FillLayerSpecification
  | LineLayerSpecification
  | CircleLayerSpecification
  | SymbolLayerSpecification;

export interface LayerConfig {
  id: string;
  data: FeatureCollection;
  style: Omit<MapLayer, 'source'> | MapLayer;
  secondaryStyle?: Omit<MapLayer, 'source'> | MapLayer;
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
  alignment: 'left' | 'center' | 'right';
  camera: {
    center: LngLatLike;
    zoom: number;
    pitch?: number;
    bearing?: number;
    speed?: number;
    curve?: number;
  };
  visibleLayers: string[];
}
