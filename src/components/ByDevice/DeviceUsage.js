import React from 'react'
import { AiOutlineLaptop } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import "../../styles/DeviceUsage.css"
function DeviceUsage(props) {
    console.log(props)
    return (
        <div className="device-usage">
            <div className="phone">
                <IconContext.Provider value={{size:"60px"}}>
                    <IoPhonePortraitOutline />
                </IconContext.Provider>
                {props.deviceUsage.mobile}:<span className="detail">
                 Adi's phone
                </span>
            </div>
            <div className="laptop">
                <IconContext.Provider value={{size:"110px"}}>
                    <AiOutlineLaptop />     
                </IconContext.Provider>
                {props.deviceUsage.laptop} :<span className="detail">
                 Adi's laptop
                </span>
            </div>
        </div>
    )
}

export default DeviceUsage
