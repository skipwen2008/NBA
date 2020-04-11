import React, {Component} from 'react';
import CounterSlider from "./CounterSlider";
import ShotChart from './ShotChart';
import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd';

class DataViewContainer extends Component {
    
    state = {
        minCount: 3,
        chartType: 'hexbin',
    }

    onChartTypeChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            chartType: e.target.value,
        });
      };
    
    onCounterSliderChange = (count)=> {
        console.log(count);
        this.setState({
            minCount : count
        })
    }


   render() {
       return (
           <div className="data-view">
               <ShotChart 
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType = {this.state.chartType}
               />
               <div className = "filters">
                    <CounterSlider 
                            onCounterSliderChange = {_.debounce(this.onCounterSliderChange, 500)} 
                            value = {this.state.minCount}
                    />

                    <Row>
                        <Col span={9}>
                            <Radio.Group onChange={this.onChartTypeChange} value={this.state.chartType}>
                                    <Radio value='hexbin'>Hexbin</Radio>
                                    <Radio value='scatter'>Scatter</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>

                </div>
               
           </div>
       );
   }
}

export default DataViewContainer;