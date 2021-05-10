import React from 'react'
import { Line } from 'react-chartjs-2'
import mockdata from '../../mockdata/mockdata';
import '../../styles/RoundChart.css';


function LineChart(props) {
    return (
        <div className="round-chart">
            <Line data={mockdata(props.labels, props.data)} options={{
                responsive: true,
                maintainAspectRatio: false,
            }} />
        </div>
    )
}
export default LineChart;
