import React from 'react';

export default function Maps() {
    return (
        <div style={{textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', margin: 'auto', width: '600px'}}>
            <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=Circuito+Universitario+404,+Cafetales,+31125+Chihuahua,+Chih&zoom=15&size=600x300&key=AIzaSyDj8XvUPrqysYN3Byj-ZsdCqfrWeRzGcWs
                "
                alt="Mapa de la ubicación"
            />
        </div>
    );
}
