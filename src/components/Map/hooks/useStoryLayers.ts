import { useEffect, useCallback, RefObject } from 'react';
import { Chapter, LayerConfig } from '@/types/story';

interface UseStoryLayersConfig {
  mapRef: RefObject<mapboxgl.Map | null>;
  layers: Record<string, LayerConfig>;
  currentChapter: Chapter | null;
}

export const useStoryLayers = (props: UseStoryLayersConfig) => {
  const { mapRef, layers, currentChapter } = props;

  const updateVisibility = useCallback((map: mapboxgl.Map, chapter: Chapter | null) => {
    if (!chapter) {
      console.log("No chapter active");
      return;
    }
    console.log(`Updating visibility for chapter: ${chapter.id}`);
    const activeLayerIds = new Set(chapter.visibleLayers);

    Object.values(layers).forEach((layerConfig) => {
      const isVisible = activeLayerIds.has(layerConfig.id);
      const visibility = isVisible ? 'visible' : 'none';

      if (map.getLayer(layerConfig.id)) {
        if (isVisible) console.log(`Setting ${layerConfig.id} to visible`);
        map.setLayoutProperty(layerConfig.id, 'visibility', visibility);
      } else {
        console.warn(`Layer ${layerConfig.id} not found on map during updateVisibility`);
      }

      if (layerConfig.secondaryStyle) {
        const secondaryId = `${layerConfig.id}-secondary`;
        if (map.getLayer(secondaryId)) {
          map.setLayoutProperty(secondaryId, 'visibility', visibility);
        }
      }
    });
  }, [layers]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !currentChapter) return;

    const applyChapter = () => {
      console.log(`Applying chapter: ${currentChapter.id}`);

      map.flyTo({
        ...currentChapter.camera,
        essential: true
      });

      updateVisibility(map, currentChapter);
    };

    if (map.isStyleLoaded()) {
      applyChapter();
    } else {
      const onStyleLoad = () => {
        console.log("Style loaded, applying chapter...");
        applyChapter();
      };

      map.once('style.load', onStyleLoad);

      return () => {
        map.off('style.load', onStyleLoad);
      };
    }
  }, [mapRef, currentChapter, updateVisibility]);
};
