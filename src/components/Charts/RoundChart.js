import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import mockdata from '../../mockdata/mockdata';
import '../../styles/RoundChart.css';


function RoundChart(props) {
    return (
        <div className="round-chart">
            <Doughnut data={mockdata(props.labels, props.data)} options={{
                responsive: true,
                maintainAspectRatio: false,
            }} />
        </div>
    )
}
export default RoundChart;
