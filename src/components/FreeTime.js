import React from 'react';
import DeviceUsage from './ByDevice/DeviceUsage'
import { connect } from 'react-redux';
import RoundChart from './Charts/RoundChart'
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
            
            {loading === false && <div>
                <RoundChart labels={labels} data={values} />
                <DeviceUsage deviceUsage={deviceUsage} />
            </div>}

        </React.Fragment>
    )
}
const FreeTime = connect((store) => {
    return {
        "store": store
    }
})(ConnectedFreeTime)
export default FreeTime;