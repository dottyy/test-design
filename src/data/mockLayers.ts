import { FeatureCollection } from 'geojson';

export const parksLayer: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Central Park', type: 'park' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-73.981, 40.768],
            [-73.958, 40.800],
            [-73.949, 40.796],
            [-73.973, 40.764],
            [-73.981, 40.768]
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Riverside Park', type: 'park' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-73.990, 40.730],
            [-73.970, 40.800],
            [-73.980, 40.800],
            [-74.000, 40.730],
            [-73.990, 40.730]
          ]
        ]
      }
    }
  ]
};

export const riversLayer: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Hudson River' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-74.020, 40.700],
          [-74.010, 40.750],
          [-73.990, 40.800],
          [-73.950, 40.850]
        ]
      }
    }
  ]
};

export const schoolsLayer: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'School A', students: 500 },
      geometry: {
        type: 'Point',
        coordinates: [-73.960, 40.770]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'School B', students: 800 },
      geometry: {
        type: 'Point',
        coordinates: [-73.980, 40.750]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'School C', students: 800 },
      geometry: {
        type: 'Point',
        coordinates: [-73.990, 40.730]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'School D', students: 800 },
      geometry: {
        type: 'Point',
        coordinates: [-73.950, 40.790]
      }
    }
  ]
};

export const busStopsLayer: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { route: 'M1' },
      geometry: {
        type: 'Point',
        coordinates: [-73.955, 40.765]
      }
    },
    {
      type: 'Feature',
      properties: { route: 'M2' },
      geometry: {
        type: 'Point',
        coordinates: [-73.965, 40.775]
      }
    }
  ]
};

export const bikeRoutesLayer: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { type: 'protected' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-73.995, 40.720],
          [-73.985, 40.740],
          [-73.975, 40.760]
        ]
      }
    }
  ]
};
