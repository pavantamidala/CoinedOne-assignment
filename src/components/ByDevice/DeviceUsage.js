import React from 'react'

function DeviceUsage(props) {
    console.log(props)
    return (
        <div className="device-usage">
            <div className="phone">
                {props.deviceUsage.mobile}: Adi's phone
            </div>
            <div className="laptop">
                {props.deviceUsage.laptop} : Adi's laptop
            </div>
        </div>
    )
}

export default DeviceUsage
