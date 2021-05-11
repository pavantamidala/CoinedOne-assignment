import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import mockdata from '../../mockdata/mockdata';

// style = {{ width: "220px", height: "200px" }}
function RoundChart(props) {
    console.log(props)
    return (

        <div >
            <Doughnut style={{ width: "220px", height: "200px" }} data={mockdata(props.labels, props.data)} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: props.title,
                        fontSize: 20
                    }, legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }} />
        </div>
    )
}
export default RoundChart;
