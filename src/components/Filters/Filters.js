import React from 'react';
import './Filters.css';
import { Dropdown } from 'semantic-ui-react';

class Filters extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        const cityOptions = [
            { value: '基隆', text: '基隆' },
            { value: '臺北', text: '臺北' },
            { value: '新北', text: '新北' },
            { value: '桃園', text: '桃園' },
            { value: '新竹', text: '新竹' },
            { value: '苗栗', text: '苗栗' },
            { value: '臺中', text: '臺中' },
            { value: '彰化', text: '彰化' },
            { value: '南投', text: '南投' },
            { value: '雲林', text: '雲林' },
            { value: '嘉義', text: '嘉義' },
            { value: '臺南', text: '臺南' },
            { value: '高雄', text: '高雄' },
            { value: '屏東', text: '屏東' },
            { value: '臺東', text: '臺東' },
            { value: '花蓮', text: '花蓮' },
            { value: '宜蘭', text: '宜蘭' },
            { value: '澎湖', text: '澎湖' },
            { value: '金門', text: '金門' },
            { value: '連江', text: '連江' },
        ];
        const yearOptions = [
            { key: 2018, value: 2018, text: 2018 },
        ];
        // const levelOptions = [
        //     { key: 'A1', value: 'A1', text: 'A1' },
        //     { key: 'A2', value: 'A2', text: 'A2' },
        //     { key: 'A3', value: 'A3', text: 'A3' },
        // ]
        return (
            <div className="filters-container">
                <h3>A1交通事故地圖</h3>
                {/* year */}
                <div className="label">年份</div>
                <Dropdown 
                fluid
                selection
                options={yearOptions} 
                value={this.props.items.year}
                onChange={(e, option) => this.props.onChange('year', option.value)}
                />
                {/* level */}
                {/* <div className="label">交通事故種類</div>
                <Dropdown
                fluid
                selection
                multiple
                clearable 
                options={levelOptions} 
                value={this.props.items.level}
                onChange={(e, option) => this.props.onChange('level', option.value)}
                /> */}
                {/* city */}
                <div className="label">縣市</div>
                <Dropdown
                fluid
                selection
                clearable 
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