
import React from 'react';
import PieChartVictoryComponent from './pieChartVictory'
import HorizonBarComponent from './horizonVictoryBar'
import StackedVictoryBarComponent from './stackedVictoryBar'

class VictoryChartComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidePieChart: false,
            hideBarChart: true
        }
    }

    showChart(param) {
        if (param === 'barChart') {
            this.setState({
                hideBarChart: true,
                hidePieChart: false
            });
        } else {
            this.setState({
                hideBarChart: false,
                hidePieChart: true
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.showChart('barChart')}>Show BarChart</button>
                <button onClick={() => this.showChart('horizontalBarChart')}>Show VerticalStacked BarChart</button>
                <div hidden={!this.state.hidePieChart}>
                    <PieChartVictoryComponent />
                </div>
                <div hidden={!this.state.hideBarChart}>
                    <StackedVictoryBarComponent></StackedVictoryBarComponent>
                    <HorizonBarComponent></HorizonBarComponent>
                </div>
            </div>
        );
    }
}

export default VictoryChartComponent;