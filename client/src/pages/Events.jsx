import React from 'react';
import GoogleMapReact from 'google-map-react';
import SideBar from '../components/SideBar';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapComponent = ({ center, zoom }) => {
    return (
        <>
        <form id="searchForm">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" style={{ border: 'solid 1px black' }} />

                <label htmlFor="sports">Sports:</label>
                <select id="sports" name="sports" multiple style={{ border: 'solid 1px black' }}>
                    <option value="cricket">Cricket</option>
                    <option value="badminton">Badminton</option>
                    <option value="football">Football</option>
                    <option value="basketball">Basketball</option>
                    <option value="tennis">Tennis</option>
                </select>

                <button type="submit">Search</button>
            </form>

        <div style={{ height: '400px', width: '100%' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    lat={center.lat}
                    lng={center.lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
        </>
    );
};

MapComponent.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};

export default MapComponent;
