
import React from "react";
import { WorldMap as DottedWorldMap } from "./ui/world-map";

const locations = [
  { id: 1, lat: 40.7128, lng: -74.006, name: "New York", country: "United States" },
  { id: 2, lat: 51.5074, lng: -0.1278, name: "London", country: "United Kingdom" },
  { id: 3, lat: 52.5200, lng: 13.4050, name: "Berlin", country: "Germany" },
  { id: 4, lat: 35.6762, lng: 139.6503, name: "Tokyo", country: "Japan" },
  { id: 5, lat: -33.8688, lng: 151.2093, name: "Sydney", country: "Australia" },
  { id: 6, lat: 55.7558, lng: 37.6173, name: "Moscow", country: "Russia" },
  { id: 7, lat: 25.2048, lng: 55.2708, name: "Dubai", country: "UAE" },
  { id: 8, lat: 28.7041, lng: 77.1025, name: "Delhi", country: "India" },
  { id: 9, lat: 48.8566, lng: 2.3522, name: "Paris", country: "France" },
  { id: 10, lat: 43.6532, lng: -79.3832, name: "Toronto", country: "Canada" },
];

// Create connections for the map
const mapConnections = [
  {
    start: { lat: 40.7128, lng: -74.006 }, // New York
    end: { lat: 51.5074, lng: -0.1278 }, // London
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 52.5200, lng: 13.4050 }, // Berlin
  },
  {
    start: { lat: 52.5200, lng: 13.4050 }, // Berlin
    end: { lat: 55.7558, lng: 37.6173 }, // Moscow
  },
  {
    start: { lat: 55.7558, lng: 37.6173 }, // Moscow
    end: { lat: 28.7041, lng: 77.1025 }, // Delhi
  },
  {
    start: { lat: 28.7041, lng: 77.1025 }, // Delhi
    end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
  },
  {
    start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
    end: { lat: -33.8688, lng: 151.2093 }, // Sydney
  },
  {
    start: { lat: 40.7128, lng: -74.006 }, // New York
    end: { lat: 43.6532, lng: -79.3832 }, // Toronto
  },
  {
    start: { lat: 28.7041, lng: 77.1025 }, // Delhi
    end: { lat: 25.2048, lng: 55.2708 }, // Dubai
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 48.8566, lng: 2.3522 }, // Paris
  },
];

const WorldMapComponent: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden bg-background/30 backdrop-blur-lg">
      <DottedWorldMap dots={mapConnections} lineColor="#0ea5e9" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-2">Worldwide Remote Monitoring</h3>
          <p className="text-sm text-white/70">
            Our advanced CCTV systems allow you to monitor your property from anywhere in the world. 
            With 24/7 access via our secure mobile app, you'll never be out of touch with your security system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldMapComponent;
