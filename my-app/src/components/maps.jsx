import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = () => {
  return (
    <div style={{ height: '400px', width: '80%', margin: '0 auto', border: '1px solid #ccc', borderRadius: '5px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDj8XvUPrqysYN3Byj-ZsdCqfrWeRzGcWs' }}
        defaultCenter={{ lat: 28.726571438841255, lng: -106.14818573332516 }}
        defaultZoom={15}
      >
        <Marker
          lat={28.726571438841255}
          lng={-106.14818573332516}
          text="Circuito Universitario 404, Cafetales, 31125 Chihuahua, Chih."
        />
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => (
  <div style={{ width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%' }} />
);

export default Maps;
