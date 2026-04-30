"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "@/lib/leaflet-icon-fix";

const hubs = [
  {
    name: "Nawalparasi East",
    description: "Current Trauma Hub starting in Nawalparasi East district.",
    position: [27.58, 84.14] as [number, number],
  },
  {
    name: "Rautahat",
    description: "Current Trauma Hub starting in Rautahat district.",
    position: [26.98, 85.3] as [number, number],
  },
];

export function NepalMap() {
  return (
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Current Geography</p>
          <h2 className="h2 mt-4">Where the work has begun</h2>
          <p className="mt-4 leading-8 text-black/70">
            The project is already tied to real districts. These are not conceptual nodes.
            They are current implementation points in Nepal.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
          <div className="h-[520px] w-full">
            <MapContainer
              center={[27.35, 84.75]}
              zoom={7}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {hubs.map((hub) => (
                <Marker key={hub.name} position={hub.position}>
                  <Popup>
                    <div className="space-y-1">
                      <p className="font-semibold">{hub.name}</p>
                      <p>{hub.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}