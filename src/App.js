import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import Filters from './components/Filters/Filters';
import {sampleData} from './data';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterItems: {
        year: 2018,
        level: 'A1',
        city: 'taipei',
      },
      mapData: sampleData
    }
  }
  
  handleFilters = (label, value) => {
    console.warn(label, value);
    if(this.state.filterItems[label]===value) return;

    // TODO: fetch new mapData
    console.warn('fetch new mapData');
    
    this.setState((state)=>{
      return {
        filterItems: {
          ...state.filterItems,
          [label]: value
        }
      }
    });
  }

  render(){
    return (
      <div className="App">
        <Map
          className="map-container"
          mapData={this.state.mapData}
        />
        <Filters 
          items={this.state.filterItems} 
          onChange={this.handleFilters}
        />
      </div>
    );
  }
}

export default App;
