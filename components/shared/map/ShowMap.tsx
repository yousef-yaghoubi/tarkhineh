import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import L, { Icon, LatLngExpression, Map } from 'leaflet';
import Button from '../button/Button';
import { useOrder } from '@/app/shoping/ShopingProvider';
import IconGps from '@icons/gps.svg';
import IconLocation from '@icons/location.svg';
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

interface MapProp {
  showMiniMap?: LatLngExpression;
  setStateShow?: Dispatch<SetStateAction<number>>;
  stateAddress?: string;
  setStateAddress?: boolean;
}

export default function ShowMap({
  showMiniMap,
  setStateShow,
  stateAddress,
  setStateAddress,
}: MapProp) {
  const mapRef = useRef<Map>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<LatLngExpression>();
  const { updateDelivery } = useOrder();

  useEffect(() => {
    async function getAd() {
      if (Array.isArray(userLocation)) {
        const addressUser: string = await getAddress(
          userLocation[0],
          userLocation[1]
        );
        if (addressUser && setStateAddress) {
          updateDelivery({ type: 'delivery', address: addressUser });
        }
      }
    }
    getAd();
  }, [userLocation, setStateAddress, updateDelivery]);

  useEffect(() => {
    if (stateAddress) setSearchQuery(stateAddress);
  }, [stateAddress]);

  const getAddress = async (lat: number, lon: number) => {
    const {response} = await fetch(`/api/address/addressFromApi?lat=${lat}&lon=${lon}`).then(res => res).then(result => result.json())

    try {
      if (response && response.address) {
        const address = response.display_name
          .split(', ')
          .reverse()
          .join(', ')
          .replace(/,\s*\d+-\d+\s*,/g, ', ');
        setSearchQuery(address);
        return address;
      } else {
        setSearchQuery('آدرس یافت نشد');
      }
    } catch (error) {
      console.error('خطا در دریافت آدرس:', error);
      setSearchQuery('خطا در دریافت آدرس');
    }
  };

  const customIcon = new Icon({
    iconUrl: '/icons/LocationSign.png',
    iconSize: [35, 40],
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const map = mapRef.current;
          map?.setView([latitude, longitude], 13);
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.log(error);
          alert("Couldn't get your location.");
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const provider = new OpenStreetMapProvider();

  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const results = await provider.search({ query: searchQuery });
      if (results.length > 0) {
        const { x, y } = results[0]; // x = longitude, y = latitude
        setUserLocation([y, x]);
      } else {
        alert('آدرسی پیدا نشد!');
      }
    }
  };

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={
          userLocation ? userLocation : [35.71164720878694, 51.31006836891175]
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
            <LocationMarker setLocation={setUserLocation} />
            {userLocation && (
              <Marker position={userLocation} icon={customIcon} />
            )}
          </>
        )}
      </MapContainer>
      <div
        className={`bg-withe dark:bg-background-2 rounded caption-md md:button-lg w-28 md:w-[156px] text-primary h-8 md:h-10 ${showMiniMap !== undefined ? 'hidden' : 'flex'} items-center justify-center z-[1000] absolute top-4 right-4 cursor-pointer`}
        onClick={() => getUserLocation()}
      >
        <IconGps width="24" height="24" className="fill-[#417F56]" />
        <span className="mr-2">موقعیت من</span>
      </div>

      <div
        className={`absolute z-[1000] ${showMiniMap !== undefined ? 'hidden' : 'flex'} bottom-[68px] px-1 items-center bg-white dark:bg-background-2 md:bottom-[88px] right-1/2 left-1/2 translate-x-1/2 !w-11/12 max-w-[409px] h-8 md:h-10 rounded overflow-hidden shadow-content-cards`}
      >
        <IconLocation className="fill-[#717171] dark:fill-white w-4 h-4 md:w-6 md:h-6" />
        <input
          type="text"
          placeholder="جستجوی آدرس..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
          className="outline-none caption-md md:body-sm !w-full !h-full px-2 bg-transparent"
        />
      </div>
      <Button
        btn="fill"
        theme="Primary"
        disabled={stateAddress?.length == 0 ? true : false}
        className={`absolute z-[1000] ${showMiniMap !== undefined ? 'hidden' : 'flex'} w-[152px] md:w-[266px] h-8 md:h-10 bottom-6 caption-md md:button-lg !rounded right-1/2 left-1/2 translate-x-1/2`}
        onClickCustom={() => (setStateShow ? setStateShow(2) : null)}
      >
        ثبت موقعیت
      </Button>
    </div>
  );
}
