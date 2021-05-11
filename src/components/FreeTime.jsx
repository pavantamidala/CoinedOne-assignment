import React from 'react';
import DeviceUsage from './ByDevice/DeviceUsage'
import { connect } from 'react-redux';
import RoundChart from './Charts/RoundChart'
import '../styles/AllScreenTime.css'
import LineChart from './Charts/LineChart'
 function ConnectedFreeTime(props) {
    let temporary = props.store.data
    let labels = ["Free","Total"]
    let values;
    if(temporary.chartData){
        values = [temporary.chartData.freeTime.total, temporary.chartData.totalTime.total]
    }
     let deviceUsageTemp = props.store.data.deviceUsage
     let deviceUsage;
     if (deviceUsageTemp) {
         deviceUsage = { mobile: deviceUsageTemp.freeTime.mobile, laptop: deviceUsageTemp.freeTime.laptop }
     }

     let loading = props.store.loading
    return (
        <React.Fragment>
            
            <div className="nested-div">
                {loading === true && <h3>Loadin...</h3>}
                {loading === false && <div className="alltime-container">
                    <div className="round-chart">
                        <RoundChart title="Free Time" labels={labels} data={values} />
                    </div>
                    <div className="range-chart">
                        <LineChart freeTime={temporary.chartData.freeTime.total} freeTimeMaxUsage={props.store.data.freeTimeMaxUsage} />
                    </div>
                    <div className="device-usage-data">
                        <DeviceUsage deviceUsage={deviceUsage} />
                    </div>
                </div>}
            </div>

        </React.Fragment>
    )
}
const FreeTime = connect((store) => {
    return {
        "store": store
    }
})(ConnectedFreeTime)
export default FreeTime;