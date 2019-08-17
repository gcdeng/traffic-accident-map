import React from 'react';
import { compose, withProps, withHandlers, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import {sampleData} from '../../data';
import {apiKey} from '../../const';

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
const Map = compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh`, width: '70vw' }} />,
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
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: sampleData[0]['緯度'], lng: sampleData[0]['經度'] }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.isMarkerShown && 
      sampleData.map((data, i) => {
        if(typeof data['緯度'] !== 'number' || typeof data['經度'] !== 'number'){
          return 0;
        }
        return <Marker
          key={i}
          position={{ lat: data['緯度'], lng: data['經度'] }}
          onClick={() => props.onToggleOpen(i)}
          >
            {props.isOpen[i] && <InfoWindow onCloseClick={() => props.onToggleOpen(i)}>
              <div>
                <div>{data['發生地點']}</div>
                <div>{data['死亡受傷人數']}</div>
                <div>{data['車種']}</div>
                <div>{data['發生時間']}</div>
              </div>
            </InfoWindow>}
          </Marker>
      })}
    </MarkerClusterer>
  </GoogleMap>
)

export default Map;