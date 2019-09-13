import React from 'react';
import { compose, withProps, withHandlers, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import {apiKey} from '../../const';

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
const Map = compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh`, width: '80vw' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      // const clickedMarkers = markerClusterer.getMarkers()
      // console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      // console.log(clickedMarkers)
    },
    onMarkerClick: () => (data) => {
      // console.log(data);
      
    },
  }),
  withStateHandlers(() => ({
      isOpen: {},
    }), {
      onToggleOpen: ({isOpen}) => (i) => ({
        isOpen: {
          ...isOpen,
          [i]: !isOpen[i]
        }
      })
    }),
  withScriptjs,
  withGoogleMap
)((props) => {
  console.log('props.mapData', props.mapData);

  let markers = props.mapData.map((data, i) => {
    let lat = parseFloat(data['緯度'])||0;
    let lng = parseFloat(data['經度'])||0;
    if(lat===0 || lng===0) return '';

    return (
      <Marker
      noRedraw={true}
      key={i}
      position={{ lat, lng }}
      onClick={() => props.onToggleOpen(i)}
      >
        {props.isOpen[i] &&
        <InfoWindow onCloseClick={() => props.onToggleOpen(i)}>
          <div>
              <div>{data['發生地點']}</div>
              <div>{data['死亡受傷人數']}</div>
              <div>{data['車種']}</div>
              <div>{data['發生時間']}</div>
          </div>
        </InfoWindow>}
      </Marker>
    );
  });

  return (
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lat: 23.6551383, 
      lng: 120.9148737
    }}
    >
        <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
        >
        {markers}
        </MarkerClusterer>
    </GoogleMap>
  )
})

export default Map;