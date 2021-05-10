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
    
    return(
        <React.Fragment>
            <h1> Load data </h1>
            <SplitButton  />
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
