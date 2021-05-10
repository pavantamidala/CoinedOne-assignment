import React, { useEffect, useState } from 'react'
import chartData from '../store/store'
import {connect} from 'react-redux';
import {getChartData} from '../store/store'
import SplitButton from './SplitButton/SplitButton'
import {useHistory} from 'react-router-dom'
function ConnectLoadData(props) {
    
    useEffect(()=>{
        props.getChartData()
    },[])
    console.log("loading data")
    let history = useHistory()
    console.log(history.location.pathname)
    let currentlyActive = "All Time"

    function selectedItem(path) {
        switch (path) {
            case "/":
                currentlyActive = "All Time"
                return currentlyActive
            case "/classtime":
                currentlyActive = "Class Time"
                return currentlyActive
            case "/studytime":
                currentlyActive = "Study Time"
                return currentlyActive
            case "/freetime":
                currentlyActive = "Free Time"
                return currentlyActive
            default:
                currentlyActive = "All Time"
                return currentlyActive;
        }
    }
    selectedItem(history.location.pathname)
    console.log(Location.pathname)
    return(
        <React.Fragment>
            <h1> Load data </h1>
            <SplitButton currentlyActive={currentlyActive} />
        </React.Fragment>
    )
}

const LoadApp = connect((store) => {
    return {
        "store": store
    }
},(dispatch)=>{
    return{
        "getChartData":()=>dispatch(getChartData())
    }
})(ConnectLoadData)

export default LoadApp;
