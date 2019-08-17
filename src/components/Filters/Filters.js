import React from 'react';
import './Filters.css';
import { Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Filters extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

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
                value={this.props.items.year}
                onChange={(e, option) => this.props.onChange('year', option.value)}
                />
                {/* level */}
                <div className="label">交通事故種類</div>
                <Select 
                options={levelOptions} 
                value={this.props.items.level}
                onChange={(e, option) => this.props.onChange('level', option.value)}
                />
                {/* city */}
                <div className="label">縣市</div>
                <Select 
                placeholder='選擇' 
                options={cityOptions} 
                value={this.props.items.city}
                onChange={(e, option) => this.props.onChange('city', option.value)}
                />
            </div>
        )
    }
}

export default Filters;