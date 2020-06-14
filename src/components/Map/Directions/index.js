import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
	<MapViewDirections 
		destination={ destination }
		origin={ origin }
		onReady={ onReady }
		apikey="AIzaSyBbxM-S0BnoxIOdveti3h-9MHKjbjrYIxg"
		strokeWidth={3}
		strokeColor="#222"
	/>
);

export default Directions;