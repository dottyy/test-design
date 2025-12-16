import { LayerConfig } from '@/types/story';
import { logger } from '@/lib/logger';

export const initializeMapLayers = (map: mapboxgl.Map, layers: Record<string, LayerConfig>) => {
  Object.values(layers).forEach((layerConfig) => {
    if (!map.getSource(layerConfig.id)) {
      map.addSource(layerConfig.id, {
        type: 'geojson',
        data: layerConfig.data
      });

      if (!map.getLayer(layerConfig.id)) {
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
        logger.error(`Layer already exists: ${layerConfig.id}`);
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
      logger.error(`Source already exists: ${layerConfig.id}`);
    }
  });
};
