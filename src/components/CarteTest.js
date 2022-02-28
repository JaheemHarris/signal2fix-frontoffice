import React from 'react';
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";

function CarteTest(){
    return (
        <div style={{}}>
            <MapContainer center={{lat:17.3434,lng:46.342343}} zoom={8}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                 />
            </MapContainer>
        </div>
    );
}

export default CarteTest;