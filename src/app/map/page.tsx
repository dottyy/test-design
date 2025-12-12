"use client";

import Map from "@/components/Map/Map";
import { storyChapters, storyLayers } from "@/data/storyConfig";

export default function MapPage() {
    return (
        <main className="h-screen w-screen relative bg-gray-50 overflow-hidden">
            <Map
                story={{
                    chapters: storyChapters,
                    layers: storyLayers,
                    initialChapterId: storyChapters[0]?.id
                }}
            />
        </main>
    );
}
