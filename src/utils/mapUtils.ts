import mapboxgl from 'mapbox-gl';
import { LayerConfig } from '@/types/story';

export const initializeMapLayers = (map: mapboxgl.Map, layers: Record<string, LayerConfig>) => {
  console.log("Initializing map layers:", Object.keys(layers));
  Object.values(layers).forEach((layerConfig) => {
    if (!map.getSource(layerConfig.id)) {
      console.log(`Adding source: ${layerConfig.id}`);
      map.addSource(layerConfig.id, {
        type: 'geojson',
        data: layerConfig.data
      });

      if (!map.getLayer(layerConfig.id)) {
        console.log(`Adding layer: ${layerConfig.id}`);
        map.addLayer({
          ...layerConfig.style,
          id: layerConfig.id,
          source: layerConfig.id,
          layout: {
            ...layerConfig.style.layout,
            visibility: 'none'
          }
        });
      } else {
        console.log(`Layer already exists: ${layerConfig.id}`);
      }

      if (layerConfig.secondaryStyle) {
        const secondaryId = `${layerConfig.id}-secondary`;
        if (!map.getLayer(secondaryId)) {
          map.addLayer({
            ...layerConfig.secondaryStyle,
            id: secondaryId,
            source: layerConfig.id,
            layout: {
              ...layerConfig.secondaryStyle.layout,
              visibility: 'none'
            }
          });
        }
      }
    } else {
      console.log(`Source already exists: ${layerConfig.id}`);
    }
  });
};
