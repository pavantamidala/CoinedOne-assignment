import React, { useEffect } from 'react'
import Header from './header/Header'
import {connect} from 'react-redux';
import {getChartData} from '../Redux-store/store'
import SplitButton from './SplitButton/SplitButton'

function ConnectLoadData(props) {
    
    useEffect(()=>{
        props.getChartData()
    },[])
    return(
        <React.Fragment>
            <Header />
            <h3 className="summary-title">Activities Summary</h3>
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
