import React from 'react'
import { connect } from 'react-redux';
import RoundChart from './Charts/RoundChart';
import DeviceUsage from './ByDevice/DeviceUsage'
import "../styles/ClassTime.css"
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
            
            <div className="nested-div">
                {loading === true && <h3>Loadin...</h3>}
                {loading === false && <div className="alltime-container">
                    <div className="round-chart">

                        <RoundChart title="Study Time" labels={labels} data={values} />
                    </div>
                    <div className="device-usage-data">
                        <DeviceUsage deviceUsage={deviceUsage} />
                    </div>
                </div>}
            </div>
        </React.Fragment>
    )
}
const StudyTime = connect((store)=>{
    return{
        "store":store
    }
})(ConnectStudyTime)
export default StudyTime;