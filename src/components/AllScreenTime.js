import React from 'react'
import {connect} from 'react-redux'
import DeviceUsage from './ByDevice/DeviceUsage'
import RoundChart from './Charts/RoundChart';
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
           <h1>hello</h1>
           
            {loading === false && <div>
                <RoundChart labels={labels} data={data} />
                <DeviceUsage deviceUsage={deviceUsage} />
            </div>  }
           
        </React.Fragment>
    )
}


const AllScreenTime = connect((store)=>{
    return{
       "store":store
    }
})(ConnectedAllScreenTime)

export default AllScreenTime
