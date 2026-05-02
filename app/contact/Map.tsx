"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const points = [
  {
    name: "A'mansi — Atelier",
    desc: "Siège & transformation",
    lat: 13.5116,
    lng: 2.1254,
    type: "siege",
    tag: "Siège",
  },
  {
    name: "Grand Marché de Niamey",
    desc: "Point de vente principal",
    lat: 13.5155,
    lng: 2.1144,
    type: "vente",
    tag: "Marché",
  },
  {
    name: "Marché Katako",
    desc: "Point de vente",
    lat: 13.5093,
    lng: 2.1085,
    type: "vente",
    tag: "Marché",
  },
  {
    name: "Marché Wadata",
    desc: "Point de vente",
    lat: 13.5023,
    lng: 2.1197,
    type: "vente",
    tag: "Marché",
  },
  {
    name: "Casino Supermarché",
    desc: "Grande surface partenaire",
    lat: 13.5185,
    lng: 2.108,
    type: "supermarche",
    tag: "Supermarché",
  },
];

const makeIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:32px;height:32px;border-radius:50% 50% 50% 0;
      background:${color};border:2.5px solid #fff;
      transform:rotate(-45deg);
      box-shadow:0 2px 8px rgba(0,0,0,0.25);
    "></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -36],
  });

const icons: Record<string, L.DivIcon> = {
  siege: makeIcon("#7B1C1C"),
  vente: makeIcon("#E87020"),
  supermarche: makeIcon("#5A8C1A"),
};

export default function Map() {
  useEffect(() => {
    // Fix leaflet default icon paths broken by webpack
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={[13.5116, 2.1175]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]} icon={icons[p.type]}>
          <Popup>
            <div style={{ fontFamily: "sans-serif", minWidth: 140 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#7B1C1C", marginBottom: 2 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 11, color: "#7a5a4a" }}>{p.desc}</div>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 6,
                  fontSize: 10,
                  fontWeight: 600,
                  color: p.type === "siege" ? "#7B1C1C" : p.type === "vente" ? "#E87020" : "#5A8C1A",
                  border: `1px solid currentColor`,
                  borderRadius: 99,
                  padding: "2px 8px",
                }}
              >
                {p.tag}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
