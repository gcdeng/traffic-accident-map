import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import Filters from './components/Filters/Filters';
import {sampleData} from './data';
const defalutYear = [2018];
const defaultLevel = ['A1'];
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterItems: {
        year: defalutYear,
        level: defaultLevel,
        city: 'taipei',
      },
      mapData: sampleData
    }
  }

  handleFilters = (label, value) => {
    console.warn(label, value);
    if(this.state.filterItems[label]===value) return;
    
    if(label==='year' && value.length===0){
      value = [this.state.filterItems[label][0]];
    }
    if(label==='level' && value.length===0){
      value = [this.state.filterItems[label][0]];
    }
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
