import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import Filters from './components/Filters/Filters';

const defalutYear = 2018;
// const defaultLevel = ['A1'];
const apiRootPath = `http://127.0.0.1:8000/api`;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterItems: {
        year: defalutYear,
        // level: defaultLevel,
        city: '',
      },
      mapData: []
    }
  }

  async componentDidMount(){    
    let res = await fetch(`${apiRootPath}/locations?year=${defalutYear}`);
    let json = await res.json();
    console.warn(json);
    
    this.setState({
      mapData: json
    });
  }

  handleFilters = async (label, value) => {
    console.warn(label, value);
    if(this.state.filterItems[label]===value) return;

    if(label==='year') {
      console.warn('fetch new mapData');
      let res = await fetch(`${apiRootPath}/locations?year=${value}`);
      let json = await res.json();
      this.setState({
        mapData: json
      });
    }
    
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
