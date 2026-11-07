import { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';

interface MapProps {
  offers: Offer[];
  activeOffer: Offer | null;
}

const defaultIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const activeIcon = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const Map = ({ offers, activeOffer }: MapProps) => {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapElementRef.current || offers.length === 0) {
      return;
    }

    const cityLocation = offers[0].city.location;

    const map = L.map(mapElementRef.current, {
      center: [cityLocation.latitude, cityLocation.longitude],
      zoom: cityLocation.zoom
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    mapRef.current = map;
    markerLayerRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      markerLayerRef.current = null;
    };
  }, [offers]);

  useEffect(() => {
    if (!markerLayerRef.current) {
      return;
    }

    markerLayerRef.current.clearLayers();

    offers.forEach((offer) => {
      const isActive = activeOffer?.id === offer.id;

      L.marker(
        [offer.location.latitude, offer.location.longitude],
        { icon: isActive ? activeIcon : defaultIcon }
      ).addTo(markerLayerRef.current as L.LayerGroup);
    });
  }, [offers, activeOffer]);

  return <div ref={mapElementRef} style={{ width: '100%', height: '100%' }} />;
};

export default Map;
