import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const Map = ({lat,lng}) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: '' });

  const center =useMemo(()=>({ lat: lat, lng: lng }),[]) ;

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName='map-container'
    >
    <MarkerF
        position={center}
        icon={{
          scale: 12,
          fillColor: "green",
          strokeColor: "green",
        }}
      />
      </GoogleMap>
  );
};

export default Map;
