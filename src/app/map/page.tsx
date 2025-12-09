import Map from "@/components/Map/Map";

export default function MapPage() {
    return (
        <main className="h-screen w-screen flex flex-col">
            <header className="bg-white p-4 shadow-sm z-10">
                <h1 className="text-xl font-bold">Mapbox Integration</h1>
            </header>
            <div className="flex-grow relative">
                <Map />
            </div>
        </main>
    );
}
