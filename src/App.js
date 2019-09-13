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

  async componentDidUpdate(prevProps, prevState){
    if(this.state.filterItems.year !== prevState.filterItems.year
    || this.state.filterItems.city !== prevState.filterItems.city) {
      let fetchUrl = `${apiRootPath}/locations?year=${this.state.filterItems.year}`;
      if(this.state.filterItems.city) {
        fetchUrl += `&city=${this.state.filterItems.city}`;
      }
      let res = await fetch(fetchUrl);
      let json = await res.json();
      this.setState({
        mapData: json
      });
    }
  }

  handleFilters = async (label, value) => {
    console.warn(label, value);
    if(this.state.filterItems[label]===value) return;
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
        <Filters 
          items={this.state.filterItems} 
          onChange={this.handleFilters}
        />
        <Map
          className="map-container"
          mapData={this.state.mapData}
        />
      </div>
    );
  }
}

export default App;
