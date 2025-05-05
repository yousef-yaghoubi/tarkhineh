import React, { Dispatch, SetStateAction } from 'react'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import L, { Icon, LatLngExpression, Map } from 'leaflet';


function LocationMarker({
  setLocation,
}: {
  setLocation: Dispatch<SetStateAction<L.LatLngExpression | undefined>>;
}) {
  useMapEvents({
    click(e) {
      setLocation([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

const customIcon = new Icon({
  iconUrl: '/icons/LocationSign.png',
  iconSize: [35, 40],
});

function MapContainerComponent({location, setLocation, showMiniMap, mapRef}: {location?: LatLngExpression, setLocation: Dispatch<SetStateAction<LatLngExpression | undefined>>, showMiniMap?: LatLngExpression, mapRef: React.RefObject<Map>}) {
  return (
    <MapContainer
        center={
          location ? location : [35.71164720878694, 51.31006836891175]
        }
        zoom={11}
        boxZoom
        zoomControl={!showMiniMap}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        className="!relative !cursor-pointer"
        ref={mapRef}
      >
        <TileLayer
          attribution="tarkhine"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showMiniMap !== undefined ? (
          <>
            <Marker position={showMiniMap} icon={customIcon} />
          </>
        ) : (
          <>
            <LocationMarker setLocation={setLocation} />
            {location && (
              <Marker position={location} icon={customIcon} />
            )}
          </>
        )}
      </MapContainer>
  )
}

export default MapContainerComponent