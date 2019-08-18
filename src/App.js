import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import Filters from './components/Filters/Filters';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterItems: {
        year: 2018,
        level: 'A1',
        city: 'taipei',
      }
    }
  }
  handleFilters = (label, value) => {
    this.setState({
      filterItems: {
        ...this.state.filterItems,
        [label]: value
      }
    });
  }
  render(){
    return (
      <div className="App">
        <Map
          className="map-container"
          filterItems={this.state.filterItems}
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
