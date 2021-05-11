import React from 'react'
import { Line } from 'react-chartjs-2'
import mockdata from '../../mockdata/mockdata';
import '../../styles/LinceChart.css'
import timeConverter from '../../methods/minutesToHours'

function LineChart(props) {
    const[hours,minutes]= timeConverter(props.freeTime)
    let freeTime = hours !==0? `${hours}h.${minutes}m`:`${minutes} m`
    const [freeTimeMaxUsageHours, freeTimeMaxUsageMinutes] = timeConverter(props.freeTimeMaxUsage)
    let freeTimeMaxUsage = freeTimeMaxUsageHours !==0? `${freeTimeMaxUsageHours}h.${freeTimeMaxUsageMinutes}m`:
    `${freeTimeMaxUsageMinutes}m`
    return (
            <div className="form-element">
                <h3> Free-Time Usage </h3>
                <br />
            <p className="stats-used"> <strong> Used: </strong> {freeTime} </p>
                
                <p className="stats-max"> <strong> Max:</strong> {freeTimeMaxUsage} </p>
              

            <input type="range" disabled min="0" max={props.freeTimeMaxUsage} value={props.freeTime}  />
       </div>
       
    )
}
export default LineChart;
