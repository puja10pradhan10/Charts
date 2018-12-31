import React from 'react';

import { ReactD3, BarChart, PieChart } from 'react-d3-components';
// var BarChart = ReactD3.BarChart;

var data = [
    {
        label: 'somethingA',
        values: [{ x: 'A', y: 100 }, { x: 'B', y: 200 }, { x: 'C', y: 400 }, { x: 'D', y: 300 }]
    }
];

var tooltip = function (x, y0, y, total) {
    // return y.toString();
    return "Total: " + total + " X: " + x + " Y: " + y;
};

var groupedData = [
    {
        label: 'Allocated hrs',
        values: [{ x: '1Dec2018', y: 1365 }, { x: '2Dec2018', y: 1549 }, { x: '3Dec2018', y: 1661 }, { x: '4Dec2018', y: 1403 }]
    },
    {
        label: 'Booked hrs',
        values: [{ x: '1Dec2018', y: 1382 }, { x: '2Dec2018', y: 1549 }, { x: '3Dec2018', y: 1661 }, { x: '4Dec2018', y: 1403 }]
    },
    {
        label: 'NonQuality hrs',
        values: [{ x: '1Dec2018', y: 188 }, { x: '2Dec2018', y: 967 }, { x: '3Dec2018', y: 874 }, { x: '4Dec2018', y: 476 }]
    }
];


var tooltipPie = function (x, y) {
    return y.toString();
};
var tooltipArea = function (y, cumulative, x) {
    return "Total: " + cumulative + " X: " + x + " Y: " + y;
}

var pieChartData = {
    label: 'somethingA',
    values: [{ x: 'Efficiency', y: 99.80 }, { x: 'Productivity', y: 44.36 }, { x: 'Leakage', y: 54.40 }, { x: 'Utilization', y: 99.80 }]
};

var sort = null; // d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

class D3Charts extends React.Component {
    render() {
        return (
            <div>
                <BarChart
                    data={data}
                    width={300}
                    height={300}
                    margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />

               
                <BarChart
                    groupedBars
                    data={groupedData}
                    width={400}
                    height={400}
                    tooltipHtml={tooltip}
                    tooltipMode={'mouse'}
                    margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
               

                <PieChart
                    data={pieChartData}
                    width={600}
                    height={400}
                    margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
                    tooltipOffset={{ top: 175, left: 200 }}
                    tooltipHtml={tooltipArea}
                    tooltipMode={'fixed'}
                    sort={sort}
                />
            </div>
        )
    }
}

export default D3Charts;
