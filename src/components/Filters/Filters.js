import React from 'react';
import './Filters.css';
import { Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2018,
            level: 'A1',
            city: 'taipei',
        }
    }

    handleSelect = (label, option) => {
        this.setState({
            [label]: option.value
        });
    }

    render(){
        const cityOptions = [
            { key: 'taipei', value: 'taipei', text: '台北' },
        ];
        const yearOptions = [
            { key: 2018, value: 2018, text: 2018 },
            { key: 2017, value: 2017, text: 2017 },
        ];
        const levelOptions = [
            { key: 'A1', value: 'A1', text: 'A1' },
            { key: 'A2', value: 'A2', text: 'A2' },
            { key: 'A3', value: 'A3', text: 'A3' },
        ];
        return (
            <div className="filters-container">
                {/* year */}
                <div className="label">年份</div>
                <Select 
                options={yearOptions} 
                value={this.state.year}
                onChange={(e, option) => this.handleSelect('year', option)}
                />
                {/* level */}
                <div className="label">交通事故種類</div>
                <Select 
                options={levelOptions} 
                value={this.state.level}
                onChange={(e, option) => this.handleSelect('level', option)}
                />
                {/* city */}
                <div className="label">縣市</div>
                <Select 
                placeholder='選擇' 
                options={cityOptions} 
                value={this.state.city}
                onChange={(e, option) => this.handleSelect('city', option)}
                />
            </div>
        )
    }
}

export default Filters;