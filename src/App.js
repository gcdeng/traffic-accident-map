import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Map
        className="map-container"
        isMarkerShown
      />
      <Filters></Filters>
    </div>
  );
}

export default App;
