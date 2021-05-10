import React from 'react'
import { connect } from 'react-redux';
import RoundChart from './Charts/RoundChart';
import DeviceUsage from './ByDevice/DeviceUsage'
function ConnectStudyTime(props) {
    let temporary = props.store.data
    let labels = ["Study", "Total"]
    let values;
    if (temporary.chartData) {
        values = [temporary.chartData.studyTime.total, temporary.chartData.totalTime.total]
    }
    let deviceUsageTemp = props.store.data.deviceUsage
    let deviceUsage;
    if (deviceUsageTemp) {
        deviceUsage = { mobile: deviceUsageTemp.studyTime.mobile, laptop: deviceUsageTemp.studyTime.laptop }
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
const StudyTime = connect((store)=>{
    return{
        "store":store
    }
})(ConnectStudyTime)
export default StudyTime;