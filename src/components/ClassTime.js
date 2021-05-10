import DeviceUsage from './ByDevice/DeviceUsage'
import RoundChart from './Charts/RoundChart'
import React from 'react'
import {connect} from 'react-redux'
function ConnectedClassTime(props) {
    let temporary = props.store.data
    let labels = ["Total Time","Class Time"]
    let values;
    if(temporary.chartData){ 
    values = [temporary.chartData.totalTime.total, temporary.chartData.classTime.total]
    }
    let deviceUsageTemp = props.store.data.deviceUsage
    let deviceUsage;
    if (deviceUsageTemp) {
        deviceUsage = { mobile: deviceUsageTemp.classTime.mobile, laptop: deviceUsageTemp.classTime.laptop }
    }
    
    let loading = props.store.loading
    return (
        <React.Fragment>
            <h1> Class Time</h1>
            {loading === false && <div>
                <RoundChart labels={labels} data={values} />
                <DeviceUsage deviceUsage={deviceUsage} />
            </div>}

        </React.Fragment>
    )
}

const ClassTime = connect((store)=>{
    return{
        "store":store
    }
})(ConnectedClassTime)

export default ClassTime;
// props.store.data = {
//     "chartData": {
//         "totalTime": {
//             "total": "130"
//         },
//         "studyTime": {
//             "total": "20"
//         },
//         "classTime": {
//             "total": "80"
//         },
//         "freeTime": {
//             "total": "30"
//         }
//     },
//     "freeTimeMaxUsage": "120",
//     "deviceUsage": {
//         "totalTime": {
//             "mobile": "40",
//             "laptop": "90"
//         },
//         "studyTime": {
//             "mobile": "10",
//             "laptop": "10"
//         },
//         "classTime": {
//             "mobile": "0",
//             "laptop": "80"
//         },
//         "freeTime": {
//             "mobile": "30",
//             "laptop": "0"
//         }
//     }
// }]
