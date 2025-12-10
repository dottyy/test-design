import { FillLayerSpecification, LineLayerSpecification, CircleLayerSpecification } from 'mapbox-gl';

export const parksStyle: Omit<FillLayerSpecification, 'source'> = {
  id: 'parks-fill',
  type: 'fill',
  paint: {
    'fill-color': '#4CAF50',
    'fill-opacity': 0.6
  }
};

export const parksOutlineStyle: Omit<LineLayerSpecification, 'source'> = {
  id: 'parks-outline',
  type: 'line',
  paint: {
    'line-color': '#2E7D32',
    'line-width': 2
  }
};

export const riversStyle: Omit<LineLayerSpecification, 'source'> = {
  id: 'rivers-line',
  type: 'line',
  paint: {
    'line-color': '#2196F3',
    'line-width': 4,
    'line-opacity': 0.8
  }
};

export const schoolsStyle: Omit<CircleLayerSpecification, 'source'> = {
  id: 'schools-circle',
  type: 'circle',
  paint: {
    'circle-radius': 8,
    'circle-color': '#FF9800',
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};

export const busStopsStyle: Omit<CircleLayerSpecification, 'source'> = {
  id: 'bus-stops-circle',
  type: 'circle',
  paint: {
    'circle-radius': 5,
    'circle-color': '#9C27B0',
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};

export const bikeRoutesStyle: Omit<LineLayerSpecification, 'source'> = {
  id: 'bike-routes-line',
  type: 'line',
  paint: {
    'line-color': '#FF5722',
    'line-width': 3,
    'line-dasharray': [2, 1]
  }
};
