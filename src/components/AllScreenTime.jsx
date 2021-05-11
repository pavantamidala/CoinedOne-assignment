import React from 'react'
import {connect} from 'react-redux'
import DeviceUsage from './ByDevice/DeviceUsage'
import RoundChart from './Charts/RoundChart';
import '../styles/AllScreenTime.css'
import LineChart from './Charts/LineChart'
function ConnectedAllScreenTime(props) {
    
    let temporary = props.store.data.chartData
    let data;
    if(temporary){
         data = [temporary.studyTime.total, temporary.classTime.total, temporary.freeTime.total]
    }
    let labels = ["studyTime", "classTime","freeTime"]
    let deviceUsageTemp = props.store.data.deviceUsage
    let deviceUsage;
    if(deviceUsageTemp){
      deviceUsage = {mobile:deviceUsageTemp.totalTime.mobile,laptop:deviceUsageTemp.totalTime.laptop}
    }
    let loading = props.store.loading
    console.log(props)
    return (
        <React.Fragment>
           
           <div className="nested-div">
            {loading === false && <div className="alltime-container">
                <div className="round-chart">
                <RoundChart title="All Screen Time" labels={labels} data={data} />
                </div>
                <div className="range-chart">
                        <LineChart freeTime={temporary.freeTime.total} freeTimeMaxUsage={props.store.data.freeTimeMaxUsage} />
                </div>
                <div className="device-usage-data">
                <DeviceUsage deviceUsage={deviceUsage} />
                </div>
            </div>  }
           </div>
           
        </React.Fragment>
    )
}


const AllScreenTime = connect((store)=>{
    return{
       "store":store
    }
})(ConnectedAllScreenTime)

export default AllScreenTime
